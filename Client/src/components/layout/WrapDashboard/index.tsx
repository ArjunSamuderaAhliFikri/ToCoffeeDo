import { useContext, useEffect, useState } from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { Data } from "../../../data/dummy";
import styles from "../../../styles/WrapDashboard.module.css";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { ShowSidebarContext } from "../../../context/isShowSidebarContext";

const WrapDashboard = (): JSX.Element => {
  const [chartData, setChartData] = useState({
    labels: Data.map((data) => data.year),
    options: {
      layout: {
        padding: {
          left: 500,
        },
      },
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
    datasets: [
      {
        label: "data_sekolah",
        data: Data.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "&quot;#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
          "#2a71d0",
          "#f3ba2f",
          "#50AF95",
          "rgba(75,192,192,1)",
        ],
        borderWidth: 3,
        borderColor: "#004FFF",
      },
      {
        label: "nilai_sekolah",
        data: Data.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "&quot;#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
          "#2a71d0",
          "#f3ba2f",
          "#50AF95",
          "rgba(75,192,192,1)",
        ],
        borderWidth: 3,
        borderColor: "#004FFF",
      },
    ],
  });
  const { setIsShow } = useContext(ShowSidebarContext);

  // event handler
  const handleShowSidebar = (): void => {
    setIsShow((prevState: boolean) => !prevState);
  };

  const options = {
    responsive: true,
    maintainAspectRation: false,
  };

  useEffect(() => {
    if (Chart.getChart("data_sekolah")) {
      Chart.getChart("data_sekolah")?.destroy();
    }
  }, [Chart]);

  return (
    <>
      <div className={styles.wrapper_dashboard}>
        <nav className={styles.navbar_phone}>
          <div className={styles.hamburger_searchbar}>
            <MenuIcon
              onClick={handleShowSidebar}
              fontSize="large"
              sx={{ fill: "#333" }}
            />
            <input
              type="text"
              name="search"
              id="search"
              placeholder="cari tugasmu..."
            />
          </div>
          <NotificationsIcon fontSize="medium" sx={{ fill: "#333" }} />
        </nav>
        <div className={styles.container_dashboard}>
          <div className={styles.header_dashboard}>
            <h1 className={styles.header_text}>dashboard</h1>
            <p className={styles.description_header}>see your task in here!</p>
          </div>

          <div className={styles.wrapper_fill_dashboard}>
            <section className={styles.chart_recent}>
              <div className={styles.wrap_charttt}>
                <Line data={chartData} options={options} />
              </div>

              <div className={styles.recent_task}>
                <div className={styles.header_recent_task}>
                  <h1 className={styles.text_recent_task}>recent task!</h1>
                  {/* search recent task section */}
                  <div className={styles.wrapper_button_search}>
                    <SearchIcon sx={{ fill: "#333", fontSize: 20 }} />
                    <span>search</span>
                  </div>
                </div>
                <div className={styles.wrapper_items_task}>
                  <div className={styles.item_task}>
                    <div className={styles.content_task}>
                      <div className={styles.wrapper_image_task}>
                        <img src="/svg/task.svg" alt="task icon" />
                      </div>

                      {/* description task recent section */}
                      <div className={styles.description_task_recent}>
                        <div>
                          <h1 className={styles.title_task}>
                            belajar pemrograman
                          </h1>
                          <p>belajar HTML, CSS, Javascript</p>
                        </div>

                        {/* sweet icons section */}
                        <div>{/* TODO */}</div>
                      </div>
                    </div>

                    {/* view task section */}
                    <div className={styles.information_task}>
                      <div className={styles.icon_information_task}>
                        <img src="/svg/todo.svg" alt="todo_svg" />
                        <span>1/ 5</span>
                      </div>
                      <button type="button">view task</button>
                    </div>
                  </div>
                  <div className={styles.item_task}>
                    <div className={styles.content_task}>
                      <div className={styles.wrapper_image_task}>
                        <img src="/svg/task.svg" alt="task icon" />
                      </div>

                      {/* description task recent section */}
                      <div className={styles.description_task_recent}>
                        <div>
                          <h1 className={styles.title_task}>
                            belajar pemrograman
                          </h1>
                          <p>belajar HTML, CSS, Javascript</p>
                        </div>

                        {/* sweet icons section */}
                        <div>{/* TODO */}</div>
                      </div>
                    </div>

                    {/* view task section */}
                    <div className={styles.information_task}>
                      <div className={styles.icon_information_task}>
                        <img src="/svg/todo.svg" alt="todo_svg" />
                        <span>3 / 5</span>
                      </div>
                      <button type="button">view task</button>
                    </div>
                  </div>
                  <div className={styles.item_task}>
                    <div className={styles.content_task}>
                      <div className={styles.wrapper_image_task}>
                        <img src="/svg/task.svg" alt="task icon" />
                      </div>

                      {/* description task recent section */}
                      <div className={styles.description_task_recent}>
                        <div>
                          <h1 className={styles.title_task}>
                            belajar pemrograman
                          </h1>
                          <p>belajar HTML, CSS, Javascript</p>
                        </div>

                        {/* sweet icons section */}
                        <div>{/* TODO */}</div>
                      </div>
                    </div>

                    {/* view task section */}
                    <div className={styles.information_task}>
                      <div className={styles.icon_information_task}>
                        <img src="/svg/todo.svg" alt="todo_svg" />
                        <span>3 / 5</span>
                      </div>
                      <button type="button">view task</button>
                    </div>
                  </div>
                  <div className={styles.item_task}>
                    <div className={styles.content_task}>
                      <div className={styles.wrapper_image_task}>
                        <img src="/svg/task.svg" alt="task icon" />
                      </div>

                      {/* description task recent section */}
                      <div className={styles.description_task_recent}>
                        <div>
                          <h1 className={styles.title_task}>
                            belajar pemrograman
                          </h1>
                          <p>belajar HTML, CSS, Javascript</p>
                        </div>

                        {/* sweet icons section */}
                        <div>{/* TODO */}</div>
                      </div>
                    </div>

                    {/* view task section */}
                    <div className={styles.information_task}>
                      <div className={styles.icon_information_task}>
                        <img src="/svg/todo.svg" alt="todo_svg" />
                        <span>3 / 5</span>
                      </div>
                      <button type="button">view task</button>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* create schedule section */}
            <section className={styles.container_schedule_section}>
              <h1>create schedule</h1>

              {/* items schedule */}
              <div className={styles.wrapper_items_schedule}>
                <div className={styles.item_schedule}>
                  <img
                    src="/img/laptop-coding-2.jpg"
                    alt="background item schedule"
                  />

                  <div className={styles.wrapper_description_schedule}>
                    <h1>jadwal ulangan SAS</h1>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                  </div>
                </div>
                <div className={styles.item_schedule}>
                  <img
                    src="/img/laptop-coding-2.jpg"
                    alt="background item schedule"
                  />

                  <div className={styles.wrapper_description_schedule}>
                    <h1>jadwal ulangan SAS</h1>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                  </div>
                </div>
                <div className={styles.item_schedule}>
                  <img
                    src="/img/laptop-coding-2.jpg"
                    alt="background item schedule"
                  />

                  <div className={styles.wrapper_description_schedule}>
                    <h1>jadwal ulangan SAS</h1>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                  </div>
                </div>
                <div className={styles.item_schedule}>
                  <img
                    src="/img/laptop-coding-2.jpg"
                    alt="background item schedule"
                  />

                  <div className={styles.wrapper_description_schedule}>
                    <h1>jadwal ulangan SAS</h1>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                  </div>
                </div>
                <div className={styles.item_schedule}>
                  <img
                    src="/img/laptop-coding-2.jpg"
                    alt="background item schedule"
                  />

                  <div className={styles.wrapper_description_schedule}>
                    <h1>jadwal ulangan SAS</h1>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                  </div>
                </div>
                <div className={styles.item_schedule}>
                  <img
                    src="/img/laptop-coding-2.jpg"
                    alt="background item schedule"
                  />

                  <div className={styles.wrapper_description_schedule}>
                    <h1>jadwal ulangan SAS</h1>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                  </div>
                </div>
                <div className={styles.item_schedule}>
                  <img
                    src="/img/laptop-coding-2.jpg"
                    alt="background item schedule"
                  />

                  <div className={styles.wrapper_description_schedule}>
                    <h1>jadwal ulangan SAS</h1>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                  </div>
                </div>
                <div className={styles.item_schedule}>
                  <img
                    src="/img/laptop-coding-2.jpg"
                    alt="background item schedule"
                  />

                  <div className={styles.wrapper_description_schedule}>
                    <h1>jadwal ulangan SAS</h1>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                  </div>
                </div>
                <div className={styles.item_schedule}>
                  <img
                    src="/img/laptop-coding-2.jpg"
                    alt="background item schedule"
                  />

                  <div className={styles.wrapper_description_schedule}>
                    <h1>jadwal ulangan SAS</h1>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default WrapDashboard;
