import localFont from "next/font/local";

export const cooper = localFont({
  src: [
    {
      path: "./CooperHewitt-Thin.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "./CooperHewitt-ThinItalic.otf",
      weight: "100",
      style: "italic",
    },
    {
      path: "./CooperHewitt-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./CooperHewitt-LightItalic.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "./CooperHewitt-Book.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./CooperHewitt-BookItalic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./CooperHewitt-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./CooperHewitt-MediumItalic.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "./CooperHewitt-Semibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./CooperHewitt-SemiboldItalic.otf",
      weight: "600",
      style: "italic",
    },
    {
      path: "./CooperHewitt-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./CooperHewitt-BoldItalic.otf",
      weight: "700",
      style: "italic",
    },
    {
      path: "./CooperHewitt-Heavy.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./CooperHewitt-HeavyItalic.otf",
      weight: "800",
      style: "italic",
    },
  ],
  variable: "--font-cooper",
});
