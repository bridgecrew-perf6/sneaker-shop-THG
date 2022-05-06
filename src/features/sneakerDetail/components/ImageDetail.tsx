function ImageDetail({ mainImage, listImgDetail, changeImg }: any) {
  const handleChangeImg = (e: any) => {
    changeImg(e);
  };
  return (
    <div>
      <img
        src={mainImage.img}
        alt="img"
        className="w-auto"
        style={{ borderRadius: "2%" }}
      />

      <div className="moreDetail flex flex-wrap mt-3 gap-x-3 ">
        {listImgDetail?.map((img: any) => {
          return (
            <img
              src={img.img}
              alt="Checking"
              className={`rounded-full w-20 hover:border border-neutral-400 hover:scale-125  ${
                img.id === mainImage.id ? "border border-neutral-400" : ""
              }`}
              key={img.img}
              onClick={() => {
                handleChangeImg(img);
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ImageDetail;
