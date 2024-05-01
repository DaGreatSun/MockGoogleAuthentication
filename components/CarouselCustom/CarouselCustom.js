import React from "react";
import Image from "next/image";
import { HiSpeakerphone } from "react-icons/hi";
import { Button, Card, Carousel, Modal } from "react-daisyui";
import { CustomModal } from "@components/CustomComponents";

function CarouselCustom({ items, readMoreBtn }) {
  /***************************************************************************************/
  //State
  /***************************************************************************************/
  const [openModal, setOpenModal] = React.useState(false);
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [createDate, setCreateDate] = React.useState("");

  /***************************************************************************************/
  //Callbacks
  /***************************************************************************************/
  function scrollLeft() {
    document.getElementById("content").scrollLeft -= 500;
  }
  function scrollRight() {
    document.getElementById("content").scrollLeft += 500;
  }

  function toOpenModal(item) {
    setTitle(item.title);
    setDescription(item.description);
    setCreateDate(item.createDate);
    setOpenModal(!openModal);
  }

  function toCloseModal() {
    setTitle("");
    setDescription("");
    setCreateDate("");
    setOpenModal(!openModal);
  }

  const renderSlideItems = () => {
    return items.map((item, index) => (
      <Carousel.Item key={index} className="mx-3 duration-300 hover:scale-105">
        <Card compact={true} className="h-80 w-72 border-2">
          <figure className="h-28">
            <Image
              src={"/announcement_picture.jpg"}
              alt="img"
              width={400}
              height={200}
              className="mt-24 opacity-70"
            />
          </figure>
          <Card.Body className=" relative line-clamp-4 h-5/6 text-left">
            <Card.Title className="line-clamp-1 text-lg">
              {item.title}
            </Card.Title>
            <p className="line-clamp-4">{item.description}</p>

            {/* Optional */}
            {readMoreBtn && (
              <Button
                size="sm"
                className="btn-primary absolute bottom-3 left-4 h-9 rounded-md text-sm"
                onClick={() => toOpenModal(item)}
              >
                Read more
              </Button>
            )}

            {item.createDate !== null && (
              <p className="absolute bottom-5 right-5">{item.createDate}</p>
            )}
          </Card.Body>
        </Card>
      </Carousel.Item>
    ));
  };

  return (
    <div className="relative">
      <Carousel
        id="content"
        className="scrollbar-hide mx-auto flex w-[85%] items-center justify-start overflow-x-auto scroll-smooth rounded-lg border-0 bg-gray1 py-4"
      >
        {renderSlideItems()}
      </Carousel>
      <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
        <button className="btn btn-circle text-black" onClick={scrollLeft}>
          ❮
        </button>
        <button className="btn btn-circle text-black" onClick={scrollRight}>
          ❯
        </button>
      </div>

      <CustomModal
        open={openModal}
        onClose={() => {
          toCloseModal();
        }}
        className={"w-auto max-w-[550px]"}
        bodyClassName={"text-left"}
        title={
          <div className="flex items-center text-left text-2xl font-bold">
            <HiSpeakerphone className="text-red-400" />
            <span className="ml-3">{title ?? ""}</span>
          </div>
        }
      >
        <div className="mb-7">
          <h1 className="text-lg font-bold">Description</h1>
          <p className="text-gray-600">{description}</p>
        </div>
        <div>
          <h1 className="text-lg font-semibold">Announcement Date</h1>
          <p>{createDate}</p>
        </div>
      </CustomModal>
    </div>
  );
}

export default CarouselCustom;
