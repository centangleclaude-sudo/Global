import Image from "next/image";

export default function Logo() {
  return (
    <Image
      src="/logo1.png"
      alt="Centangle"
      width={58}
      height={74}
      priority
      style={{ height: "30.035px", width: "auto", flexShrink: 0 }}
    />
  );
}
