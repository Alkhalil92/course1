import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CheckCircle2, Users, Target, BrainCircuit, Wrench, Star, HelpCircle, Calendar, Clock, Wallet, ArrowLeft } from 'lucide-react'

export default function AiSkillsWorkshopPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-20 md:py-32 bg-gradient-to-b from-gray-50 to-gray-100 text-center">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto space-y-6">
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
                🚀 مهارات الذكاء الاصطناعي وأدوات المستقبل
              </h1>
              <p className="text-lg md:text-xl text-gray-600">
                حوّل فضولك نحو الذكاء الاصطناعي إلى مهارات عملية تطبقها بنفسك خلال يومين فقط. برنامج تدريبي مباشر أونلاين
                يعلمك الأدوات التي ستغير طريقة عملك... من صناعة المحتوى إلى بناء البوتات وصفحات الهبوط!
              </p>
              <div className="bg-white shadow-lg rounded-xl p-6 max-w-lg mx-auto border border-gray-200">
                <p className="text-lg font-bold text-purple-700 mb-4">🎯 احجز مقعدك الآن – الأماكن محدودة</p>
                <div className="flex flex-col sm:flex-row justify-around items-center text-gray-700 space-y-3 sm:space-y-0">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-purple-500" />
                    <span className="font-semibold">18 و19 يوليو</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-purple-500" />
                    <span className="font-semibold">3 ساعات يوميًا</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Wallet className="w-5 h-5 text-purple-500" />
                    <span className="font-semibold">45 ريال عماني فقط</span>
                  </div>
                </div>
              </div>
              <Button size="lg" className="mt-6 bg-purple-600 hover:bg-purple-700 text-white text-lg px-10 py-6 group">
                سجل الآن
                <ArrowLeft className="mr-2 h-5 w-5 transition-transform group-hover:-translate-x-1" />
              </Button>
            </div>
          </div>
        </section>

        {/* Who is this for? */}
        <section id="for-whom" className="w-full py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold flex items-center justify-center gap-3">
                <Users className="w-8 h-8 text-blue-500" /> لمن هذا البرنامج؟
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "صناع المحتوى والمسوقين",
                "المستقلين ورواد الأعمال",
                "المهتمين بتقنيات الذكاء الاصطناعي",
                "من يريد رفع إنتاجيته واكتساب مهارات المستقبل",
              ].map((audience) => (
                <Card key={audience} className="text-center p-6 shadow-md hover:shadow-xl transition-shadow">
                  <CardContent className="flex flex-col items-center gap-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <CheckCircle2 className="w-8 h-8 text-blue-600" />
                    </div>
                    <p className="text-lg font-semibold">{audience}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* What will you learn? */}
        <section id="learn" className="w-full py-16 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold flex items-center justify-center gap-3">
                <Target className="w-8 h-8 text-purple-500" /> ماذا ستتعلم؟
              </h2>
              <p className="text-gray-600 mt-4">خلال يومين فقط، ستتقن المهارات والأدوات التي تضعك في المقدمة.</p>
            </div>
            <div className="max-w-4xl mx-auto">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-lg">
                {[
                  "كتابة أوامر فعالة لأدوات الذكاء الاصطناعي (Prompt Engineering)",
                  "توليد محتوى احترافي (نصوص – صور – فيديوهات قصيرة)",
                  "تصميم شرائح وعروض تقديمية باستخدام Genspark",
                  "بناء بوتات دردشة ذكية (ManyChat – Poe – Gemini)",
                  "تحليل ملفات ومحتوى PDF باستخدام Claude",
                  "تصميم صفحات هبوط ونشرها على GitHub باستخدام V0 وVercel",
                  "ربط الأدوات في سير عمل مؤتمت (Workflow Automation)",
                ].map((skill) => (
                  <li key={skill} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Tools Section */}
        <section id="tools" className="w-full py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold flex items-center justify-center gap-3">
                <Wrench className="w-8 h-8 text-gray-700" /> الأدوات التي ستتدرب عليها
              </h2>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 max-w-5xl mx-auto">
              {[
                "ChatGPT",
                "Claude",
                "Poe",
                "Gemini",
                "Genspark",
                "Manus",
                "ManyChat",
                "V0.dev",
                "GitHub",
                "Vercel",
              ].map((tool) => (
                <div
                  key={tool}
                  className="bg-gray-100 border border-gray-200 rounded-lg px-5 py-2 text-lg font-semibold text-gray-700 shadow-sm hover:bg-gray-200 transition-colors"
                >
                  {tool}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Join Us? */}
        <section id="why-us" className="w-full py-16 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold flex items-center justify-center gap-3">
                <Star className="w-8 h-8 text-yellow-500" /> لماذا تنضم إلينا؟
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                { title: "تركيز عملي وتطبيقي", desc: "تطبيق مباشر ومكثف على الأدوات لضمان الفهم الكامل." },
                { title: "تدريب حيّ أونلاين", desc: "تفاعل مباشر مع المدرب لطرح الأسئلة والحصول على إجابات فورية." },
                { title: "سعر تنافسي", desc: "فقط 45 ريال عماني لاستثمار يغير مسارك المهني." },
                { title: "شهادة مشاركة إلكترونية", desc: "إثبات لمهاراتك الجديدة يمكنك إضافته لسيرتك الذاتية." },
                { title: "مدة قصيرة – فائدة طويلة", desc: "يومان من التدريب المكثف يوفران عليك شهورًا من البحث." },
                { title: "مناسب للجميع", desc: "مصمم للمبتدئين وذوي الخبرة البسيطة على حد سواء." },
              ].map((point) => (
                <Card key={point.title} className="shadow-md hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-xl">
                      <div className="bg-purple-100 p-2 rounded-full">
                        <Star className="w-6 h-6 text-purple-600" />
                      </div>
                      {point.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{point.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Instructor Section */}
        <section id="instructor" className="w-full py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold flex items-center justify-center gap-3">
                <BrainCircuit className="w-8 h-8 text-blue-500" /> من يدربك؟
              </h2>
            </div>
            <Card className="max-w-3xl mx-auto p-8 shadow-lg border-gray-200">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <Avatar className="w-32 h-32 border-4 border-blue-200">
                  <AvatarImage src="/placeholder.svg?width=128&height=128" alt="المدرب" />
                  <AvatarFallback>م</AvatarFallback>
                </Avatar>
                <div className="text-center md:text-right">
                  <h3 className="text-2xl font-bold">خبير أدوات الذكاء الاصطناعي</h3>
                  <p className="text-gray-600 mt-2">
                    خبير في تكامل أدوات الذكاء الاصطناعي في المشاريع الرقمية. عمل على مشاريع متعددة تشمل: بناء البوتات،
                    توليد المحتوى، وتصميم حلول ذكية. يركز على تحويل الأدوات إلى قيمة حقيقية وملموسة للمشارك.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="w-full py-16 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold flex items-center justify-center gap-3">
                <HelpCircle className="w-8 h-8 text-green-500" /> الأسئلة الشائعة
              </h2>
            </div>
            <Accordion type="single" collapsible className="max-w-3xl mx-auto">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg font-semibold">هل أحتاج خبرة مسبقة؟</AccordionTrigger>
                <AccordionContent className="text-base text-gray-600">
                  لا. البرنامج مصمم للمبتدئين وذوي الخبرة البسيطة في الذكاء الاصطناعي. سنبدأ معك من الأساسيات.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg font-semibold">هل سأحصل على شهادة؟</AccordionTrigger>
                <AccordionContent className="text-base text-gray-600">
                  نعم، ستحصل على شهادة مشاركة إلكترونية عند إكمال البرنامج بنجاح، يمكنك مشاركتها على لينكدإن أو إضافتها
                  لسيرتك الذاتية.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-lg font-semibold">ما نوع التطبيقات التي سأخرج بها؟</AccordionTrigger>
                <AccordionContent className="text-base text-gray-600">
                  ستخرج من البرنامج بمشاريع عملية مثل: صفحة هبوط جاهزة للنشر، فيديو قصير، بوت دردشة فعال، مسار عمل آلي،
                  ومحتوى تسويقي تم إنشاؤه بالذكاء الاصطناعي.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-lg font-semibold">هل الأدوات المستخدمة مجانية؟</AccordionTrigger>
                <AccordionContent className="text-base text-gray-600">
                  سيتم استخدام أدوات مجانية بالكامل أو أدوات توفر نسخًا تجريبية كافية تتيح لك التطبيق مباشرة خلال فترة
                  التدريب دون أي تكاليف إضافية.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Final CTA */}
        <section className="w-full py-20 md:py-28 bg-gradient-to-t from-gray-800 to-gray-900 text-white">
          <div className="container px-4 md:px-6 text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-extrabold">🚀 لا تفوّت الفرصة...</h2>
              <p className="mt-4 text-lg md:text-xl text-gray-300">
                يومان فقط قد يغيران طريقة عملك بالكامل. ابدأ الآن رحلتك مع أدوات المستقبل.
              </p>
              <Button
                size="lg"
                className="mt-8 bg-white hover:bg-gray-200 text-purple-700 font-bold text-lg px-10 py-6 group"
              >
                سجل الآن – المقاعد محدودة
                <ArrowLeft className="mr-2 h-5 w-5 transition-transform group-hover:-translate-x-1" />
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-gray-400 py-6">
        <div className="container px-4 md:px-6 text-center">
          <p>&copy; {new Date().getFullYear()} برنامج مهارات الذكاء الاصطناعي. جميع الحقوق محفوظة.</p>
        </div>
      </footer>
    </div>
  )
}
