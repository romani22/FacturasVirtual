import { Animated, Dimensions, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import { useDispatch } from 'react-redux';
import { selectRecipe } from '../../store/actions/recipe.action';
import { loadIngredients } from '../../store/actions/ingredients.action';
import { recetas } from '../../data/recipes';
import { useEffect, useState } from 'react';
import Carrousel from '../../components/Carrousel';
import { LinearGradient } from 'expo-linear-gradient';
const Home = ({ navigation }) => {
  const dispatch = useDispatch();
  const [popular, setPopular] = useState([]);
  const [recomendada, setRecomendada] = useState([]);

  const popularRecipe = () => {
    const randomNumbers = Array.from({ length: 4 }, () => Math.floor(Math.random() * 30) + 1);
    console.log(randomNumbers);
    let recipesPopular = [];
    for (const category in recetas) {
      for (const iterator of recetas[category]) {
        if (randomNumbers.find((item) => item == iterator.id)) {
          recipesPopular.push(iterator);
        }
      }
    }
    setPopular(recipesPopular);
  };
  const recomendadaRecipe = () => {
    const randomNumbers = Array.from({ length: 4 }, () => Math.floor(Math.random() * 30) + 1);
    console.log(randomNumbers);
    let recipesRecomendada = [];
    for (const category in recetas) {
      for (const iterator of recetas[category]) {
        if (randomNumbers.find((item) => item == iterator.id)) {
          recipesRecomendada.push(iterator);
        }
      }
    }
    setRecomendada(recipesRecomendada);
  };
  useEffect(() => {
    popularRecipe();
    recomendadaRecipe();
    dispatch(loadIngredients());
  }, [dispatch]);

  const changeViewDetail = (id) => {
    dispatch(selectRecipe(id, 'App'));
    dispatch(loadIngredients());
    navigation.navigate('RecipeDetail');
  };

  const [imageIndex, setImageIndex] = useState(0);
  const translateXAnim = useState(new Animated.Value(0))[0];
  const windowWidth = Dimensions.get('window').width;

  useEffect(() => {
    const moveImage = () => {
      const newIndex = imageIndex === 3 ? 0 : imageIndex + 1;
      Animated.timing(translateXAnim, {
        toValue: -1 * newIndex * windowWidth,
        duration: 500,
        useNativeDriver: true,
      }).start(() => {
        setImageIndex(newIndex);
      });
    };
    const interval = setInterval(moveImage, 2000);
    return () => clearInterval(interval);
  }, [imageIndex, translateXAnim, windowWidth]);

  return (
    <View style={styles.boxScrollView}>
      <ScrollView
        contentContainerStyle={{
          alignItems: 'center',
        }}
      >
        <Carrousel />
        <LinearGradient
          colors={['#fdfdff6e', 'rgba(69,55,47,1)']} // Colores del degradado
          style={styles.degradesTitle}
        >
          <Text style={styles.titlePrinc}>RINCON CULINARIO</Text>
        </LinearGradient>

        <View style={styles.card}>
          <Text style={styles.title}>POPULARES</Text>
          <Animated.View
            style={[
              styles.carouselContainer,
              {
                transform: [{ translateX: translateXAnim }],
                width: windowWidth * 4,
              },
            ]}
          >
            {popular
              ? popular.map((item) => {
                  return (
                    <View
                      style={styles.boxTouchable}
                      key={item.id}
                    >
                      <TouchableOpacity
                        style={styles.boxRecipe}
                        onPress={() => {
                          changeViewDetail(item.id);
                        }}
                      >
                        <Image
                          style={[styles.image]}
                          source={{ uri: item.image.toString() }}
                        />
                        <Text style={styles.titleRecipe}>{item.title}</Text>
                      </TouchableOpacity>
                    </View>
                  );
                })
              : null}
          </Animated.View>
        </View>

        <View style={styles.card}>
          <Text style={styles.title}>RECOMENDADAS</Text>
          <Animated.View
            style={[
              styles.carouselContainer,
              {
                transform: [{ translateX: translateXAnim }],
                width: windowWidth * 4,
              },
            ]}
          >
            {recomendada
              ? recomendada.map((item) => {
                  return (
                    <View
                      style={styles.boxTouchable}
                      key={item.id}
                    >
                      <TouchableOpacity
                        style={styles.boxRecipe}
                        onPress={() => {
                          changeViewDetail(item.id);
                        }}
                      >
                        <Image
                          style={[styles.image]}
                          source={{ uri: item.image.toString() }}
                        />
                        <Text style={styles.titleRecipe}>{item.title}</Text>
                      </TouchableOpacity>
                    </View>
                  );
                })
              : null}
          </Animated.View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
