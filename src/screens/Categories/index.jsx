import { ScrollView, Text, View } from 'react-native';
import styles from './styles';
import CardCategory from '../../components/CardCategory';
import { useDispatch } from 'react-redux';
import { loadRecipe } from '../../store/actions/recipe.action';

const Categories = ({ navigation }) => {
	const dispatch = useDispatch();
	const selectCategory = (selectCat) => {
		dispatch(loadRecipe('App', selectCat));
		navigation.navigate('ListRecipeApp');
	};
	return (
		<View>
			<View style={styles.boxTitle}>
				<Text style={styles.titleView}>CATEGORIAS</Text>
			</View>
			<ScrollView
				contentContainerStyle={{
					justifyContent: 'center',
					alignItems: 'center',
					paddingTop: 10,
					paddingBottom: 90,
				}}
			>
				<View style={styles.boxCardCategory}>
					<CardCategory
						title="Entradas"
						styleTitle={styles.title}
						actionPress={() => selectCategory('Entry')}
						Sourceimage={
							'https://mejorconsalud.as.com/wp-content/uploads/2016/02/Elegir-aperitivos-bajos-en-calor%C3%ADas.jpg'
						}
					/>
				</View>
				<View style={styles.boxCardCategory}>
					<CardCategory
						title="Platos Principales"
						styleTitle={styles.title}
						actionPress={() => selectCategory('DishMain')}
						Sourceimage={
							'https://hips.hearstapps.com/hmg-prod/images/salmon-con-trigueros-y-judias-1562929760.jpg?crop=1.00xw:0.335xh;0,0.377xh&resize=1200:*'
						}
					/>
				</View>
				<View style={styles.boxCardCategory}>
					<CardCategory
						title="Postres"
						styleTitle={styles.title}
						actionPress={() => selectCategory('dessert')}
						Sourceimage={
							'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVJDAmzMxODo3DDdKIPjbWq5MzHxprBWA1Cw&usqp=CAU'
						}
					/>
				</View>
				<View style={styles.boxCardCategory}>
					<CardCategory
						title="Desayunos y Branch"
						styleTitle={styles.title}
						actionPress={() => selectCategory('BreakFast')}
						Sourceimage={
							'https://www.recetasderechupete.com/wp-content/uploads/2021/04/Brunch-3.jpg'
						}
					/>
				</View>
				<View style={styles.boxCardCategory}>
					<CardCategory
						title="Comida rápida"
						styleTitle={styles.title}
						actionPress={() => selectCategory('FastFood')}
						Sourceimage={
							'https://s3.abcstatics.com/media/gurmesevilla/2012/01/comida-rapida-casera.jpg'
						}
					/>
				</View>
				<View style={styles.boxCardCategory}>
					<CardCategory
						title="Cocina internacional"
						styleTitle={styles.title}
						actionPress={() => selectCategory('InternationalFood')}
						Sourceimage={'https://estag.fimagenes.com/img/1/2/s/T/m/2sTm_900.jpg'}
					/>
				</View>
			</ScrollView>
		</View>
	);
};

export default Categories;
