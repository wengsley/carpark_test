
<template lang="html">
<div class="content">
    <div class="mx-auto text-center">
        <h1>HELLO WORLD FOR NEWBIE</h1>
        <div>
            <h3>Data refresh in {{ countDown }}</h3>
        </div>
        <div>
            <h2>SMALL</h2>
            <div>
         
                <div>
                    <p>HIGHEST  ({{carpark.small.max[0].total_available}} lots available)</p>
                    <div :key="'i'+i" v-for="(small_max,i) in carpark.small.max">
                        <span v-if="carpark.small.max.length == i+1">{{small_max.carpark_number}}</span>
                        <span v-else>{{small_max.carpark_number}}, </span>
                    </div>
                </div>
                
                <div>
                    <p>LOWEST  ({{carpark.small.min[0].total_available}} lots available)</p>
                    <div :key="'j'+j" v-for="(small_min,j) in carpark.small.min">
                        <span v-if="carpark.small.min.length == j+1">{{small_min.carpark_number}}</span>
                        <span v-else>{{small_min.carpark_number}}, </span>
                    </div>
                </div>
            </div>
            <hr/>

            <h2>MEDIUM</h2>
            <div>
                <div>
                    <p>HIGHEST  ({{carpark.medium.max[0].total_available}} lots available)</p>
                    <div :key="'i'+i" v-for="(medium_max,i) in carpark.medium.max">
                        <span v-if="carpark.medium.max.length == i+1">{{medium_max.carpark_number}}</span>
                        <span v-else>{{medium_max.carpark_number}}, </span>
                    </div>
                </div>

                <div>
                    <p>LOWEST  ({{carpark.medium.min[0].total_available}} lots available)</p>
                    <div :key="'j'+j" v-for="(medium_min,j) in carpark.medium.min">
                        <span v-if="carpark.medium.min.length == j+1">{{medium_min.carpark_number}}</span>
                        <span v-else>{{medium_min.carpark_number}}, </span>
                    </div>
                </div>
            </div>
            <hr/>

            <h2>BIG</h2>
            <div>
                <div>
                    <p>HIGHEST  ({{carpark.big.max[0].total_available}} lots available)</p>
                    <div :key="'i'+i" v-for="(big_max,i) in carpark.big.max">
                        <span v-if="carpark.big.max.length == i+1">{{big_max.carpark_number}}</span>
                        <span v-else>{{big_max.carpark_number}}, </span>
                    </div>
                </div>

                <div>
                    <p>LOWEST  ({{carpark.big.min[0].total_available}} lots available)</p>
                    <div :key="'j'+j" v-for="(big_min,j) in carpark.big.min">
                        <span v-if="carpark.big.min.length == j+1">{{big_min.carpark_number}}</span>
                        <span v-else>{{big_min.carpark_number}}, </span>
                    </div>
                </div>
            </div>
            <hr/>

            <h2>LARGE</h2>
            <div>

                <div>
                    <p>HIGHEST  ({{carpark.large.max[0].total_available}} lots available)</p>
                    <div :key="'i'+i" v-for="(large_max,i) in carpark.large.max">
                        <span v-if="carpark.large.max.length == i+1">{{large_max.carpark_number}}</span>
                        <span v-else>{{large_max.carpark_number}}, </span>
                    </div>
                </div>

                <div>
                    <p>LOWEST  ({{carpark.large.min[0].total_available}} lots available)</p>
                    <div :key="'j'+j" v-for="(large_min,j) in carpark.large.min">
                        <span v-if="carpark.large.min.length == j+1">{{large_min.carpark_number}}</span>
                        <span v-else>{{large_min.carpark_number}}, </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
  
    data: () => ({
        carpark: null,
        countDown: 0

    }),
    mounted() {
        this.countDownTimer();
    },

    methods: {

        countDownTimer () {
            if (this.countDown > 0) {
                setTimeout(() => {
                    this.countDown -= 1
                    this.countDownTimer()
                }, 1000)
            } else if(this.countDown == 0)
            {
                this.countDown = 60;
                this.InitData();

                setTimeout(() => {
                    this.countDown -= 1
                    this.countDownTimer()
                }, 1000)
            }
        },
        InitData()
        {
            axios.get("http://127.0.0.1:3001/api/carpark")
                .then((response) => response.data)
                .then((response) => {
                    this.carpark = response;
                })
                .catch((error) => {
                    let error_msg = error.response.message;
                });
        }
    }

}
</script>

<style lang="css" scoped>

    .content {
        max-width: 800px;
        margin: auto;
        background-color: #EEF3F7;
    }
</style>
