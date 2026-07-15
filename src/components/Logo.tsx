import Image from "next/image";

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <Image
      src={light ? "/Light logo.png" : "/logo1.png"}
      alt="Centangle"
      width={58}
      height={74}
      priority
      style={{ height: "30.035px", width: "auto", flexShrink: 0 }}
    />
  );
}
