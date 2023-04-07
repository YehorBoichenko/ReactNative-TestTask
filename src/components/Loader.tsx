import React from "react";
import { Platform } from "react-native";
import Spinner from "react-native-loading-spinner-overlay";

/**
 * A component that displays a loading spinner overlay.
 */

export const Loader = () => {
  return (
    <Spinner
      visible={true}
      cancelable={false}
      size={Platform.OS === "ios" ? "large" : 70}
      overlayColor="rgba(0, 0, 0, 0.40)"
      color="#0004ff"
      animation="fade"
      
    />
  );
};

