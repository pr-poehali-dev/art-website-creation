import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    description: '',
    budget: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Заказ отправлен:', formData);
  };

  const artworks = [
    {
      id: 0,
      title: "Семь смертных грехов и древо познания",
      category: "Духовно-философская живопись",
      description: "Аллегория связи между семью смертными грехами и первородным грехом. Круговая композиция с надкусанным яблоком в центре и семью руками, отражающими грехи и соответствующие чакры. Масло, холст, 90см, 2024г.",
      image: "https://cdn.poehali.dev/files/aba8c1a5-e359-420a-8b0b-ab388d6cb395.jpg"
    },
    {
      id: 1,
      title: "Коллективное бессознательное",
      category: "Психоаналитическая живопись",
      description: "Монументальная работа 90см, отражающая идеи К.Г. Юнга о 12 архетипах, самости через образ феникса, аниме и анимусе. Масло, холст, 2024-2025г.",
      image: "https://cdn.poehali.dev/files/70fbb8b2-cee6-496f-96d0-2ad01fc5d4b4.jpg"
    },
    {
      id: 2,
      title: "Индивидуация",
      category: "Психологический портрет",
      description: "Процесс становления личности через интеграцию тени и персоны",
      image: "/img/f43befb1-00b7-4bcd-9fca-72c6543a6f28.jpg"
    },
    {
      id: 3,
      title: "Герметические символы",
      category: "Мистическая композиция",
      description: "Исследование герметической максимы: ‘То, что внизу, подобно тому, что вверху’",
      image: "/img/c8a48cee-c928-453d-9132-d1d8a6692c81.jpg"
    },
    {
      id: 4,
      title: "Трансформация травмы",
      category: "Психотерапевтическое искусство",
      description: "Проработка травматического опыта через символическое выражение и архетипические образы",
      image: "/img/01e05285-6f09-4d68-a0ad-7b8266c5d108.jpg"
    },
    {
      id: 5,
      title: "Анима и Анимус",
      category: "Психологический символизм",
      description: "Исследование мужского и женского начал в психике через архетипические образы",
      image: "/img/f43befb1-00b7-4bcd-9fca-72c6543a6f28.jpg"
    },
    {
      id: 6,
      title: "Путь индивидуации",
      category: "Психоаналитический сюрреализм",
      description: "Процесс самопознания через осознание бессознательных содержаний психики",
      image: "/img/c8a48cee-c928-453d-9132-d1d8a6692c81.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-mystic-fog via-mystic-cream to-mystic-smoke/20">
      {/* Мистическая навигация */}
      <nav className="fixed top-0 w-full z-50 bg-mystic-dark/80 backdrop-blur-md border-b border-mystic-smoke/30">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-gothic-gold to-mystic-mustard rounded-full flex items-center justify-center">
                <Icon name="Eye" size={20} className="text-mystic-dark" />
              </div>
              <h1 className="text-2xl font-cinzel font-semibold text-mystic-fog tracking-wider">
                Алёна Петина
              </h1>
            </div>
            <div className="hidden md:flex space-x-8">
              {['Главная', 'Наследие', 'Галерея', 'Философия', 'Заказать', 'Контакты'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-mystic-fog hover:text-gothic-gold transition-colors font-cormorant text-lg">
                  {item}
                </a>
              ))}
            </div>
            <Button variant="outline" className="md:hidden bg-mystic-dark/20 border-mystic-smoke/30 text-mystic-fog">
              <Icon name="Menu" size={20} />
            </Button>
          </div>
        </div>
      </nav>

      {/* Мистический героический блок */}
      <section id="главная" className="pt-20 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-mystic-dark/10 via-transparent to-mystic-green/10"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center space-y-12 animate-fade-in">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-4 bg-mystic-dark/10 backdrop-blur-sm rounded-full px-6 py-3 border border-mystic-smoke/20">
                <Icon name="Sparkles" size={20} className="text-gothic-gold" />
                <span className="font-cormorant text-mystic-dark text-lg">Психоаналитическое искусство</span>
              </div>
              
              <h1 className="text-6xl md:text-8xl font-cinzel font-bold text-mystic-dark leading-tight">
                Алёна<br />
                <span className="text-mystic-blue">Петина</span>
              </h1>
              
              <div className="max-w-4xl mx-auto space-y-4">
                <p className="text-2xl md:text-3xl font-cormorant text-mystic-blue/80 italic">
                  «Искусство как мост между видимым и невидимым»
                </p>
                <p className="text-lg font-cormorant text-mystic-dark/70 leading-relaxed">
                  Художник, соединяющий классические традиции семейной династии Петиных 
                  с современным пониманием психологии и мистических учений
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg" 
                className="bg-mystic-blue hover:bg-mystic-dark text-mystic-fog font-cormorant font-semibold px-10 py-6 text-xl border border-mystic-smoke/30"
              >
                Исследовать работы
                <Icon name="ArrowRight" size={24} className="ml-3" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-mystic-blue bg-transparent text-mystic-blue hover:bg-mystic-blue hover:text-mystic-fog font-cormorant font-semibold px-10 py-6 text-xl"
              >
                Узнать о наследии
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Наследие династии */}
      <section id="наследие" className="py-24 bg-mystic-dark text-mystic-fog">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="Crown" size={28} className="text-gothic-gold" />
                  <h2 className="text-4xl md:text-5xl font-cinzel font-bold">
                    Династия Петиных
                  </h2>
                </div>
                <div className="h-1 w-24 bg-gradient-to-r from-gothic-gold to-mystic-mustard"></div>
              </div>
              
              <div className="space-y-6 font-cormorant text-lg leading-relaxed">
                <p className="text-mystic-fog/90">
                  Алёна Петина принадлежит к знаменитому роду художников и скульпторов, 
                  чьё творческое наследие увековечено в Музее скульптуры имени Петиных.
                </p>
                <p className="text-mystic-fog/90">
                  Продолжая семейные традиции, она развивает уникальный стиль, сочетающий 
                  классические техники с современным пониманием человеческой психики и 
                  мистических аспектов бытия.
                </p>
                <p className="text-mystic-fog/90">
                  Каждое произведение Алёны — это глубокое погружение в тайны сознания, 
                  где искусство становится инструментом познания внутреннего мира человека.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Icon name="Museum" size={20} className="text-gothic-gold" />
                    <span className="font-cinzel font-semibold">Музей скульптуры</span>
                  </div>
                  <p className="text-sm text-mystic-fog/70 font-cormorant">имени Петиных</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Icon name="Users" size={20} className="text-gothic-gold" />
                    <span className="font-cinzel font-semibold">Династия</span>
                  </div>
                  <p className="text-sm text-mystic-fog/70 font-cormorant">Художников и скульпторов</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 bg-gradient-to-br from-mystic-blue/20 to-mystic-green/20 backdrop-blur-sm rounded-3xl p-8 border border-mystic-smoke/20">
                <div className="space-y-6">
                  <div className="text-center space-y-3">
                    <Icon name="Palette" size={48} className="text-gothic-gold mx-auto" />
                    <h3 className="text-2xl font-cinzel font-semibold">Философия творчества</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <Icon name="Circle" size={8} className="text-gothic-gold mt-2" />
                      <div>
                        <h4 className="font-cinzel font-medium">Психология в искусстве</h4>
                        <p className="text-sm text-mystic-fog/70 font-cormorant">Исследование глубин человеческого сознания</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Icon name="Circle" size={8} className="text-gothic-gold mt-2" />
                      <div>
                        <h4 className="font-cinzel font-medium">Мистические учения</h4>
                        <p className="text-sm text-mystic-fog/70 font-cormorant">Поиск сакрального в повседневном</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Icon name="Circle" size={8} className="text-gothic-gold mt-2" />
                      <div>
                        <h4 className="font-cinzel font-medium">Семейные традиции</h4>
                        <p className="text-sm text-mystic-fog/70 font-cormorant">Наследие поколений художников</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-gothic-gold/20 to-mystic-mustard/20 rounded-3xl transform rotate-3 -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Детальный разбор основной работы */}
      <section className="py-24 bg-mystic-dark text-mystic-fog relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-mystic-blue/5 via-transparent to-mystic-green/5"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img 
                src="https://cdn.poehali.dev/files/70fbb8b2-cee6-496f-96d0-2ad01fc5d4b4.jpg"
                alt="Коллективное бессознательное"
                className="w-full rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-gothic-gold to-mystic-mustard rounded-2xl p-4 shadow-xl">
                <div className="text-center">
                  <div className="text-2xl font-cinzel font-bold text-mystic-dark">90см</div>
                  <div className="text-sm font-cormorant text-mystic-dark/70">холст • масло</div>
                  <div className="text-xs font-cormorant text-mystic-dark/70">2024-2025</div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-cinzel font-bold text-mystic-fog">
                  Коллективное<br />
                  <span className="text-gothic-gold">бессознательное</span>
                </h2>
                <div className="h-1 w-32 bg-gradient-to-r from-gothic-gold to-mystic-mustard"></div>
              </div>

              <div className="space-y-6 font-cormorant text-lg leading-relaxed">
                <p className="text-mystic-fog/90">
                  Монументальная работа, воплощающая ключевые концепции К.Г. Юнга о структуре 
                  человеческой психики и коллективном бессознательном.
                </p>
                <p className="text-mystic-fog/90">
                  В центре композиции — <span className="text-gothic-gold font-semibold">самость</span>, 
                  изображённая как феникс, символизирующий процесс трансформации и возрождения личности.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <Card className="bg-mystic-blue/10 backdrop-blur-sm border border-mystic-smoke/20 p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <Icon name="Eye" size={20} className="text-gothic-gold" />
                    <span className="font-cinzel font-semibold text-mystic-fog">Тень</span>
                  </div>
                  <p className="text-sm font-cormorant text-mystic-fog/80">
                    Серебряная решётка с плачущими глазами — подавленные аспекты личности
                  </p>
                </Card>
                
                <Card className="bg-mystic-green/10 backdrop-blur-sm border border-mystic-smoke/20 p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <Icon name="Users" size={20} className="text-gothic-gold" />
                    <span className="font-cinzel font-semibold text-mystic-fog">Персона</span>
                  </div>
                  <p className="text-sm font-cormorant text-mystic-fog/80">
                    Пять масок с разными выражениями — социальные роли человека
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Символические слои работы */}
      <section className="py-24 bg-gradient-to-b from-mystic-cream to-mystic-fog">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-cinzel font-bold text-mystic-dark mb-6">
              Символические слои
            </h2>
            <p className="text-xl font-cormorant text-mystic-dark/70 max-w-4xl mx-auto italic">
              Каждый элемент картины несёт глубокий психоаналитический смысл
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-mystic-fog/70 backdrop-blur-sm border border-mystic-smoke/30 p-8 text-center">
              <Icon name="Flame" size={40} className="mx-auto mb-4 text-gothic-gold" />
              <h3 className="text-xl font-cinzel font-semibold text-mystic-dark mb-3">Феникс-самость</h3>
              <p className="font-cormorant text-mystic-dark/70 text-sm leading-relaxed">
                Центральный архетип целостности, возрождение через интеграцию противоположностей
              </p>
            </Card>

            <Card className="bg-mystic-fog/70 backdrop-blur-sm border border-mystic-smoke/30 p-8 text-center">
              <Icon name="Sun" size={40} className="mx-auto mb-4 text-gothic-gold" />
              <h3 className="text-xl font-cinzel font-semibold text-mystic-dark mb-3">Анима и Анимус</h3>
              <p className="font-cormorant text-mystic-dark/70 text-sm leading-relaxed">
                Женщина с солнцем, мужчина с луной — архетипы противоположного пола в психике
              </p>
            </Card>

            <Card className="bg-mystic-fog/70 backdrop-blur-sm border border-mystic-smoke/30 p-8 text-center">
              <Icon name="Scroll" size={40} className="mx-auto mb-4 text-gothic-gold" />
              <h3 className="text-xl font-cinzel font-semibold text-mystic-dark mb-3">Герметическая максима</h3>
              <p className="font-cormorant text-mystic-dark/70 text-sm leading-relaxed">
                «То, что внизу, подобно тому, что вверху» — единство микро- и макрокосма
              </p>
            </Card>

            <Card className="bg-mystic-fog/70 backdrop-blur-sm border border-mystic-smoke/30 p-8 text-center">
              <Icon name="TreePine" size={40} className="mx-auto mb-4 text-gothic-gold" />
              <h3 className="text-xl font-cinzel font-semibold text-mystic-dark mb-3">12 Архетипов</h3>
              <p className="font-cormorant text-mystic-dark/70 text-sm leading-relaxed">
                Руки с атрибутами: меч героя, леденец ребёнка, свеча мудреца и другие
              </p>
            </Card>
          </div>

          <div className="mt-16 bg-gradient-to-r from-mystic-blue/10 via-mystic-green/10 to-mystic-mustard/10 rounded-3xl p-12 border border-mystic-smoke/30">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <h4 className="text-xl font-cinzel font-semibold text-mystic-dark flex items-center">
                  <Icon name="Crown" size={24} className="text-gothic-gold mr-3" />
                  Верхний слой
                </h4>
                <div className="space-y-3 font-cormorant text-mystic-dark/70">
                  <p>• Анима (женщина с солнцем)</p>
                  <p>• Анимус (мужчина с луной)</p>
                  <p>• Парение в небесах</p>
                  <p>• Единство противоположностей</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-xl font-cinzel font-semibold text-mystic-dark flex items-center">
                  <Icon name="Target" size={24} className="text-gothic-gold mr-3" />
                  Центральный круг
                </h4>
                <div className="space-y-3 font-cormorant text-mystic-dark/70">
                  <p>• Феникс как самость</p>
                  <p>• Тень за решёткой</p>
                  <p>• Персона из пяти масок</p>
                  <p>• Фон со словом «должен»</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-xl font-cinzel font-semibold text-mystic-dark flex items-center">
                  <Icon name="Hand" size={24} className="text-gothic-gold mr-3" />
                  Внешний круг
                </h4>
                <div className="space-y-3 font-cormorant text-mystic-dark/70">
                  <p>• Дерево познания</p>
                  <p>• 12 архетипических рук</p>
                  <p>• Атрибуты каждого архетипа</p>
                  <p>• Коллективное бессознательное</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Семь смертных грехов и древо познания */}
      <section className="py-24 bg-gradient-to-b from-mystic-dark via-mystic-dark to-mystic-smoke relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.3)_80%)]"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-cinzel font-bold text-mystic-fog mb-6">
              Семь смертных грехов<br />
              <span className="text-gothic-gold">и древо познания</span>
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-gothic-gold to-mystic-mustard mx-auto mb-8"></div>
            <p className="text-xl font-cormorant text-mystic-fog/80 max-w-4xl mx-auto italic leading-relaxed">
              Аллегория связи между христианскими смертными грехами и восточной концепцией чакр. 
              Путь к пониманию природы человека через познание всех её граней.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="relative">
              <div className="aspect-square rounded-full overflow-hidden shadow-2xl border-4 border-gothic-gold/30">
                <img 
                  src="https://cdn.poehali.dev/files/aba8c1a5-e359-420a-8b0b-ab388d6cb395.jpg"
                  alt="Семь смертных грехов и древо познания"
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-1000"
                />
              </div>
              <div className="absolute -top-4 -right-4 bg-gradient-to-br from-gothic-gold to-mystic-mustard rounded-2xl p-4 shadow-xl">
                <div className="text-center">
                  <div className="text-2xl font-cinzel font-bold text-mystic-dark">90см</div>
                  <div className="text-sm font-cormorant text-mystic-dark/70">холст • масло</div>
                  <div className="text-xs font-cormorant text-mystic-dark/70">2024г</div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="space-y-6 font-cormorant text-lg leading-relaxed">
                <p className="text-mystic-fog/90">
                  В центре композиции — <span className="text-gothic-gold font-semibold">надкусанное яблоко</span> 
                  как символ первородного греха и древа познания добра и зла.
                </p>
                <p className="text-mystic-fog/90">
                  Семь рук расположены по кругу по часовой стрелке, каждая воплощает один из смертных грехов 
                  и соответствует определённой чакре энергетической системы человека.
                </p>
                <p className="text-mystic-fog/90 italic">
                  «Чтобы полностью понять природу человека, необходимо познать все его грани» — 
                  как светлые, так и теневые стороны души.
                </p>
              </div>

              <div className="bg-mystic-blue/10 backdrop-blur-sm border border-mystic-smoke/20 rounded-2xl p-6">
                <h3 className="font-cinzel font-semibold text-mystic-fog mb-4 flex items-center">
                  <Icon name="Zap" size={20} className="text-gothic-gold mr-3" />
                  Концепция работы
                </h3>
                <div className="space-y-3 text-sm font-cormorant text-mystic-fog/80">
                  <p>• Синтез христианской и восточной философии</p>
                  <p>• Семь грехов как проявления блоков чакр</p>
                  <p>• Круговая композиция — цикличность человеческой природы</p>
                  <p>• Первородный грех как начало самопознания</p>
                </div>
              </div>
            </div>
          </div>

          {/* Детальный разбор семи грехов и чакр */}
          <div className="bg-gradient-to-r from-mystic-blue/5 via-mystic-green/5 to-mystic-mustard/5 rounded-3xl p-12 border border-mystic-smoke/20">
            <h3 className="text-3xl font-cinzel font-bold text-mystic-fog text-center mb-12">
              Семь грехов • Семь чакр
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-mystic-dark/80 backdrop-blur-sm border border-gothic-gold/20 p-6 text-center group hover:border-gothic-gold/40 transition-colors">
                <div className="w-12 h-12 rounded-full bg-red-600/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-red-600/30 transition-colors">
                  <Icon name="Apple" size={24} className="text-red-400" />
                </div>
                <h4 className="font-cinzel font-semibold text-mystic-fog mb-2">Чревоугодие</h4>
                <p className="text-xs font-cormorant text-mystic-fog/70 mb-3">Муладхара • 1 чакра</p>
                <p className="text-sm font-cormorant text-mystic-fog/80 leading-relaxed">
                  Зависимость тела, слабость к соблазнам корневых инстинктов
                </p>
              </Card>

              <Card className="bg-mystic-dark/80 backdrop-blur-sm border border-gothic-gold/20 p-6 text-center group hover:border-gothic-gold/40 transition-colors">
                <div className="w-12 h-12 rounded-full bg-orange-600/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-600/30 transition-colors">
                  <Icon name="Heart" size={24} className="text-orange-400" />
                </div>
                <h4 className="font-cinzel font-semibold text-mystic-fog mb-2">Блуд</h4>
                <p className="text-xs font-cormorant text-mystic-fog/70 mb-3">Свадхистана • 2 чакра</p>
                <p className="text-sm font-cormorant text-mystic-fog/80 leading-relaxed">
                  Неконтролируемая сексуальная энергия, блок сакральной чакры
                </p>
              </Card>

              <Card className="bg-mystic-dark/80 backdrop-blur-sm border border-gothic-gold/20 p-6 text-center group hover:border-gothic-gold/40 transition-colors">
                <div className="w-12 h-12 rounded-full bg-yellow-600/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-600/30 transition-colors">
                  <Icon name="Coins" size={24} className="text-yellow-400" />
                </div>
                <h4 className="font-cinzel font-semibold text-mystic-fog mb-2">Алчность</h4>
                <p className="text-xs font-cormorant text-mystic-fog/70 mb-3">Манипура • 3 чакра</p>
                <p className="text-sm font-cormorant text-mystic-fog/80 leading-relaxed">
                  Жажда власти и материального, искажение энергии солнечного сплетения
                </p>
              </Card>

              <Card className="bg-mystic-dark/80 backdrop-blur-sm border border-gothic-gold/20 p-6 text-center group hover:border-gothic-gold/40 transition-colors">
                <div className="w-12 h-12 rounded-full bg-green-600/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-green-600/30 transition-colors">
                  <Icon name="Sword" size={24} className="text-green-400" />
                </div>
                <h4 className="font-cinzel font-semibold text-mystic-fog mb-2">Гнев</h4>
                <p className="text-xs font-cormorant text-mystic-fog/70 mb-3">Анахата • 4 чакра</p>
                <p className="text-sm font-cormorant text-mystic-fog/80 leading-relaxed">
                  Закрытое сердце, неспособность к любви и состраданию
                </p>
              </Card>

              <Card className="bg-mystic-dark/80 backdrop-blur-sm border border-gothic-gold/20 p-6 text-center group hover:border-gothic-gold/40 transition-colors">
                <div className="w-12 h-12 rounded-full bg-blue-600/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600/30 transition-colors">
                  <Icon name="Eye" size={24} className="text-blue-400" />
                </div>
                <h4 className="font-cinzel font-semibold text-mystic-fog mb-2">Зависть</h4>
                <p className="text-xs font-cormorant text-mystic-fog/70 mb-3">Вишудха • 5 чакра</p>
                <p className="text-sm font-cormorant text-mystic-fog/80 leading-relaxed">
                  Неспособность к самовыражению, подавленная истина
                </p>
              </Card>

              <Card className="bg-mystic-dark/80 backdrop-blur-sm border border-gothic-gold/20 p-6 text-center group hover:border-gothic-gold/40 transition-colors">
                <div className="w-12 h-12 rounded-full bg-indigo-600/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-indigo-600/30 transition-colors">
                  <Icon name="CloudDrizzle" size={24} className="text-indigo-400" />
                </div>
                <h4 className="font-cinzel font-semibold text-mystic-fog mb-2">Уныние</h4>
                <p className="text-xs font-cormorant text-mystic-fog/70 mb-3">Аджна • 6 чакра</p>
                <p className="text-sm font-cormorant text-mystic-fog/80 leading-relaxed">
                  Потеря духовного видения, отсутствие высшей цели
                </p>
              </Card>

              <Card className="bg-mystic-dark/80 backdrop-blur-sm border border-gothic-gold/20 p-6 text-center group hover:border-gothic-gold/40 transition-colors">
                <div className="w-12 h-12 rounded-full bg-violet-600/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-violet-600/30 transition-colors">
                  <Icon name="Crown" size={24} className="text-violet-400" />
                </div>
                <h4 className="font-cinzel font-semibold text-mystic-fog mb-2">Гордыня</h4>
                <p className="text-xs font-cormorant text-mystic-fog/70 mb-3">Сахасрара • 7 чакра</p>
                <p className="text-sm font-cormorant text-mystic-fog/80 leading-relaxed">
                  Отрыв от божественного, иллюзия отделённости от целого
                </p>
              </Card>

              <div className="bg-gradient-to-br from-gothic-gold/10 to-mystic-mustard/10 backdrop-blur-sm border border-gothic-gold/30 p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-gothic-gold/20 flex items-center justify-center mx-auto mb-4">
                  <Icon name="Apple" size={24} className="text-gothic-gold" />
                </div>
                <h4 className="font-cinzel font-semibold text-mystic-fog mb-2">Первородный грех</h4>
                <p className="text-xs font-cormorant text-mystic-fog/70 mb-3">Древо познания</p>
                <p className="text-sm font-cormorant text-mystic-fog/80 leading-relaxed">
                  Источник самосознания, начало пути познания добра и зла
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Галерея произведений */}
      <section id="галерея" className="py-24 bg-gradient-to-b from-mystic-cream to-mystic-fog">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <div className="space-y-4">
              <h2 className="text-5xl md:text-6xl font-cinzel font-bold text-mystic-dark">
                Галерея произведений
              </h2>
              <div className="h-1 w-32 bg-gradient-to-r from-mystic-blue to-mystic-green mx-auto"></div>
              <p className="text-xl font-cormorant text-mystic-dark/70 max-w-4xl mx-auto italic">
                «Каждая картина — это диалог между художником и зрителем, 
                где истина рождается в пространстве между видимым и невысказанным»
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {artworks.map((artwork, index) => (
              <Card 
                key={artwork.id} 
                className="group bg-mystic-fog/50 backdrop-blur-sm border border-mystic-smoke/30 overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={artwork.image} 
                    alt={artwork.title}
                    className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-mystic-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute bottom-6 left-6 right-6">
                      <span className="text-xs font-cormorant bg-gothic-gold text-mystic-dark px-3 py-1 rounded-full">
                        {artwork.category}
                      </span>
                    </div>
                  </div>
                </div>
                <CardContent className="p-8 space-y-4">
                  <h3 className="text-2xl font-cinzel font-semibold text-mystic-dark">
                    {artwork.title}
                  </h3>
                  <p className="text-mystic-dark/60 font-cormorant leading-relaxed">
                    {artwork.description}
                  </p>
                  <div className="pt-2">
                    <Button variant="ghost" className="text-mystic-blue hover:text-gothic-gold font-cormorant p-0">
                      Подробнее <Icon name="ArrowRight" size={16} className="ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button 
              size="lg"
              className="bg-mystic-blue hover:bg-mystic-dark text-mystic-fog font-cormorant font-semibold px-12 py-6 text-xl"
            >
              Исследовать полную коллекцию
              <Icon name="ExternalLink" size={24} className="ml-3" />
            </Button>
          </div>
        </div>
      </section>

      {/* Философия творчества */}
      <section id="философия" className="py-24 bg-mystic-dark text-mystic-fog">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-cinzel font-bold mb-6">
              Философия творчества
            </h2>
            <p className="text-xl font-cormorant italic max-w-4xl mx-auto">
              Искусство как средство познания глубинных структур человеческого сознания
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <Card className="bg-mystic-blue/10 backdrop-blur-sm border border-mystic-smoke/20 p-8 text-center">
              <Icon name="Brain" size={48} className="mx-auto mb-6 text-gothic-gold" />
              <h3 className="text-xl font-cinzel font-semibold mb-4">Психология</h3>
              <p className="font-cormorant text-mystic-fog/80 leading-relaxed">
                Исследование архетипов, работа с подсознательными образами и травматическим опытом через визуальные метафоры
              </p>
            </Card>

            <Card className="bg-mystic-green/10 backdrop-blur-sm border border-mystic-smoke/20 p-8 text-center">
              <Icon name="Sparkles" size={48} className="mx-auto mb-6 text-gothic-gold" />
              <h3 className="text-xl font-cinzel font-semibold mb-4">Мистицизм</h3>
              <p className="font-cormorant text-mystic-fog/80 leading-relaxed">
                Поиск сакрального смысла в повседневности, обращение к древним символам и эзотерическим традициям
              </p>
            </Card>

            <Card className="bg-mystic-mustard/10 backdrop-blur-sm border border-mystic-smoke/20 p-8 text-center">
              <Icon name="Palette" size={48} className="mx-auto mb-6 text-gothic-gold" />
              <h3 className="text-xl font-cinzel font-semibold mb-4">Искусство</h3>
              <p className="font-cormorant text-mystic-fog/80 leading-relaxed">
                Синтез классических техник с современными подходами, создание уникального визуального языка
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Заказ персональных работ */}
      <section id="заказать" className="py-24 bg-gradient-to-b from-mystic-fog to-mystic-cream">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-cinzel font-bold text-mystic-dark mb-6">
              Заказать произведение
            </h2>
            <p className="text-xl font-cormorant text-mystic-dark/70 max-w-4xl mx-auto">
              Создание персональной работы — это путешествие в глубины вашего внутреннего мира, 
              воплощённое в уникальном художественном произведении
            </p>
          </div>

          <Card className="bg-mystic-fog/70 backdrop-blur-sm border border-mystic-smoke/30 p-12 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-sm font-cinzel font-semibold text-mystic-dark">
                    Ваше имя *
                  </label>
                  <Input 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Введите ваше имя"
                    className="font-cormorant bg-mystic-fog/80 border-mystic-smoke/50"
                    required
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-cinzel font-semibold text-mystic-dark">
                    Email *
                  </label>
                  <Input 
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="your@email.com"
                    className="font-cormorant bg-mystic-fog/80 border-mystic-smoke/50"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-sm font-cinzel font-semibold text-mystic-dark">
                    Тип произведения *
                  </label>
                  <Input 
                    value={formData.projectType}
                    onChange={(e) => setFormData({...formData, projectType: e.target.value})}
                    placeholder="Портрет, психологическая композиция..."
                    className="font-cormorant bg-mystic-fog/80 border-mystic-smoke/50"
                    required
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-cinzel font-semibold text-mystic-dark">
                    Ориентировочный бюджет
                  </label>
                  <Input 
                    value={formData.budget}
                    onChange={(e) => setFormData({...formData, budget: e.target.value})}
                    placeholder="Укажите бюджет"
                    className="font-cormorant bg-mystic-fog/80 border-mystic-smoke/50"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-sm font-cinzel font-semibold text-mystic-dark">
                  Описание замысла *
                </label>
                <Textarea 
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  placeholder="Поделитесь своими мыслями, эмоциями, образами, которые вы хотели бы видеть в произведении. Расскажите о личных переживаниях, символах, цветовых предпочтениях..."
                  className="font-cormorant bg-mystic-fog/80 border-mystic-smoke/50 min-h-[150px]"
                  required
                />
              </div>

              <div className="bg-gradient-to-r from-mystic-blue/10 to-mystic-green/10 p-8 rounded-2xl border border-mystic-smoke/30">
                <div className="flex items-start space-x-4">
                  <Icon name="Lightbulb" size={28} className="text-gothic-gold mt-1" />
                  <div className="space-y-3">
                    <h4 className="font-cinzel font-semibold text-mystic-dark text-lg">
                      Процесс создания
                    </h4>
                    <ul className="text-sm font-cormorant text-mystic-dark/70 space-y-2 leading-relaxed">
                      <li>• Глубинное интервью и анализ замысла (1-2 встречи)</li>
                      <li>• Создание концептуальных эскизов (1-2 недели)</li>
                      <li>• Обсуждение символики и композиции</li>
                      <li>• Работа над произведением (3-8 недель)</li>
                      <li>• Представление готовой работы</li>
                    </ul>
                  </div>
                </div>
              </div>

              <Button 
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-mystic-blue via-mystic-green to-mystic-blue hover:from-mystic-dark hover:to-mystic-dark text-mystic-fog font-cinzel font-semibold py-8 text-xl tracking-wider"
              >
                Начать творческий диалог
                <Icon name="Send" size={24} className="ml-3" />
              </Button>
            </form>
          </Card>
        </div>
      </section>

      {/* Контакты */}
      <section id="контакты" className="py-24 bg-mystic-dark">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-cinzel font-bold text-mystic-fog mb-6">
              Контакты
            </h2>
            <p className="text-xl font-cormorant text-mystic-fog/80 max-w-4xl mx-auto">
              Для обсуждения проектов, философских бесед об искусстве или посещения выставок
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <Card className="p-8 bg-mystic-blue/10 backdrop-blur-sm border border-mystic-smoke/20 text-mystic-fog text-center">
              <Icon name="Mail" size={40} className="mx-auto mb-6 text-gothic-gold" />
              <h3 className="font-cinzel font-semibold text-xl mb-3">Электронная почта</h3>
              <p className="font-cormorant text-mystic-fog/80 text-lg">alena@petina-art.com</p>
            </Card>

            <Card className="p-8 bg-mystic-green/10 backdrop-blur-sm border border-mystic-smoke/20 text-mystic-fog text-center">
              <Icon name="Phone" size={40} className="mx-auto mb-6 text-gothic-gold" />
              <h3 className="font-cinzel font-semibold text-xl mb-3">Телефон</h3>
              <p className="font-cormorant text-mystic-fog/80 text-lg">+7 (3532) 123-45-67</p>
            </Card>

            <Card className="p-8 bg-mystic-mustard/10 backdrop-blur-sm border border-mystic-smoke/20 text-mystic-fog text-center">
              <Icon name="MapPin" size={40} className="mx-auto mb-6 text-gothic-gold" />
              <h3 className="font-cinzel font-semibold text-xl mb-3">Студия</h3>
              <p className="font-cormorant text-mystic-fog/80 text-lg">Москва, Арт-резиденция</p>
            </Card>
          </div>

          <div className="text-center mt-16">
            <div className="flex justify-center space-x-8">
              <Button variant="ghost" size="lg" className="text-mystic-fog hover:text-gothic-gold">
                <Icon name="Instagram" size={28} />
              </Button>
              <Button variant="ghost" size="lg" className="text-mystic-fog hover:text-gothic-gold">
                <Icon name="Facebook" size={28} />
              </Button>
              <Button variant="ghost" size="lg" className="text-mystic-fog hover:text-gothic-gold">
                <Icon name="Globe" size={28} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Готический футер */}
      <footer className="bg-gradient-to-t from-black to-mystic-dark text-mystic-fog py-12 border-t border-mystic-smoke/20">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-4">
          <div className="flex justify-center items-center space-x-3 mb-4">
            <Icon name="Eye" size={20} className="text-gothic-gold" />
            <span className="font-cinzel text-lg">Музей скульптуры имени Петиных</span>
          </div>
          <p className="font-cormorant text-mystic-fog/70 text-lg">
            © 2024 Алёна Петина. Психоаналитическое искусство.
          </p>
          <p className="font-cormorant text-mystic-fog/50 text-sm">
            «Искусство — это мост между душой художника и сердцем зрителя»
          </p>
        </div>
      </footer>
    </div>
  );
}