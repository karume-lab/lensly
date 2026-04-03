import { Redirect } from "expo-router";

const OnboardingScreen = () => {
  return <Redirect href="/(auth)/sign-in" />;
};

export default OnboardingScreen;
