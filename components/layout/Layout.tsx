import Navbar from "./Navbar";
import ScrollProgress from "../ui/ScrollProgress";
import BackToTop from "./BackToTop";
import CustomCursor from "../ui/CustomCursor";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({
  children,
}: LayoutProps) {
  return (
    <>
      {/* Custom Cursor */}

      <CustomCursor />

      {/* Scroll Progress Bar */}

      <ScrollProgress />

      {/* Navbar */}

      <Navbar />

      {/* Main Content */}

      <main>{children}</main>

      {/* Back To Top Button */}

      <BackToTop />
    </>
  );
}