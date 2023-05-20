"use client";
import useDeviceDetect from "@/hooks/useDeviceDetect/useDeviceDetect";
import usePageBottom from "@/hooks/usePageBottom/usePageBottom";
import useWindowSize from "@/hooks/useWindowSize/useWindowSize";
export default function Home() {
  const { width, height } = useWindowSize();
  const { isMobile } = useDeviceDetect();
  const isBottom = usePageBottom();

  return (
    <>
      useWindowSize(width):{width} <br />
      useDeviceDetect(isMobile):{JSON.stringify(isMobile)}<br />
      usePageBottom(isBottom):{JSON.stringify(isBottom)}
    </>
  );
}
