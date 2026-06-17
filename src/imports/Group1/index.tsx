import imgImage21 from "./a782c686b9e147977efc30ab71b945af6ea25c55.png";
import imgImage22 from "./2025268803791561323b471a016617a9af5ef18f.png";

function Group1() {
  return (
    <div className="-translate-x-1/2 absolute contents left-0 top-0">
      <div className="absolute h-[1661px] left-0 rounded-[48px] top-0 w-[1042px]" data-name="image 21">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[48px] size-full" src={imgImage21} />
      </div>
      <div className="absolute h-[3446px] left-0 rounded-[48px] shadow-[0px_4px_53.3px_0px_rgba(0,0,0,0.25)] top-0 w-[403px]" data-name="image 22">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[48px] size-full" src={imgImage22} />
      </div>
    </div>
  );
}

export default function Group() {
  return (
    <div className="contents relative size-full">
      <Group1 />
    </div>
  );
}