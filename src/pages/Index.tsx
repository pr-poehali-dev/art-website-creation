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
      id: 1,
      title: "Абстрактная композиция",
      category: "Живопись",
      image: "/img/cb1c6106-eed6-4d3c-b3d9-f72a156ab94e.jpg"
    },
    {
      id: 2,
      title: "Портрет в стиле экспрессионизм",
      category: "Портрет",
      image: "/img/83adb3ff-60d6-464e-8d61-8f786b30ef98.jpg"
    },
    {
      id: 3,
      title: "Пейзаж мечты",
      category: "Пейзаж",
      image: "/img/acaad7d8-6044-4cb7-8866-3085817c11c6.jpg"
    },
    {
      id: 4,
      title: "Цифровая абстракция",
      category: "Цифровое искусство",
      image: "/img/cb1c6106-eed6-4d3c-b3d9-f72a156ab94e.jpg"
    },
    {
      id: 5,
      title: "Модерн портрет",
      category: "Портрет",
      image: "/img/83adb3ff-60d6-464e-8d61-8f786b30ef98.jpg"
    },
    {
      id: 6,
      title: "Природные формы",
      category: "Пейзаж",
      image: "/img/acaad7d8-6044-4cb7-8866-3085817c11c6.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-artist-purple via-artist-cyan to-artist-pink">
      {/* Навигация */}
      <nav className="fixed top-0 w-full z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-playfair font-bold text-white">
              Мария Художник
            </h1>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-white hover:text-artist-light transition-colors font-open">
                Главная
              </a>
              <a href="#about" className="text-white hover:text-artist-light transition-colors font-open">
                О художнике
              </a>
              <a href="#gallery" className="text-white hover:text-artist-light transition-colors font-open">
                Галерея
              </a>
              <a href="#order" className="text-white hover:text-artist-light transition-colors font-open">
                Заказать
              </a>
              <a href="#contacts" className="text-white hover:text-artist-light transition-colors font-open">
                Контакты
              </a>
            </div>
            <Button variant="outline" className="md:hidden bg-white/20 border-white/30 text-white">
              <Icon name="Menu" size={20} />
            </Button>
          </div>
        </div>
      </nav>

      {/* Героический блок */}
      <section id="home" className="pt-20 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-8 animate-fade-in">
            <div className="inline-block p-1 bg-white/20 rounded-full animate-float">
              <div className="bg-white/10 backdrop-blur-md rounded-full p-6">
                <Icon name="Palette" size={48} className="text-white mx-auto" />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-playfair font-bold text-white leading-tight">
              Искусство,<br />
              которое <span className="text-artist-coral">вдохновляет</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/80 font-open max-w-3xl mx-auto">
              Создаю уникальные произведения искусства, которые отражают красоту мира 
              и глубину человеческих эмоций
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-artist-coral hover:bg-artist-pink text-white font-open font-semibold px-8 py-6 text-lg"
              >
                Посмотреть работы
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white/30 bg-white/10 text-white hover:bg-white/20 font-open font-semibold px-8 py-6 text-lg"
              >
                Связаться со мной
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* О художнике */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-artist-navy">
                О художнике
              </h2>
              <p className="text-lg font-open text-gray-700 leading-relaxed">
                Я — профессиональный художник с более чем 10-летним опытом создания 
                уникальных произведений искусства. Моя специализация — современная 
                живопись, портреты и абстрактные композиции.
              </p>
              <p className="text-lg font-open text-gray-700 leading-relaxed">
                Каждая работа создается с особым вниманием к деталям и глубоким 
                пониманием эмоций, которые должно передать произведение. Я верю, 
                что искусство может изменить пространство и настроение людей.
              </p>
              <div className="flex flex-wrap gap-4">
                {['Живопись маслом', 'Акварель', 'Цифровое искусство', 'Портреты'].map((skill) => (
                  <span 
                    key={skill}
                    className="px-4 py-2 bg-artist-purple/10 text-artist-purple font-open font-medium rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10 bg-gradient-to-br from-artist-purple to-artist-cyan rounded-2xl p-8 text-white">
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Icon name="Award" size={24} />
                    <span className="font-open font-semibold">15+ наград</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Icon name="Users" size={24} />
                    <span className="font-open font-semibold">200+ довольных клиентов</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Icon name="Clock" size={24} />
                    <span className="font-open font-semibold">10+ лет опыта</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Icon name="Star" size={24} />
                    <span className="font-open font-semibold">Персональные выставки</span>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-artist-pink to-artist-coral rounded-2xl transform rotate-3 -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Галерея работ */}
      <section id="gallery" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-artist-navy mb-6">
              Галерея работ
            </h2>
            <p className="text-xl font-open text-gray-600 max-w-3xl mx-auto">
              Коллекция моих лучших произведений, созданных с любовью и вдохновением
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {artworks.map((artwork, index) => (
              <Card 
                key={artwork.id} 
                className="group overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={artwork.image} 
                    alt={artwork.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <span className="text-sm font-open bg-artist-purple px-3 py-1 rounded-full">
                        {artwork.category}
                      </span>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-playfair font-semibold text-artist-navy mb-2">
                    {artwork.title}
                  </h3>
                  <p className="text-gray-600 font-open">{artwork.category}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg"
              className="bg-artist-purple hover:bg-artist-navy text-white font-open font-semibold px-8 py-6"
            >
              Посмотреть все работы
              <Icon name="ExternalLink" size={20} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Заказ персональных работ */}
      <section id="order" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-artist-navy mb-6">
              Заказать персональную работу
            </h2>
            <p className="text-xl font-open text-gray-600 max-w-3xl mx-auto">
              Создам для вас уникальное произведение искусства, которое идеально впишется 
              в ваш интерьер и отразит ваши предпочтения
            </p>
          </div>

          <Card className="p-8 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-open font-semibold text-artist-navy">
                    Ваше имя *
                  </label>
                  <Input 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Введите ваше имя"
                    className="font-open"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-open font-semibold text-artist-navy">
                    Email *
                  </label>
                  <Input 
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="your@email.com"
                    className="font-open"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-open font-semibold text-artist-navy">
                    Тип работы *
                  </label>
                  <Input 
                    value={formData.projectType}
                    onChange={(e) => setFormData({...formData, projectType: e.target.value})}
                    placeholder="Портрет, пейзаж, абстракция..."
                    className="font-open"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-open font-semibold text-artist-navy">
                    Бюджет
                  </label>
                  <Input 
                    value={formData.budget}
                    onChange={(e) => setFormData({...formData, budget: e.target.value})}
                    placeholder="Ваш бюджет"
                    className="font-open"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-open font-semibold text-artist-navy">
                  Описание проекта *
                </label>
                <Textarea 
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  placeholder="Расскажите подробнее о желаемой работе: размер, цветовая гамма, стиль, особые пожелания..."
                  className="font-open min-h-[120px]"
                  required
                />
              </div>

              <div className="bg-gradient-to-r from-artist-purple/10 to-artist-cyan/10 p-6 rounded-lg">
                <div className="flex items-start space-x-4">
                  <Icon name="Info" size={24} className="text-artist-purple mt-1" />
                  <div className="space-y-2">
                    <h4 className="font-playfair font-semibold text-artist-navy">
                      Процесс создания
                    </h4>
                    <ul className="text-sm font-open text-gray-600 space-y-1">
                      <li>• Консультация и обсуждение деталей (1-2 дня)</li>
                      <li>• Создание эскиза для утверждения (3-5 дней)</li>
                      <li>• Работа над произведением (1-4 недели)</li>
                      <li>• Доставка готовой работы</li>
                    </ul>
                  </div>
                </div>
              </div>

              <Button 
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-artist-purple to-artist-cyan hover:from-artist-navy hover:to-artist-purple text-white font-open font-semibold py-6 text-lg"
              >
                Отправить заявку
                <Icon name="Send" size={20} className="ml-2" />
              </Button>
            </form>
          </Card>
        </div>
      </section>

      {/* Контакты */}
      <section id="contacts" className="py-20 bg-gradient-to-br from-artist-navy to-artist-purple">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">
              Контакты
            </h2>
            <p className="text-xl font-open text-white/80 max-w-3xl mx-auto">
              Свяжитесь со мной для обсуждения вашего проекта или просто поболтать об искусстве
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 bg-white/10 backdrop-blur-md border-white/20 text-white text-center">
              <Icon name="Mail" size={32} className="mx-auto mb-4 text-artist-coral" />
              <h3 className="font-playfair font-semibold text-lg mb-2">Email</h3>
              <p className="font-open text-white/80">maria@artist.com</p>
            </Card>

            <Card className="p-6 bg-white/10 backdrop-blur-md border-white/20 text-white text-center">
              <Icon name="Phone" size={32} className="mx-auto mb-4 text-artist-coral" />
              <h3 className="font-playfair font-semibold text-lg mb-2">Телефон</h3>
              <p className="font-open text-white/80">+7 (999) 123-45-67</p>
            </Card>

            <Card className="p-6 bg-white/10 backdrop-blur-md border-white/20 text-white text-center">
              <Icon name="MapPin" size={32} className="mx-auto mb-4 text-artist-coral" />
              <h3 className="font-playfair font-semibold text-lg mb-2">Студия</h3>
              <p className="font-open text-white/80">Москва, Арт-квартал</p>
            </Card>
          </div>

          <div className="text-center mt-12">
            <div className="flex justify-center space-x-6">
              <Button variant="ghost" size="lg" className="text-white hover:text-artist-coral">
                <Icon name="Instagram" size={24} />
              </Button>
              <Button variant="ghost" size="lg" className="text-white hover:text-artist-coral">
                <Icon name="Facebook" size={24} />
              </Button>
              <Button variant="ghost" size="lg" className="text-white hover:text-artist-coral">
                <Icon name="Twitter" size={24} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="bg-artist-navy text-white py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="font-open text-white/80">
            © 2024 Мария Художник. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
}