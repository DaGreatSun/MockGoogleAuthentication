import { FaBatteryFull, FaWifi } from "react-icons/fa";

export function MobileMockup({ title, body }) {
  return (
    <div class="mockup-phone">
      <div class="camera" style={{ zIndex: 0 }}></div>
      <div class="display">
        <div className="flex h-6 items-center justify-between bg-gray-100 px-5">
          <div className="flex items-center gap-[2px]">
            <div className="rounded-full bg-black p-[3px]" />
            <div className="rounded-full bg-black p-[3px]" />
            <div className="rounded-full bg-black p-[3px]" />
            <div className="rounded-full bg-black p-[3px]" />
            <div className="rounded-full bg-black p-[3px]" />
            <FaWifi className="ml-1" />
          </div>
          <div className="flex items-center gap-1">
            <p className="text-xs">100%</p>
            <FaBatteryFull size={20} />
          </div>
        </div>
        <div className="phone-1 artboard overflow-auto bg-white">
          {/* <div className="flex items-center justify-between bg-white px-2">
            <div className="text-xl">{"<"}</div>
            <div className="left-0 top-0 text-center text-xl">{title}</div>
          </div> */}
          {body}
        </div>
      </div>
    </div>
  );
}
