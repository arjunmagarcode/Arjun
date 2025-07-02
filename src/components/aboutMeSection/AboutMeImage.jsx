const AboutMeImage = () => {
  return (
    <div className="h-[500px] w-[300px] relative">
      <div className="h-[500px] w-[300px] rounded-[100px] absolute overflow-hidden">
        <img
          src="/images/arjun.jpeg"
          alt="About Me Image"
          className="h-full w-auto object-cover"
        />
      </div>
    </div>
  );
};

export default AboutMeImage;
