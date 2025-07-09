import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const featuredMovies = [
    {
      id: 1,
      title: "Космическая Одиссея",
      genre: "Sci-Fi",
      rating: 8.9,
      year: 2024,
      duration: "2ч 18м",
      description: "Эпическое путешествие в далекие галактики",
    },
    {
      id: 2,
      title: "Темный Город",
      genre: "Thriller",
      rating: 7.8,
      year: 2024,
      duration: "1ч 47м",
      description: "Детективная история в неоновом мегаполисе",
    },
    {
      id: 3,
      title: "Последний Герой",
      genre: "Action",
      rating: 8.5,
      year: 2024,
      duration: "2ч 05м",
      description: "Адреналиновый боевик о спасении мира",
    },
  ];

  const recommendations = [
    "Для любителей фантастики",
    "Популярные новинки",
    "Рекомендации друзей",
    "Продолжить просмотр",
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="bg-black/90 backdrop-blur-sm fixed w-full top-0 z-50 border-b border-red-600/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Film" size={32} className="text-red-500" />
              <h1 className="text-2xl font-bold text-white">КиноМакс</h1>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="#"
                className="text-white hover:text-red-500 transition-colors"
              >
                Главная
              </a>
              <a
                href="#"
                className="text-white hover:text-red-500 transition-colors"
              >
                Каталог
              </a>
              <a
                href="#"
                className="text-white hover:text-red-500 transition-colors"
              >
                Мой профиль
              </a>
            </nav>
            <div className="flex items-center space-x-4">
              <Icon
                name="Search"
                size={24}
                className="text-gray-400 hover:text-white cursor-pointer"
              />
              <Icon
                name="User"
                size={24}
                className="text-gray-400 hover:text-white cursor-pointer"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-black via-gray-900 to-black">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: `url('/img/722cf357-51ab-4523-a268-feaf28ba45fe.jpg')`,
          }}
        />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h2 className="text-6xl md:text-8xl font-bold mb-6 text-white">
            Кино без границ
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Тысячи фильмов и сериалов в высоком качестве. Персональные
            рекомендации на основе ваших предпочтений.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3"
            >
              <Icon name="Play" size={20} className="mr-2" />
              Начать просмотр
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black"
            >
              Узнать больше
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Movies */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold mb-8 text-white">
            Рекомендуемые фильмы
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredMovies.map((movie) => (
              <Card
                key={movie.id}
                className="bg-gray-800 border-gray-700 hover:border-red-500 transition-all duration-300 hover:scale-105"
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Badge
                      variant="secondary"
                      className="bg-red-600 text-white"
                    >
                      {movie.genre}
                    </Badge>
                    <div className="flex items-center space-x-1">
                      <Icon
                        name="Star"
                        size={16}
                        className="text-yellow-400 fill-yellow-400"
                      />
                      <span className="text-white font-semibold">
                        {movie.rating}
                      </span>
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">
                    {movie.title}
                  </h4>
                  <p className="text-gray-400 text-sm mb-4">
                    {movie.description}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <span>{movie.year}</span>
                    <span>{movie.duration}</span>
                  </div>
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                    <Icon name="Play" size={16} className="mr-2" />
                    Смотреть
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recommendations */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold mb-8 text-white">
            Персональные рекомендации
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {recommendations.map((category, index) => (
              <Card
                key={index}
                className="bg-gray-800 border-gray-700 hover:border-red-500 transition-all duration-300 cursor-pointer group"
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4">
                    <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-700 transition-colors">
                      <Icon name="Sparkles" size={24} className="text-white" />
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    {category}
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Подборка фильмов специально для вас
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-700">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4 text-white">Готовы начать?</h3>
          <p className="text-xl text-red-100 mb-8">
            Присоединяйтесь к миллионам зрителей по всему миру
          </p>
          <Button
            size="lg"
            className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3"
          >
            Создать аккаунт
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="Film" size={24} className="text-red-500" />
            <span className="text-white font-semibold">КиноМакс</span>
          </div>
          <p className="text-gray-400">© 2024 КиноМакс. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
