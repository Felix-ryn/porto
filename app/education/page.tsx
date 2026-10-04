import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { education } from "@/data/education";
import { IconGraduationCap, IconTrophy, IconCheckCircle } from "@/components/Icons";

export default function EducationPage() {
  return (
    <>
      <Navbar />

      {/* Header */}
      <section className="pt-36 pb-12">
        <div className="section-container text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Education
          </h1>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            My academic background and professional certifications
          </p>
        </div>
      </section>

      {/* Education Timeline */}
      <section className="py-12">
        <div className="section-container">
          <div>
            {education.map((edu, index) => (
              <div key={edu.id} className="flex gap-6">
                {/* Timeline rail: icon + connecting line, height matches content via flex */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-14 h-14 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600">
                    <IconGraduationCap className="w-6 h-6" />
                  </div>
                  {index !== education.length - 1 && (
                    <div className="w-px flex-1 bg-slate-200 my-2" />
                  )}
                </div>

                {/* Card */}
                <div className="card p-8 flex-1 mb-8 self-start">
                  <h3 className="text-xl md:text-2xl font-bold mb-1">
                    {edu.degree}
                  </h3>
                  <h4 className="text-lg font-semibold text-slate-700 mb-1">
                    {edu.institution}
                  </h4>
                  <p className="text-blue-600 font-semibold text-sm mb-4">
                    {edu.field} • {edu.startYear} - {edu.endYear}
                  </p>

                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {edu.description}
                  </p>

                  <div>
                    <h5 className="font-bold text-slate-800 mb-3 text-sm">Achievements</h5>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {edu.achievements.map((achievement, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-3 bg-slate-50 p-3 rounded-lg"
                        >
                          <IconCheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-600 text-sm">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 bg-white border-y border-slate-200">
        <div className="section-container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
            Certifications
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "AWS Solutions Architect", issuer: "Amazon Web Services" },
              { name: "Google Cloud Professional", issuer: "Google Cloud" },
              { name: "Full Stack Development", issuer: "Coursera" },
            ].map((cert, idx) => (
              <div key={idx} className="card p-6 text-center">
                <IconTrophy className="w-10 h-10 text-blue-600 mx-auto mb-4" />
                <h4 className="text-base font-bold mb-1">
                  {cert.name}
                </h4>
                <p className="text-slate-500 text-sm">{cert.issuer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="section-container text-center space-y-5">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to Work Together?</h2>
          <p className="text-blue-100 text-lg">
            Let&apos;s connect and discuss how I can help with your project
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"
          >
            Get In Touch
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
