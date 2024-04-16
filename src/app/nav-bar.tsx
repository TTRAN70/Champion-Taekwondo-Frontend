import Device from "@/app/device";

export default function NavBar() {
  return (
    <div className="w-full bg-black h-24 md:h-44 flex pl-5 md:pl-20 sticky top-0">
      <Device />
    </div>
  );
}
