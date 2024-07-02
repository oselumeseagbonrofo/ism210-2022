import notes from './type-defs'
import { View, Text, FlatList } from 'react-native';
type Props = {
    notes?: notes[];
}
const ShowNotes: React.FC<Props> = ({ notes }) => {
    const showNotes = () => {
        if (notes !== null) {
            return (
                <View>
                    <FlatList
                        data={notes}
                        renderItem={({ item }) => (
                            <View>
                                <Text>Id={item.id}</Text>
                                <Text>Title={item.title}</Text>
                                <Text>Body={item.body}</Text>
                            </View>
                        )}

                        ListHeaderComponent={
                            () => (<View><Text style={{ fontSize: 21, fontWeight: 'bold' }}>List of
                                Notes</Text></View>)
                        }
                        ListFooterComponent={
                            () => (<View style={{
                                backgroundColor: '#ccc', paddingBottom: 30, paddingTop: 3,
                                alignContent: "flex-start"
                            }}><Text style={{ fontSize: 15, fontStyle: "italic" }}>Source:
                                Our Notes DB</Text></View>)
                        }
                        keyExtractor={item => item.id.toString()}
                        ItemSeparatorComponent={
                            //this component will be rendered in between items
                            () => {
                                return (<View style={{ backgroundColor: 'red', height: 6, width: '100%' }} />)
                            }
                        }
                    />
                </View>
            )
        } else {
            return <Text>`Notes not found`</Text>;
        }
    }
    return (
        <View>
            {showNotes()}
        </View>
    )
}
export default ShowNotes;