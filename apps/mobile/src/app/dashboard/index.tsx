import { LayoutDashboard, Rocket } from "lucide-react-native";
import { StyleSheet, Text, View } from "react-native";

const DashboardScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Dashboard</Text>
      </View>

      <View style={styles.card}>
        <View style={styles.iconContainer}>
          <LayoutDashboard size={48} color="#6366f1" />
        </View>
        <Text style={styles.cardTitle}>Welcome to Lensly</Text>
        <Text style={styles.cardDescription}>
          The mobile dashboard is ready for your new features.
        </Text>

        <View style={styles.badge}>
          <Rocket size={16} color="#6366f1" style={{ marginRight: 8 }} />
          <Text style={styles.badgeText}>Ready to build</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8fafc",
    padding: 20,
  },
  header: {
    marginBottom: 30,
    marginTop: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    color: "#1e293b",
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 24,
    padding: 30,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 5,
  },
  iconContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#6366f110",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: "#1e293b",
    marginBottom: 10,
  },
  cardDescription: {
    fontSize: 16,
    color: "#64748b",
    textAlign: "center",
    lineHeight: 24,
    marginBottom: 20,
  },
  badge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#6366f110",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  badgeText: {
    color: "#6366f1",
    fontWeight: "600",
    fontSize: 14,
  },
});

export default DashboardScreen;
