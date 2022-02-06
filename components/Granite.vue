<template>
    <div class="container-fluid granite">
        <div class="row">
            <div class="col-md-12">
                <center><h3> <i class="fa fa-inventory"></i> Our Granites</h3></center>
                <br/>
            </div>
        </div>
        <div class="row menu">
            <div class="col-md-1"></div>
            <div class="col-md-10">
                <div class="color">
                    

                    <div :class="{'color-palet': true,'active': (colour==null)? true: false}" @click="selectColour(null)">
                        <div class="div "><span>All</span></div>
                        <p>All</p>
                        
                    </div>
                    <div :class="{'color-palet': true,'active': (colour=='red')? true: false}" @click="selectColour('red')">
                        <div class="div red"></div>
                        <p>Red</p>
                    </div>
                    <div :class="{'color-palet': true,'active': (colour=='black')? true: false}" @click="selectColour('black')">
                        <div class="div black"></div>
                        <p>Black</p>
                    </div>
                    <div :class="{'color-palet': true,'active': (colour=='green')? true: false}" @click="selectColour('green')">
                        <div class="div green"></div>
                        <p>Green</p>
                    </div>
                    <div :class="{'color-palet': true,'active': (colour=='brown')? true: false}" @click="selectColour('brown')">
                        <div class="div brown"></div>
                        <p>Brown</p>
                    </div>
                    <div :class="{'color-palet': true,'active': (colour=='pink')? true: false}" @click="selectColour('pink')">
                        <div class="div pink"></div>
                        <p>Pink</p>
                    </div>
                    <div :class="{'color-palet': true,'active': (colour=='gold')? true: false}" @click="selectColour('gold')">
                        <div class="div gold"></div>
                        <p>Gold</p>
                    </div>
                    <div :class="{'color-palet': true,'active': (colour=='blue')? true: false}" @click="selectColour('blue')">
                        <div class="div blue"></div>
                        <p>Blue</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <div class="item" v-for="(g, index) in item" :key="g.title">
                    <div class="image">
                        <img :src="g.image" class="image-pic" draggable="false"/>
                    </div>
                    <div class="title">
                        {{g.title}}
                    </div>
                    <div class="desc">
                        <p>{{g.description}}</p>
                    </div>
                    <button class="btn btn-primary form-control" @click="()=>{setIndex(index); showPopup()}">More..</button>
                </div>
            </div>
        </div>
        <div class="popup" v-if="popup==true">
            <div class="popup-detail">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-2"></div>
                        <div class="col-md-8">
                            <div class="popup-fill">
                                <div class="close" @click="showPopup()">&times;</div>
                                <div class="popup-image">
                                    <img :src="granite[selected].image"  class="selected-image" />
                                </div>
                                <div class="popup-desc">
                                    <div class="title">
                                        {{granite[selected].title}}
                                    </div>
                                    <div class="description">
                                        {{granite[selected].description}}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-2"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.selected-image{
    width: 100%;
    height: 300px;
    float:left;
    margin: 25px 0px;
}
.close{
    position: relative;
    top: -30px;
    right: -35px;
    width: 30px;
    height: 30px;
    font-size: 25px;
    background-color: white;
    border-radius: 50%;
    padding: 0px 5px; 
    cursor: pointer;

}
.popup-image{
    float: left;
    width: 40%;
}
.popup-desc{
    float:left;
    width: 60%;
}
.description{
    padding: 0px 10px;
}
.item{
    width: 280px;
    height: 350px;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0px 0px 5px 2px rgba(151,151,151,1);
    -webkit-box-shadow: 0px 0px 5px 2px rgba(151,151,151,1);
    -moz-box-shadow: 0px 0px 5px 2px rgba(151,151,151,1);
    float: left;
    margin: 10px 20px;
}
.div{
    width: 20px;
    height: 20px;
    border-radius: 5px;
    float: left;
}
.menu{
    margin-bottom: 50px;
}
.color-title{
    float: left;    
}
.color-palet{
    width: 110px;
    height: 30px;
    /* background-color: #f1f1f1; */
    outline: 1px solid #f1f1f1;
    padding: 5px 14px;
    float: left;
    border-radius: 15px;
    margin: 0px 5px;
    cursor: pointer;
}
p{
    float: left;
    height: 30px;
    margin: -2px 6px;
}
.red{
    background-color: red;
}
.black{
    background-color: black;
}
.green{
    background-color: green;
}
.brown{
    background-color: brown;
}
.pink{
    background-color: pink;
}
.gold{
    background-color: gold;
}
.blue{
    background-color: blue;
}
.image{
    padding:2%;
}
.item .image-pic{
    width: 100%;
    height: 150px;
}
.title{
    text-align: center;
    font-size: 18px;
    font-weight: bold;
}
.desc{
    padding: 10px;
    width: 280px;
    height: 100px;
}
.desc p{
    word-break: break-word;
   overflow: hidden;
   text-overflow: ellipsis;
   display: -webkit-box;
   line-height: 16px; /* fallback */
   max-height: 64px; /* fallback */
   -webkit-line-clamp: 4; /* number of lines to show */
   -webkit-box-orient: vertical;
}
.granite{
    margin: 60px 0px;
}
.active{
    border: 1px solid gray;
}
.popup{
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 5;
    background-color: rgba(35,35,35,0.5);
    width: 100vw;
    height: 100vh;
}
.popup-fill{
    width: 100%;
    padding:20px;   
    background-color: white;
    margin-top: 150px;
    border-radius: 10px;
    max-height: 80vh;
    min-height: 400px;
}

.div span{
    display: none;
}

@media only screen and (max-width: 600px){
    .color{
        margin: 0px 10px;
    }
    .color-palet{
        width: 40px;
    }
    .color-palet p{
        display: none;
    }
    .div span{
        display: block;
    }
    .popup-fill{
        margin-top: 50px;
        height: 700px;
    }
    .selected-image{
        width: 100%;
        height: 200px;
        float:left;
        margin: 2px 0px;
        text-align: center;
    }
    .close{
        position: relative;
        top: -30px;
        right: -35px;
        width: 30px;
        height: 30px;
        font-size: 25px;
        background-color: white;
        border-radius: 50%;
        padding: 0px 5px; 
        cursor: pointer;

    }
    .popup-image{
        float: left;
        width: 100%;
    }
    .popup-desc{
        float:left;
        width: 100%;
        height: 200px;
        margin: 10px 0px;
        overflow-y: scroll;
    }
    .description{
        padding: 0px 10px;
    }
}
</style>

<script>
export default {
    name: 'GraniteBook',
    data(){
        return {
            colour: null,
            selected: null,
            popup: false,
            granite: [{
                title: 'Majestic Black',
                description: 'This Granite is quarried in northern range of  India  and specially in Rajsamand District  of  Rajasthan. .The Bubble Like Appearance of  Grey colour on Black Surface is the eye catching sight when see it for first time. The majestic black granite have high durability and sustainability and has very low absorption of water ( water resistant). Due to having these specification this granite can be used in Flooring kitchen top, stairs, fire places, mosaic and other projects as well as can also be used for ornamental stones.The best feature of this granite is that you can use this stone for interior purposes as well as exterior purposes. “The Impala Black Enterprises” is very well known for its quality and can processed stone Polished ,Flamed, Gang saw cut & according to your required',
                image: '/majestic_black.jpg',
                colour: 'black'
            },
            {
                title: 'Coin Black',
                description:'Premium black colour granite with long last shine & having grey colour coin like structures on its surface. It is quarried mainly in northern part of india mainly in Rajasthan & widely used in flooring, countertops and wallingIt is also known as “Oyster Black”&  Its easy finishing offers a classically stylish feel to any construct. This stone also have very low absorption capacity',
                image: '/coin_black.jpg',
                colour: 'black'
            },{
                title: 'Fish Black',
                description: 'It is very Exotic & premium granite in which white colour fish like structures placed on a black colour background, the fish like white dots looks like the Fishes are swimming in the Black colour  ocean. Can be used in Countertop, Flooring, Hardscaping, Hotel Slab, Kitchen Slab, Office Slab, Restaurant Slab. It is also quarried from Rajasthan',
                image: '/fish_black.jpg',
                colour: 'black'
            },{
                title: 'Black Marinance',
                description: 'It is a kind of black granite which is relatively a soft stone than other But the Different colour shapes visible in the black background gives it a magnificence beauty.The Other trade name of this granite are Marinance Black  Granite,Granito Marinance Nero,Black mosaic Granite,Pebble Black Granite.',
                image: '/black_merinance.jpg',
                colour: 'black'
            },{
                title: 'Rajasthan Black',
                description: ' Rajasthan Black  Is a Premium granite quarried from Rajasthan & an alternate,cheaper and good option to Absolute Black and Black Galaxy Granite because They  have similar looks .The other trade name of Rajasthan black granites are Black Beauty, Ash black & R. Black There are Blue and Brown small dots in the black background of stone.',
                image: '/rajasthan_black.jpg',
                colour: 'black'
            },{
                title: 'Desert Brown',
                description: 'The desert brown granite has a light greenish-brown base with bright golden-brown flower and flanked pattern dispersed all over stone. It is a low variation granite with stain resistant property and it is quarried from nothern region of india. It is a strain resistant Granite and can be used for interior as well as exterior purposes',
                image: '/dessert_brown.jpg',
                colour: 'brown'
            },{
                title: 'Alaska White',
                description: 'The Silver , Black , Grey colour Patches in Frosty white background makes it a stunning, elegant beautiful stone. Can be used in Countertop, Flooring, Hardscaping, Hotel Slab, Kitchen Slab, Office Slab, Restaurant Slab.',
                image: '/alaska_white.jpg',
                colour: 'white'
            },{
                title: 'Monte Cristo',
                description: 'Expansive, Elegant, Exotic  Granite in which grey waves and darker grey strips in background of stones. Monte Cristo is an excellent choice for granite countertops, backsplashes, floors, and other architectural features both for interior and exterior projects. Its quarries are situated in state of  Rajasthan.',
                image: '/monte_cristo.jpg',
                colour: 'white'
            },{
                title: 'Platinum White',
                description: 'Its quarries are situated in the jalore (Rajasthan). This Granite can be identified by Mixture of Black and grey colour on the white background. This durable & beautiful Indian Granite is okay for usage indoors in climates with freezing temprature and for all commercial & Residentials projects especially for interior Flooring, Floor& Wall, Backsplashes, Countertops , Fireplaces, Tub Surrounds & shower vanities',
                image: '/platinum_white.jpg',
                colour: 'white'
            },{
                title: 'Bala Flower Granites',
                description: 'This Granite is admired for exquisite flowered pattern. There are mix colour of pattern like cream,brown,reddish pink on grey background.It is quarried from Northern Region of india mainly from state of Rajasthan.Variations are low in this Granite and can be used in countertops,walls,Flooring,Staircase etc.',
                image: '/bala_flower_granite.jpg',
                colour: 'red'
            },{
                title: 'Jhansi Red Granite',
                description: 'Jhansi Red granite has red flower like structure with bluish grey crystals dispersed on its surface. Its quarries are situated in Northern Range of india  mainly  in Jhansi Uttar Pradesh.More expansive than other North Indian Granite. This is highly resistant to stain and have a non-slippery texture. Due to this property they are preferably used in interiors and exteriors ',
                image: '/jhansi_red_granite.jpg',
                colour: 'red'
            },{
               title: 'Lakha Red Granite',
               description: 'The other Trade name of this Granite is “Moongeriya Red” . The stone is very eye catching because of presence of multi colour micro particle on Light Red or Bit Orange Background. It is a variant of Red Granite. it is one of the strongest stone & higher durability than other type of Granites', 
                image: '/lakha_red_granite.jpg',
                colour: 'red'
            }, {
                title: 'Ruby Red Granite',
                description: 'It is also known as Imperial Red Granite & its quarries are situated in State of Rajasthan. Qualities Like Great hardness, smooth finishing, resistance to scratch, and durability makes it prominent worldwide. Yellow or sometimes Blue Flowers scatterd on the Red Background gives it a stunning look as using as Walls,Flooring, countertops etc.',
                image: '/ruby_red_granite.jpg',
                colour: 'red'
            },{
                title: 'Chima Pink Granite',
                description: 'This Beautiful Granite is quarried From Northern Region of India mainly From Rajasthan amd Gujrat. As name suggests It isn pink in colour & grey and black & cream shades are present on pink  Background. The other Trade names of this stone is “Imperial Pink Granite” Can be used on Countertops, stairs, window sills, wall, floor, fountain.',
                image: '/chima_pink_granite.jpg',
                colour: 'pink'
            }, {
                title: 'Rosy Pink Granite',
                description: 'Rosy Pink Granite is obtained in beautiful floral patterns in brown, white and grey having an overall pink base. It being a light coloured & consistent material it is extensively used all over the country for in-numerous applications such as kitchen countertop, backsplash area, wall claddings, Floorings, fireplace, cobbles and many more. Pink being the colour of Romance, Rosy Pink Granite creates that in your life with an unparalleled grandeur and unimaginable beauty. Can be used on Countertops, stairs, window sills, wall, floor, fountain.',
                image: '/rosy_pink_granite.jpg',
                colour: 'pink'
            },{
                title: 'Green Pearl Granite',
                description: 'This Granite is extensively used to give a rich and a luxurious appeal to any interior and exterior of the buildings. It is also known as “emerald pearl granite”. Green Pearl Granite reveals a rich green colour with small golden veins and highlights. Low amount of variation present in this granite. Can be used on Countertops, stairs, window sills, wall, floor, fountain.',
                image: '/green_pearl_granite.jpg',
                colour: 'green'
            },{
                title: 'Mokalsar Green Granite',
                description: 'The Mokalsar Green Granite IS one of the most beautiful granite from India. It is one of the most preferred black green granite for use as flooring & wall covering.It is quarried from northern range of India mainly from state of Rajasthan .This Granite is extremely hard and durable and highly stain, scratch and heat resistant',
                image: '/mokalsar_green_granite.jpg',
                colour: 'green'
            },{
                title: 'Desert Green Granite',
                description: 'It is also known as “Devda Green Granite”. It is identified by Light Brown Long eye structure distributed all over on Green Background. The Royal Look of Desert Green Granite make them perfect for Flooring and Cladding.',
                image: '/desert_green_granite.jpg',
                colour: 'green'
            },{
                title: 'Tiger Skin Granite',
                description: 'Tiger Skin Granite is a brown and red granite from Northern Range of India. The appearance of this granite mimics with tigers skin so it is called tiger skin graniteThe Magnificent Tiger look of this granite is very eye catching & It is the  most beautiful Indian granite',
                image: '/tiger_skin.jpg',
                color: 'gold'
            },{
                title: 'Alaska Gold',
                description: 'Most gold mined in Alaska comes from the sands and gravels of streams and rivers  But In India a beautiful Gold  look  like granite is found & quarried from  Northern Region of India. If  you are Fond of the Royal wealthy gold look then Alaska Gold Granite must be your first Choice.',
                image: '/alaska_gold.jpg',
                colour: 'gold'
            },{
                title: 'Desert Gold',
                description: 'Desert gold granite is one of the most popular granite known in the world and have been used on some of the most prestigious projects Internationally and domestic. These granite slabs are used for kitchen top, island top, vanity top, countertops, table top etc.',
                image: '/desert_gold.jpg',
                colour: 'gold'
            },{
                title: 'Blue Dunes Granite',
                description: 'India is rich in granites and minerals.it is also called azul dunes granite &azul celeste granite. It is quarried from Beawar  a place in district Ajmer Rajasthan. Blue granite has a cream granite with green waves with blue sparkle. It gives a very fashionable and beautiful look.',
                image: '/blue_dunes_granite.jpg',
                colour: 'blue'
            },{
                title: 'Crystal Blue Graite',
                description: 'Crystal Blue Granite is a Grey color granite stone with a crystalline blue color mineral in it. It gives a stunning appearance to the interior of the house. A selection of medium to large crystals form the basis of its pattern, tightly compacted to create a sparkling visual spectacle. While each slab is unique, there is a consistency in the pattern, which makes it a favorite among designers wanting a reliable stone. These slabs of natural granite can enrich a room by giving it a natural luster with its outstanding appearance.',
                image: '/crystal_blue.jpg',
                colour: 'blue'
            }]
        }
    },
    methods: {
        selectColour(colour){
            this.colour = colour;
        },
        setIndex(i){
            this.selected = i;
        },
        showPopup(){
            this.popup = !this.popup;
        }

    },
    computed:{
        item:function(){
            if(this.colour==null)
                return this.granite
            else{
                let arr = [];
                console.log(this.colour)
                let colour = this.colour;
                this.granite.forEach(function(row){
                    if(colour==row.colour){
                        arr.push(row);
                        console.log(row) 
                    }
                
                })

                return arr;
            }
        }
    }
}
</script>