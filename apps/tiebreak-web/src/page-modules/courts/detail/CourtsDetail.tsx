import { Divider, Flex, Spacer, Stack, Text } from "pure-strike-ui";
import { useGetCourtsDetail } from "src/apis/courts/queries";
import { Img } from "src/components/img";
import { withSuspense } from "src/hoc/withSuspense";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { AiOutlineHome } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineContentCopy } from "react-icons/md";
import Link from "next/link";
import React from "react";
import { FacilitiesList } from "./components/facilities/FacilitiesList";
import KakaoMap from "src/utils/map/kakao/KakaoMap";
import { Palette } from "~foundation";
import { copyToClipboard } from "src/utils/clipboard/clipboard";

const CourtsDetail = ({ id }: { id: string }) => {
  const [isShowMore, setIsShowMore] = React.useState(false);
  const { data } = useGetCourtsDetail(id);

  const onClickCopyAddress = () => {
    copyToClipboard(data.address);
  };

  return (
    <Stack
      width={["100%", "420px"]}
      maxWidth={"420px"}
      backgroundColor={"white"}
      borderWidth={"1px"}
      borderColor={"border-gray"}
    >
      <Img src={data.thumbnail} width={"100%"} height={"280px"} />
      <Stack padding={"16px 16px 32px 16px"}>
        <Text fontSize={"24px"} fontWeight={"700"}>
          {data.koName}
        </Text>
        <Spacer height={"16px"} />
        <Flex alignment={"center"}>
          <IoLocationSharp color={"gray"} />
          <Spacer width={"6px"} />
          <Text color={"gray-500"} fontSize={"14px"}>
            {data.address}
          </Text>
        </Flex>
        <Spacer height={"8px"} />
        <Flex alignment={"center"}>
          <Spacer width={"2px"} />
          <FaPhone color={"gray"} size={12} />
          <Spacer width={"8px"} />
          <Text color={"gray-500"} fontSize={"14px"}>
            {data.phoneNumber}
          </Text>
        </Flex>
        <Spacer height={"16px"} />
        <Flex>
          {data.instagram !== " " && (
            <Link href={data.instagram} target={"_blank"}>
              <FaInstagram size={24} style={{ marginRight: "8px" }} />
            </Link>
          )}
          {data.reservationLink !== " " && (
            <Link href={data.reservationLink} target={"_blank"}>
              <AiOutlineHome size={24} />
            </Link>
          )}
        </Flex>
        <Spacer height={"16px"} />
        <Divider height={"2px"} width={"100%"} color={"border-gray"} />
        <Spacer height={"16px"} />
        <Text fontSize={"20px"} fontWeight={"700"}>
          코트 안내
        </Text>
        <Spacer height={"16px"} />
        <Stack maxWidth={"420px"}>
          <Text
            whitespace={"pre-wrap"}
            fontSize={"14px"}
            lineHeight={"22px"}
            ellipsis={!isShowMore}
            ellipsisLine={3}
          >
            {data.description}
          </Text>
          <Spacer height={"12px"} />
          {!isShowMore && (
            <Text
              color={"blue-primary"}
              fontSize={"14px"}
              fontWeight={"700"}
              cursor={"pointer"}
              onClick={() => setIsShowMore(true)}
            >
              더보기
            </Text>
          )}
        </Stack>
      </Stack>
      <Divider width={"100%"} height={"10px"} color={"border-skyblue"} />
      <Stack padding={"16px 16px 32px 16px"}>
        <Text fontSize={"20px"} fontWeight={"700"}>
          코트 정보
        </Text>
        <Spacer height={"16px"} />
        <Flex>
          <Stack width={"80px"}>
            <Text color={"gray-primary"} fontSize={"14px"}>
              코트 타입
            </Text>
          </Stack>
          <Text fontSize={"14px"}>{data.courtType}</Text>
        </Flex>
        <Spacer height={"8px"} />
        <Flex>
          <Stack width={"80px"}>
            <Text color={"gray-primary"} fontSize={"14px"}>
              코트면 수
            </Text>
          </Stack>
          <Text fontSize={"14px"}>{data.numberOfCourts}</Text>
        </Flex>
        <Spacer height={"8px"} />
        <Flex>
          <Stack width={"80px"}>
            <Text color={"gray-primary"} fontSize={"14px"}>
              코트 가격
            </Text>
          </Stack>
          <Text whitespace={"pre-wrap"} fontSize={"14px"} lineHeight={"22px"}>
            {data.courtPrice}
          </Text>
        </Flex>
      </Stack>
      <Divider width={"100%"} height={"10px"} color={"border-skyblue"} />
      <Stack padding={"16px 16px 32px 16px"}>
        <Text fontSize={"20px"} fontWeight={"700"}>
          편의시설
        </Text>
        <Spacer height={"16px"} />
        <FacilitiesList
          isOnlineReservation={data.isOnlineReservation}
          isIndoor={data.isIndoor}
          isParking={data.isParking}
          isShower={data.isShower}
          isStore={data.isStore}
          isRacketString={data.isRacketString}
        />
      </Stack>
      <Divider width={"100%"} height={"10px"} color={"border-skyblue"} />
      <Stack padding={"16px 16px 32px 16px"}>
        <Text fontSize={"20px"} fontWeight={"700"}>
          기본 정보
        </Text>
        <Spacer height={"16px"} />
        <Flex>
          <Stack width={"80px"}>
            <Text color={"gray-primary"} fontSize={"14px"}>
              주소
            </Text>
          </Stack>
          <Text whitespace={"pre-wrap"} fontSize={"14px"} lineHeight={"22px"}>
            {data.address}
          </Text>
        </Flex>
        <Spacer height={"4px"} />
        <Flex>
          <Stack width={"80px"}>
            <Text color={"gray-primary"} fontSize={"14px"}>
              전화
            </Text>
          </Stack>
          <Text whitespace={"pre-wrap"} fontSize={"14px"} lineHeight={"22px"}>
            {data.phoneNumber}
          </Text>
        </Flex>
        <Spacer height={"4px"} />
        <Flex>
          <Stack width={"80px"}>
            <Text color={"gray-primary"} fontSize={"14px"}>
              영업 시간
            </Text>
          </Stack>
          <Text whitespace={"pre-wrap"} fontSize={"14px"} lineHeight={"22px"}>
            {data.operationTime}
          </Text>
        </Flex>
        <Spacer height={"16px"} />
        <KakaoMap lat={data.lat} lng={data.lng} name={data.koName} />
        <Spacer height={"16px"} />
        <Flex
          alignment={"center"}
          cursor={"pointer"}
          onClick={onClickCopyAddress}
        >
          <MdOutlineContentCopy color={Palette["blue-primary"]} size={18} />
          <Spacer width={"2px"} />
          <Text color={"blue-primary"} fontWeight={"500"} fontSize={"14px"}>
            주소복사
          </Text>
        </Flex>
        <Spacer height={"16px"} />
      </Stack>
    </Stack>
  );
};

export default withSuspense(CourtsDetail);
