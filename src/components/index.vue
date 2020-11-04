<template>
  <div>
    <main class="home__cover">
      <center>
        <h1>Locate awesome events around you in minutes.</h1>
        <p>
          Join the most exciting discussion and meetups in your neigbourhood.
        </p>
        <button @click="$router.push('/register')" class="get__started">
          Get Started
        </button>
      </center>
    </main>

    <section class="list__event">
      <center>
        <h3 class="div__title">
          Join the most exciting discussion and meetups in your neigbourhood.
        </h3>
      </center>

      <div class="search__box">
        <input
          v-model="searchEvent"
          type="text"
          placeholder="Enter event name or city"
          class="search__input"
        />
      </div>

      <div class="event__list">
        <div
          class="event__content"
          v-for="event in resultQuery"
          :key="event.id"
        >
          <div class="event__image">
            <!-- <img src="../assets/img/event-image.png" /> -->
            <img
              :src="event.images[0].url"
              :alt="event.name"
              style="width: 265px; height: 160px;"
            />
          </div>
          <p>{{ event.name }}</p>
          <span>{{
            event.dates.start.dateTime | moment("dddd, MMMM Do YYYY, h:mm:ss a")
          }}</span>
          <div class="sub__event__content">
            <span>Lagos</span>
            <button>Available</button>
          </div>
        </div>
      </div>
      <div style="text-align: center">
        <button class="load__more">See more Events</button>
      </div>
    </section>

    <section class="blank__div">
      <!-- <button class="load__more">Load more</button> -->
    </section>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "mainContent",
  data() {
    return {
      events: [],
      searchEvent: null,
    };
  },

  mounted() {
    this.fetchEvents();
  },

  computed: {
    resultQuery() {
      // console.log(this.searchEvent);
      if (this.searchEvent) {
        const filtered = this.events.filter((item) =>
          item.name.toLowerCase().includes(this.searchEvent)
        );
        return filtered;
      } else {
        return this.events;
      }
    },
  },

  methods: {
    getMax(array) {
      return array.priceRanges && array.priceRanges.length;
    },

    fetchEvents() {
      axios
        .get(
          "https://app.ticketmaster.com/discovery/v2/events?apikey=j3NtHIoBfApjHU0wjFnjENfU3VNu9K3i&keyword=Tech&locale=en&size=50&countryCode=US"
        )
        .then((res) => {
          this.events = res.data._embedded.events;
          console.log(res.data._embedded);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    truncateString(str, num) {
      if (!str) {
        return false;
      }

      if (str.length <= num) {
        return str;
      }

      return str.slice(0, num) + "...";
    },
  },
};
</script>

<style scoped>
/* .list__event {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
} */
.event__list {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  margin-top: 89px;
  margin-right: 10%;
  margin-left: 10%;
  justify-content: space-evenly;
}

.event__image {
  margin-bottom: 50px;
}

.event__content {
  margin-bottom: 30px;
}

.event__content p {
  font-family: FLW-Regular;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  color: #828282;
}

.event__content span {
  font-family: FLW-Regular;
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 15px;
  color: #828282;
}

.sub__event__content {
  display: flex;
  justify-content: space-between;
}

.sub__event__content span {
  font-family: FLW-Regular;
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 15px;
  color: #f5a623;
}

.sub__event__content button {
  font-family: FLW-Regular;
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 15px;
  color: #008a13;
  background: #d5f5d6;
  padding: 2px;
  border: none;
  border-radius: 1px;
}

.sold button {
  font-family: FLW-Regular;
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 15px;
  color: #008a13;
  background: #d5f5d6;
  padding: 2px;
  border: none;
  border-radius: 1px;
}

.free button {
  font-family: FLW-Regular;
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 15px;
  color: #008a13;
  background: #d5f5d6;
  padding: 2px;
  border: none;
  border-radius: 1px;
}

.search__box {
  display: flex;
  justify-content: center;
  margin-top: 50px;
}

.search__input {
  height: 40px;
  width: 530px;
  padding-left: 15px;
  background: linear-gradient(180deg, #ffffff 0%, #f8f8f9 100%);
  border: 1px solid #d4dce3;
  box-sizing: border-box;
  border-radius: 4px;
}
.search__button {
  width: 145px;
  height: 40px;
  background: #f5a623;
  box-shadow: 0px 0px 3px rgba(63, 63, 68, 0.05),
    1px 1px 3px rgba(50, 50, 54, 0.13);
  border-radius: 4px;
  color: #ffffff;
  border: none;
  font-size: 14px;
  margin-left: 5px;
  line-height: 26px;
}
.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}

.wrapper div {
  border: 2px solid #ffa94d;
  background-color: #ffd8a8;
  padding: 5em;
  color: #d9480f;
}

.home__cover {
  background-image: url("../assets/img/cover.png");
  background-size: cover;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
}

.home__cover h1 {
  display: flex;
  justify-content: center;
  font-family: FLW-Regular;
  font-style: normal;
  font-weight: bold;
  font-size: 50px;
  line-height: 60px;
  text-align: center;
  color: #ffffff;
  padding-top: 225px;
  margin-top: 300p;
  width: 45%;
}

.home__cover p {
  font-family: FLW-Regular;
  font-style: normal;
  font-weight: normal;
  font-size: 28px;
  line-height: 34px;
  text-align: center;
  color: #ffffff;
  width: 35%;
}

.get__started {
  width: 351px;
  height: 40px;
  color: #ffffff;
  background: #f5a623;
  box-shadow: 0px 0px 3px rgba(63, 63, 68, 0.05),
    1px 1px 3px rgba(50, 50, 54, 0.13);
  border-radius: 4px;
  border: none;
  font-size: 14px;
  margin-top: 35px;
  line-height: 26px;
}

.div__title {
  font-family: FLW-Regular;
  font-style: normal;
  font-weight: normal;
  font-size: 28px;
  line-height: 34px;
  text-align: center;
  color: #000000;
  width: 38%;
  padding-top: 85px;
}

.load__more {
  /* margin: 0 auto; */
  width: 351px;
  height: 40px;
  color: #ffffff;
  background: #f5a623;
  box-shadow: 0px 0px 3px rgba(63, 63, 68, 0.05),
    1px 1px 3px rgba(50, 50, 54, 0.13);
  border-radius: 4px;
  border: none;
  font-size: 14px;
  margin-top: 35px;
  line-height: 26px;
}

.blank__div {
  margin-top: 50px;
  height: 185px;
  background: #f1f1f1;
}
</style>
