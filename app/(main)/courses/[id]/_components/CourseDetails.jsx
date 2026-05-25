
import CourseOverview from "./CourseOverview";
import CourseCurriculam from "./CourseCurriculum";
import CourseInstructor from "./CourseInstructor";


import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import Image from "next/image";
import { formatMyDate } from "@/lib/date";

const CourseDetails = ({ course }) => {

    const lastModifiedDate = formatMyDate(course.modifiedOn);
    return (
        <section className="py-8 md:py-12 lg:py-24">
            <div className="container">
                <span className="bg-green-500 px-4 py-0.5 rounded-full text-xs font-medium text-white inline-block">
                    {course?.category?.title}
                </span>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold 2xl:text-5xl mt-3">
                    {course?.title}
                </h3>
                <p className="mt-3 text-gray-600 text-sm">
                    {course?.subtitle}
                </p>
                {/*  */}
                <div className="flex sm:items-center gap-5 flex-col sm:flex-row sm:gap-6 md:gap-20 mt-6">
                    <div className="flex items-center gap-2">
                        <Image
                            className="w-[40px] h-[40px] rounded-full"
                            src={course?.instructor?.profilePicture}
                            alt={course?.instructor?.firstName}
                            width={20}
                            height={20}
                        />
                        <p className="font-bold">{course?.instructor?.firstName} {' '} {course?.instructor?.lastName}
                        </p>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                        <span className="text-success font-semibold">Last Updated: </span>
                        <span>{lastModifiedDate}</span>
                    </div>
                </div>
                {/* Tab */}
                <div className="my-6 w-full">
                    <Accordion defaultValue={["shipping"]} className="max-w-lg w-full">
                        <AccordionItem value="overview" className="my-6 max-w-[768px] w-full">
                            <AccordionTrigger>Overview</AccordionTrigger>
                            <AccordionContent>
                                <CourseOverview course={course} />
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="carriculum">
                            <AccordionTrigger>Carriculum</AccordionTrigger>
                            <AccordionContent>
                                <CourseCurriculam course={course} />
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="instructor">
                            <AccordionTrigger>Instructor</AccordionTrigger>
                            <AccordionContent>
                                <CourseInstructor course={course}/>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </section>
    );
};

export default CourseDetails;
