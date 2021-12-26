import React, {useState, useEffect} from 'react';
import {TableItem} from './tableItem';
import {collection,getDocs} from "firebase/firestore"


export const WebNovelTable = ({database, changePlatform, platformName, platform}) => {

    let [webnovel, setWebnovel] = useState([]);
    var array = []

    async function getWebNovels() {
        const citiesCol  = collection(database, platform);
        const citySnapshot = await getDocs(citiesCol);
        const cityList = citySnapshot.docs.map(doc => array[array.length] = [doc.data().imagelink, doc.data().free, doc.data().dday, doc.data().pagelink, doc.data().title, doc.data().writer, doc.data().genre, doc.data().star, doc.data().des] );
        setWebnovel(array)
      }

    useEffect(() => {

        if (platform == undefined){
            console.log('비었음');
        }          
        else {
            console.log(platform,'재수신');
            getWebNovels()
        }
            
       }, [platform]);

    changePlatform(platformName)

    return (


        <div class="content">
            
            <div class='top'>
                <span class='all'>전체(50)</span>
                <span class='update'>2021.12.24 07:08</span>
            </div>
            
            <table id="Table">
            <colgroup><col class='col_1'/><col class='col_2'/><col class='col_3'/></colgroup>
                <tbody>

                {
                webnovel.map( (value) => {
                    return <TableItem imagelink={value[0]} free={value[1]} dday={value[2]} pagelink={value[3]} title={value[4]} writer={value[5]} genre={value[6]} star={value[7]} des={value[8]}/>
                })
                }

                </tbody>
            </table>
        </div> 

    );
}