const NewsCard = ({ title, text, img }) => {
  return (
    <div className="flex w-full pb-[60px]">
      <div className={`flex flex-col items-stretch bg-primary-light p-4 
                      rounded-xl h-full px-[24px] py-[24px]
                      `}>

        <h4 className="text-[24px] font-bold mb-2 uppercase">
          {title}
        </h4>


        <div className="flex flex-row w-[70%]">
          <p className="text-paragraph">{text}</p>

          <div className="flex w-[160px] absolute right-[-10px] bottom-12">
            <img
              src={img}
              alt=""
              className=""
            />
          </div>
        </div>


      </div>
    </div>
  );
};

export default NewsCard;