<template>
  <div>
    <div class="modal-backdrop">
      <div class="modal">
        <header class="modal-header" id="modalTitle">
          <slot name="header">
            <!-- This is the default tile! -->
            <button
              class="btn-close"
              aria-label="Close modal"
              @click="$emit('close')"
            >
              x
            </button>
          </slot>
        </header>
        <div
          style="display: flex; justify-content: space-between; border-bottom: red;"
        >
          <!-- {{ eventDetails.name }} -->
          <div class="event__title">
            <h1 style="width: 80%;">Google Quantum Conference</h1>
          </div>
          <div>
            <img src="../assets/img/event-image.png" />
          </div>
        </div>

        <div
          style="display: flex; justify-content: space-between; border-bottom: red;"
        >
          <div>
            <h5 class="about__event">About this event</h5>
          </div>
          <div>
            <div class="social__share">
              <ul>
                <li class="social__icon">
                  <a href="#"
                    ><svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0ZM13.2508 12.5271V19.0557H10.5495V12.5274H9.2V10.2776H10.5495V8.92678C10.5495 7.0914 11.3116 6 13.4766 6H15.279V8.25006H14.1524C13.3096 8.25006 13.2538 8.56447 13.2538 9.15125L13.2508 10.2773H15.2918L15.053 12.5271H13.2508Z"
                        fill="#828282"
                      />
                    </svg>
                  </a>
                </li>
                <li class="social__icon">
                  <a href="#"
                    ><svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0ZM11.6658 10.169L11.6406 9.75375C11.5651 8.67755 12.2282 7.69456 13.2774 7.31323C13.6635 7.17765 14.3182 7.1607 14.7463 7.27934C14.9142 7.33018 15.2331 7.49966 15.4598 7.65219L15.8711 7.93184L16.3243 7.78778C16.5761 7.71151 16.9119 7.5844 17.063 7.49966C17.2057 7.42339 17.3316 7.38102 17.3316 7.40645C17.3316 7.5505 17.021 8.042 16.7608 8.31317C16.4083 8.6945 16.509 8.72839 17.2224 8.47417C17.6505 8.33011 17.6589 8.33011 17.575 8.49112C17.5246 8.57586 17.2644 8.87245 16.9874 9.14362C16.5174 9.60969 16.4922 9.66054 16.4922 10.0503C16.4922 10.652 16.2068 11.9062 15.9214 12.5925C15.3926 13.8806 14.2595 15.211 13.1263 15.8805C11.5315 16.8211 9.40786 17.0584 7.61999 16.5075C7.02404 16.3211 6 15.8466 6 15.7618C6 15.7364 6.31057 15.7025 6.68829 15.694C7.4773 15.6771 8.26631 15.4568 8.93781 15.067L9.39108 14.7958L8.87066 14.6178C8.13201 14.3636 7.46891 13.7789 7.30103 13.2281C7.25067 13.0501 7.26746 13.0417 7.73751 13.0417L8.22434 13.0332L7.81305 12.8383C7.32621 12.5925 6.88134 12.1773 6.66311 11.7536C6.50362 11.4486 6.30218 10.6774 6.36093 10.6181C6.37772 10.5927 6.55399 10.6435 6.75544 10.7113C7.33461 10.9232 7.41015 10.8723 7.0744 10.5164C6.44487 9.87239 6.25181 8.91482 6.55399 8.0081L6.69668 7.60135L7.25067 8.15216C8.38383 9.26226 9.71843 9.92323 11.2461 10.1181L11.6658 10.169Z"
                        fill="#828282"
                      />
                    </svg>
                  </a>
                </li>

                <li class="social__icon">
                  <a href="#"
                    ><svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0ZM5.76084 9.93892H8.4803V18.1098H5.76084V9.93892ZM8.65938 7.41135C8.64173 6.6102 8.06883 6 7.13852 6C6.20821 6 5.6 6.6102 5.6 7.41135C5.6 8.1959 6.19023 8.82367 7.10322 8.82367H7.12059C8.06883 8.82367 8.65938 8.1959 8.65938 7.41135ZM15.1566 9.74707C16.9461 9.74707 18.2877 10.9151 18.2877 13.4249L18.2876 18.1098H15.5682V13.7384C15.5682 12.6404 15.1747 11.8911 14.1902 11.8911C13.4389 11.8911 12.9914 12.3962 12.7949 12.8841C12.723 13.0589 12.7053 13.3025 12.7053 13.5467V18.11H9.98555C9.98555 18.11 10.0214 10.7059 9.98555 9.93915H12.7053V11.0965C13.0663 10.5401 13.7127 9.74707 15.1566 9.74707Z"
                        fill="#828282"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="event__description">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in
            cursus odio. Integer massa mauris, aliquam a mauris in, venenatis
            ornare nunc. Cras dapibus urna et sapien dignissim placerat in in
            tellus. Vivamus enim neque, gravida at suscipit et, faucibus sed
            turpis. Donec arcu metus, placerat a fermentum eu, scelerisque eget
            lorem. Aenean accumsan, elit eget dictum convallis, turpis lorem
            gravida lectus, quis bibendum justo dolor vel dolor. Aliquam non est
            elit. Pellentesque non fringilla turpis. Quisque s
          </p>
        </div>
        <div class="select__div">
          <h6 class="select__tickets">Select the number of tickets</h6>

          <div
            style="display: flex; flow-direction: row; justify-content: space-between; margin-bottom: 5rem;"
          >
            <select
              class="select__number"
              style="    height: 40px;
    width: 380px;
  
    background: linear-gradient(180deg, #ffffff 0%, #f8f8f9 100%);
    border: 1px solid #d4dce3;
    box-sizing: border-box;
    border-radius: 4px;"
            >
              <option>0</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
            </select>

            <button
              style="width:145px; height: 40px; background: #F5A623;
box-shadow: 0px 0px 3px rgba(63, 63, 68, 0.05), 1px 1px 3px rgba(50, 50, 54, 0.13);
border-radius: 4px; border: none; color: #ffffff;"
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["eventDetails"],
  data() {
    return {};
  },
};
</script>
<style>
.select__div {
  margin-top: 3rem;
}
.select__tickets {
  font-family: FLW-Regular;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #f5a623;
}
.event__title h1 {
  font-family: FLW-Regular;
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  line-height: 34px;

  color: #000000;
}
.event__description {
  font-family: FLW-Regular;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 16px;

  color: #828282;
}
.about__event {
  font-family: FLW-Regular;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 18px;
  /* identical to box height */

  color: #f5a623;
}
.social__share ul li {
  display: inline-block;
  list-style: none;
  padding-left: 1px;
  padding: 10px;
}
.social__icon a img {
  margin-bottom: 10px;
  height: 35px;
  width: 35px;
}

.social__icon__design {
  height: 30px;
  width: 30px;
}
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  widows: 500px;
}
.modal {
  background: #ffffff;
  padding: 0 5rem;
  overflow-x: auto;
  /* display: flex; */
  /* flex-direction: column; */
  width: 55%;
  z-index: 1500;
}
.modal-header,
.modal-footer {
  padding: 15px;
  display: flex;
}
.modal-header {
  /* border-bottom: 1px solid #eeeeee; */
  color: #4aae9b;
  justify-content: flex-end;
}
.modal-footer {
  border-top: 1px solid #eeeeee;
  justify-content: flex-end;
}
.modal-body {
  position: relative;
  padding: 20px 10px;
}
.btn-close {
  border: none;
  font-size: 20px;
  padding: 20px;
  cursor: pointer;
  font-weight: bold;
  color: brown;
  background: transparent;
}
.btn-green {
  color: white;
  background: #4aae9b;
  border: 1px solid #4aae9b;
  border-radius: 2px;
}
.checkout {
  background: brown;
  color: #ffffff;
  padding: 1rem;
  border-radius: 5px;
  border: transparent;
}
.select__number {
  width: 10%;
  display: block;
  font-size: 16px;
  color: #444;
  line-height: 1.3;
}
</style>
＀
