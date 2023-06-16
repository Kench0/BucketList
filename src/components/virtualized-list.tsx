import {FlatList} from "react-native";


export const VirtualizedList = ({ children }) => {
	return <FlatList data={[]} renderItem={null} ListHeaderComponent={<>{children}</>} />
}
