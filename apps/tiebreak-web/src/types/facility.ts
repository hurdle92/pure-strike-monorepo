import { CourtsDetailInterface } from "src/apis/courts/types";

export enum FacilityLabelEnum {
  isOnlineReservation = "온라인예약",
  isIndoor = "실내코트",
  isParking = "주차가능",
  isShower = "샤워시설",
  isStore = "매점",
  isRacketString = "스트링교체",
}

export interface FacilityInterface
  extends Pick<
    CourtsDetailInterface,
    | "isOnlineReservation"
    | "isIndoor"
    | "isParking"
    | "isShower"
    | "isStore"
    | "isRacketString"
  > {}
