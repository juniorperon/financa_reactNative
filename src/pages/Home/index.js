import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from "../../components/Header"
import Balance from "../../components/Balance"
import Moviments from "../../components/Moviments"

const list = [
  {
    id: 1,
    label: "Boleto conta luz",
    value: "300,90",
    date: "17/06/2023",
    type: 0, // despesas
  },
  {
    id: 2,
    label: "PIX cliente",
    value: "120,00",
    date: "19/06/2023",
    type: 1, //receita
  },
  {
    id: 3,
    label: "Salario",
    value: "2200,00",
    date: "10/06/2023",
    type: 1, //receita
  },
  {
    id: 4,
    label: "Cartão",
    value: "1200,00",
    date: "20/06/2023",
    type: 0, //despesas
  },
]

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name="Ailton Peron"/>

      <Balance saldo="9.250,90" gastos="-527,00"  />

      <Text style={styles.title}>Últimas movimentações</Text>

      <FlatList style={styles.list}
        data={list}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => <Moviments data={item} />}
      
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:"#fafafa"
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 14,
    marginRight: 14,
    marginTop: 14,
  },
  list: {
    marginStart: 14,
    marginEnd: 14,
  }
});
