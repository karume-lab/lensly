import { readFileSync } from "node:fs";
import { extname } from "node:path";
import mammoth from "mammoth";
import { PDFParse } from "pdf-parse";
import { createWorker } from "tesseract.js";

export class DocumentService {
  async extractText(filePath: string): Promise<string> {
    const extension = extname(filePath).toLowerCase();
    const buffer = readFileSync(filePath);

    switch (extension) {
      case ".pdf":
        return await this.extractTextFromPDF(buffer);
      case ".docx":
        return await this.extractTextFromDOCX(buffer);
      case ".png":
      case ".jpg":
      case ".jpeg":
        return await this.performOCR(buffer);
      case ".txt":
        return buffer.toString("utf-8");
      default:
        throw new Error(`Unsupported file extension: ${extension}`);
    }
  }

  private async extractTextFromPDF(buffer: Buffer): Promise<string> {
    try {
      const parser = new PDFParse({ data: buffer });
      const result = await parser.getText();
      let text = result.text;

      // If text is suspiciously short, it might be a scanned PDF
      if (text.trim().length < 50) {
        console.log("PDF text extraction returned very little data. Attempting OCR...");
        const screenshots = await parser.getScreenshot({
          imageBuffer: true,
          scale: 2, // Higher scale for better OCR
        });

        const ocrResults = [];
        for (const page of screenshots.pages) {
          if (page.data) {
            const pageText = await this.performOCR(Buffer.from(page.data));
            ocrResults.push(pageText);
          }
        }

        if (ocrResults.length > 0) {
          text = ocrResults.join("\n\n");
        }
      }

      return text;
    } catch (error) {
      console.error("Error extracting text from PDF:", error);
      throw new Error("Failed to extract text from PDF");
    }
  }

  private async performOCR(buffer: Buffer): Promise<string> {
    const worker = await createWorker("eng");
    try {
      const {
        data: { text },
      } = await worker.recognize(buffer);
      return text;
    } catch (error) {
      console.error("OCR Error:", error);
      throw new Error("Failed to perform OCR on document");
    } finally {
      await worker.terminate();
    }
  }

  private async extractTextFromDOCX(buffer: Buffer): Promise<string> {
    try {
      const result = await mammoth.extractRawText({ buffer });
      return result.value;
    } catch (error) {
      console.error("Error extracting text from DOCX:", error);
      throw new Error("Failed to extract text from DOCX");
    }
  }
}

export const documentService = new DocumentService();
