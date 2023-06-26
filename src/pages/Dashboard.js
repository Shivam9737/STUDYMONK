import styles from "./Dashboard.module.css";
const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <div className={styles.webBackground}>
        <div className={styles.webBackgroundChild} />
      </div>
      <div className={styles.navigationsidebarexpanded}>
        <div className={styles.bg} />
        <div className={styles.navigationSidebarExpande}>
          <div className={styles.image1}>
            <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
          </div>
          <img
            className={styles.iconnavigationhamburger}
            alt=""
            src="/iconnavigationhamburger.svg"
          />
        </div>
        <div className={styles.project05}>
          <div className={styles.link}>IOTASK project update</div>
          <div className={styles.line}>
            <div className={styles.mask} />
            <div className={styles.uifillsblue}>
              <div className={styles.rectangleCopy} />
            </div>
          </div>
        </div>
        <div className={styles.project04}>
          <div className={styles.link}>IOTASK content creation</div>
          <div className={styles.line}>
            <div className={styles.mask} />
            <div className={styles.uifillsblue}>
              <div className={styles.rectangleCopy1} />
            </div>
          </div>
        </div>
        <img className={styles.separatorIcon} alt="" src="/separator.svg" />
        <img
          className={styles.navigationsidebarexpandedChild}
          alt=""
          src="/line-3.svg"
        />
        <div className={styles.navigation}>
          <div className={styles.link2}>DASHBOARD</div>
          <div className={styles.badgecounterinfolight}>
            <div className={styles.background} />
            <div className={styles.background1} />
            <b className={styles.b}>2</b>
          </div>
          <img
            className={styles.iconnavigationhamburger}
            alt=""
            src="/dashboard.svg"
          />
        </div>
        <div className={styles.navigation1}>
          <div className={styles.link2}>POST JOB</div>
          <div className={styles.badgecounterinfolight}>
            <div className={styles.background} />
            <div className={styles.background1} />
            <b className={styles.b}>2</b>
          </div>
          <img
            className={styles.iconnavigationhamburger}
            alt=""
            src="/jobs.svg"
          />
        </div>
        <div className={styles.navigation2}>
          <div className={styles.link2}>POST INTERNSHIP</div>
          <div className={styles.badgecounterinfolight}>
            <div className={styles.background} />
            <div className={styles.background1} />
            <b className={styles.b}>2</b>
          </div>
          <img
            className={styles.internshipIcon}
            alt=""
            src="/internship1.svg"
          />
        </div>
        <div className={styles.navigation3}>
          <div className={styles.link2}>APPLICATION</div>
          <div className={styles.badgecounterinfolight}>
            <div className={styles.background} />
            <div className={styles.background1} />
            <b className={styles.b}>2</b>
          </div>
          <img
            className={styles.iconnavigationhamburger}
            alt=""
            src="/application.svg"
          />
        </div>
      </div>
      <div className={styles.navigationTopHeader}>
        <div className={styles.fillsshadowRound}>
          <div className={styles.bg} />
          <div className={styles.pageTitle}>Dashboard</div>
          <div className={styles.avatarParent}>
            <img className={styles.avatarIcon} alt="" src="/avatar1.svg" />
            <div className={styles.search}>
              <div className={styles.searchForTaskAndParent}>
                <div className={styles.searchForTask}>
                  Search for Jobs and etc.
                </div>
                <img
                  className={styles.iconSearch}
                  alt=""
                  src="/icon--search1.svg"
                />
              </div>
            </div>
            <div className={styles.rectangleParent}>
              <div className={styles.groupChild} />
              <img
                className={styles.notificationIcon}
                alt=""
                src="/001notification.svg"
              />
              <div className={styles.wrapper}>
                <b className={styles.b4}>2</b>
              </div>
            </div>
          </div>
        </div>
        <img className={styles.lineIcon} alt="" src="/line.svg" />
      </div>
      <div className={styles.card}>
        <div className={styles.background8} />
        <div className={styles.jobPosts}>Total Application</div>
        <b className={styles.b5}>4,561</b>
        <b className={styles.b6}>-4.4%</b>
        <img className={styles.graph2Icon} alt="" src="/graph-2.svg" />
      </div>
      <div className={styles.card1}>
        <div className={styles.background8} />
        <div className={styles.jobPosts}>No of Meetings</div>
        <b className={styles.b5}>125</b>
        <b className={styles.b8}>+1.5%</b>
        <img className={styles.graph2Icon} alt="" src="/graph-3.svg" />
      </div>
      <div className={styles.card2}>
        <div className={styles.background8} />
        <div className={styles.jobPosts}>No of Hirings</div>
        <b className={styles.b5}>2,456</b>
        <b className={styles.b10}>+4.5%</b>
        <img className={styles.graph2Icon} alt="" src="/graph-6.svg" />
      </div>
      <div className={styles.card3}>
        <div className={styles.background8} />
        <div className={styles.jobPosts}>Job Posts</div>
        <b className={styles.b5}>2,456</b>
        <b className={styles.b10}>+2.5%</b>
        <img className={styles.graphIcon} alt="" src="/graph.svg" />
      </div>
      <div className={styles.piechartParent}>
        <div className={styles.piechart}>
          <div className={styles.background12} />
          <div className={styles.groupParent}>
            <div className={styles.labellegendlightParent}>
              <div className={styles.labellegendlight}>
                <div className={styles.labellegendlightChild} />
                <div className={styles.webServerA}>Shortlisted</div>
              </div>
              <div className={styles.div}>942</div>
            </div>
            <div className={styles.parent}>
              <div className={styles.div1}>25</div>
              <div className={styles.labellegendlight1}>
                <div className={styles.labellegendlightItem} />
                <div className={styles.webServerA}>Hired</div>
              </div>
            </div>
            <div className={styles.group}>
              <div className={styles.div2}>2,452</div>
              <div className={styles.labellegendlight2}>
                <div className={styles.labellegendlightInner} />
                <div className={styles.webServerA}>Rejected</div>
              </div>
            </div>
          </div>
          <div className={styles.piechartGroup}>
            <img className={styles.piechartIcon} alt="" src="/piechart.svg" />
            <div className={styles.runningline}>
              <div className={styles.div3}>+2,5%</div>
              <img className={styles.lineIcon1} alt="" src="/line1.svg" />
            </div>
            <div className={styles.fixedline}>
              <div className={styles.div4}>-0,5%</div>
              <img className={styles.lineIcon2} alt="" src="/line2.svg" />
            </div>
            <div className={styles.downline}>
              <div className={styles.div5}>+0,4%</div>
              <img className={styles.lineIcon3} alt="" src="/line3.svg" />
            </div>
          </div>
        </div>
        <div className={styles.applicationResponceParent}>
          <b className={styles.applicationResponce}>Application Responce</b>
          <div className={styles.downloadReport}>Download Report</div>
        </div>
      </div>
      <div className={styles.component1}>
        <div className={styles.background8} />
        <div className={styles.recentJobPostsParent}>
          <b className={styles.recentJobPosts}>Recent Job Posts</b>
          <div className={styles.tabmenu}>
            <div className={styles.background14} />
            <div className={styles.active}>
              <div className={styles.backgroundactive} />
              <div className={styles.today}>Today</div>
            </div>
            <div className={styles.monthly}>Monthly</div>
            <div className={styles.weekly}>Weekly</div>
          </div>
        </div>
        <div className={styles.groupContainer}>
          <div className={styles.rectangleGroup}>
            <div className={styles.groupItem} />
            <div className={styles.jobTitle}>Job Title</div>
            <div className={styles.category}>Category</div>
            <div className={styles.openings}>Openings</div>
            <div className={styles.applications}>Applications</div>
            <div className={styles.status}>Status</div>
          </div>
          <div className={styles.row03}>
            <div className={styles.background15} />
            <div className={styles.borderbot} />
            <div className={styles.uiUxDesigner}>UI UX Designer</div>
            <div className={styles.fullTime}>Full Time</div>
            <div className={styles.div6}>12</div>
            <div className={styles.div7}>135</div>
            <div className={styles.badgetextsuccesslight}>
              <b className={styles.b4}>Active</b>
            </div>
          </div>
          <div className={styles.row031}>
            <div className={styles.background15} />
            <div className={styles.borderbot} />
            <div className={styles.uiUxDesigner}>Full Stack Dev</div>
            <div className={styles.fullTime}>Full Time</div>
            <div className={styles.div6}>08</div>
            <div className={styles.div7}>100</div>
            <div className={styles.badgetextsuccesslight1}>
              <b className={styles.b4}>Inactive</b>
            </div>
          </div>
          <div className={styles.row032}>
            <div className={styles.background15} />
            <div className={styles.borderbot} />
            <div className={styles.uiUxDesigner}>DevOps</div>
            <div className={styles.fullTime}>Internship</div>
            <div className={styles.div6}>12</div>
            <div className={styles.div7}>05</div>
            <div className={styles.badgetextsuccesslight}>
              <b className={styles.b4}>Active</b>
            </div>
          </div>
          <div className={styles.row033}>
            <div className={styles.background15} />
            <div className={styles.borderbot} />
            <div className={styles.uiUxDesigner}>Android Dev</div>
            <div className={styles.fullTime}>Full Time</div>
            <div className={styles.div6}>04</div>
            <div className={styles.div7}>45</div>
            <div className={styles.badgetextsuccesslight}>
              <b className={styles.b4}>Active</b>
            </div>
          </div>
          <div className={styles.row034}>
            <div className={styles.background15} />
            <div className={styles.borderbot4} />
            <div className={styles.uiUxDesigner}>IOS Developer</div>
            <div className={styles.fullTime}>Full Time</div>
            <div className={styles.div6}>18</div>
            <div className={styles.div7}>96</div>
            <div className={styles.badgetextsuccesslight1}>
              <b className={styles.b4}>Inactive</b>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.component3}>
        <div className={styles.component3Child} />
        <img className={styles.component3Item} alt="" src="/group-271.svg" />
        <div className={styles.welcomeToHireContainer}>
          <p className={styles.welcomeToHire}>Welcome To Hire karma</p>
          <p className={styles.johnDoe}>
            <b>John Doe</b>
          </p>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.bg} />
        <div className={styles.image1Parent}>
          <div className={styles.image11}>
            <img className={styles.image1Icon} alt="" src="/image-11@2x.png" />
          </div>
          <div className={styles.allRightsReserved}>
            © 2021 All Rights Reserved to Hire karma | Version 0.1
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
