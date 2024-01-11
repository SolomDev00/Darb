import CourseCard from "../components/cards/CourseCard";

const SubscriptionsSection = () => {
  return (
    <section className="container pb-16">
      <h2 className="text-3xl pb-14">
        آخر اشتراكات <span className="mark">الطلاب</span>
      </h2>
      <div className="flex flex-col justify-between gap-y-12">
        {/* First ADS */}
        <div className="flex flex-row justify-between gap-3">
          <CourseCard
            title="مادة الآحياء - تالتة ثانوي"
            teacher="مس / آمل كلس"
            price={500}
            offer={350}
          />
          <CourseCard
            title="مادة الفيزياء - تالتة ثانوي"
            teacher="مستر / أشرف  الوصيف"
            price={300}
            offer={250}
          />
          <CourseCard
            title="مادة الكيمياء - تالتة ثانوي"
            teacher="مستر / أحمد نافع"
            price={400}
            offer={300}
          />
          <CourseCard
            title="مادة الرياضيات - تالتة ثانوي"
            teacher="مستر / طارق الداجن"
            price={500}
            offer={350}
          />
        </div>
        {/* Second ADS */}
        <div className="flex flex-row justify-between gap-3">
          <CourseCard
            title="مادة الآحياء - تانية ثانوي"
            teacher="مس / آمل كلس"
            price={200}
            offer={350}
          />
          <CourseCard
            title="مادة الفيزياء - تانية ثانوي"
            teacher="مستر / أشرف  الوصيف"
            price={200}
            offer={350}
          />
          <CourseCard
            title="مادة الكيمياء - تانية ثانوي"
            teacher="مستر / أحمد نافع"
            price={200}
            offer={350}
          />
          <CourseCard
            title="مادة الرياضيات - تانية ثانوي"
            teacher="مستر / طارق الداجن"
            price={350}
            offer={350}
          />
        </div>
        {/* Third ADS */}
        <div className="flex flex-row justify-between gap-3">
          <CourseCard
            title="مادة الآحياء - اولي ثانوي"
            teacher="مس / آمل كلس"
            price={150}
            offer={350}
          />
          <CourseCard
            title="مادة الفيزياء - اولي ثانوي"
            teacher="مستر / أشرف  الوصيف"
            price={200}
            offer={350}
          />
          <CourseCard
            title="مادة الكيمياء - اولي ثانوي"
            teacher="مستر / أحمد نافع"
            price={200}
            offer={350}
          />
          <CourseCard
            title="مادة الرياضيات - اولي ثانوي"
            teacher="مستر / طارق الداجن"
            price={250}
            offer={350}
          />
        </div>
      </div>
    </section>
  );
};

export default SubscriptionsSection;
