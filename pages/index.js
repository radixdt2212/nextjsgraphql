import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

export default function Home({ launches }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>SpaceX launch Sequece</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <div className={styles.grid}>
          {launches.map((launch) => {
            return (
              <span key={launch.id} className={styles.card}>
                <a href={launch.links.video_link}>
                  <h3>{launch.mission_name}</h3>
                  <p>
                    <strong>Launch Date:</strong>{" "}
                    {new Date(launch.launch_date_local).toLocaleDateString(
                      "en-US"
                    )}
                  </p>

                  <Image
                    src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
                    placeholder="blur"
                    blurDataURL="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
                    height={100}
                    width={100}
                    quality={80}
                    alt={
                      launch.links.mission_patch
                        ? launch.links.mission_patch
                        : "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
                    }
                  />
                  <br />
                </a>
                <a
                  href={launch.links.mission_patch}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open Image
                </a>
              </span>
            );
          })}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}

export async function getStaticProps() {
  try {
    const client = new ApolloClient({
      uri: "https://api.spacex.land/graphql/",
      cache: new InMemoryCache(),
    });
    const { data } = await client.query({
      query: gql`
        query GetLaunches {
          launchesPast(limit: 10) {
            id
            mission_name
            launch_date_local
            launch_site {
              site_name_long
            }
            links {
              article_link
              video_link
              mission_patch
            }
            rocket {
              rocket_name
            }
          }
        }
      `,
    });
    // Code will go here
    return {
      props: {
        launches: data.launchesPast,
      },
    };
  } catch (error) {
    return {
      props: {
        launches: [
          {
            __typename: "Launch",
            id: "109",
            mission_name: "Starlink-15 (v1.0)",
            launch_date_local: "2020-10-24T11:31:00-04:00",
            launch_site: {
              __typename: "LaunchSite",
              site_name_long:
                "Cape Canaveral Air Force Station Space Launch Complex 40",
            },
            links: {
              __typename: "LaunchLinks",
              article_link: null,
              video_link: "https://youtu.be/J442-ti-Dhg",
              mission_patch: "https://images2.imgbox.com/d2/3b/bQaWiil0_o.png",
            },
            rocket: { __typename: "LaunchRocket", rocket_name: "Falcon 9" },
          },
          {
            __typename: "Launch",
            id: "108",
            mission_name: "Sentinel-6 Michael Freilich",
            launch_date_local: "2020-11-21T09:17:00-08:00",
            launch_site: {
              __typename: "LaunchSite",
              site_name_long:
                "Vandenberg Air Force Base Space Launch Complex 4E",
            },
            links: {
              __typename: "LaunchLinks",
              article_link:
                "https://spaceflightnow.com/2020/11/21/international-satellite-launches-to-extend-measurements-of-sea-level-rise/",
              video_link: "https://youtu.be/aVFPzTDCihQ",
              mission_patch: null,
            },
            rocket: { __typename: "LaunchRocket", rocket_name: "Falcon 9" },
          },
          {
            __typename: "Launch",
            id: "107",
            mission_name: "Crew-1",
            launch_date_local: "2020-11-15T19:27:00-05:00",
            launch_site: {
              __typename: "LaunchSite",
              site_name_long:
                "Kennedy Space Center Historic Launch Complex 39A",
            },
            links: {
              __typename: "LaunchLinks",
              article_link:
                "https://spaceflightnow.com/2020/11/16/astronauts-ride-spacex-crew-capsule-in-landmark-launch-for-commercial-spaceflight/",
              video_link: "https://youtu.be/bnChQbxLkkI",
              mission_patch: "https://i.imgur.com/t5R4BAQ.png",
            },
            rocket: { __typename: "LaunchRocket", rocket_name: "Falcon 9" },
          },
          {
            __typename: "Launch",
            id: "106",
            mission_name: "GPS III SV04 (Sacagawea)",
            launch_date_local: "2020-11-05T18:24:00-05:00",
            launch_site: {
              __typename: "LaunchSite",
              site_name_long:
                "Cape Canaveral Air Force Station Space Launch Complex 40",
            },
            links: {
              __typename: "LaunchLinks",
              article_link:
                "https://spaceflightnow.com/2020/11/06/spacex-launches-gps-navigation-satellite-from-cape-canaveral/",
              video_link: "https://youtu.be/wufXF5YKR1M",
              mission_patch: "https://i.imgur.com/Ehe9AgY.png",
            },
            rocket: { __typename: "LaunchRocket", rocket_name: "Falcon 9" },
          },
          {
            __typename: "Launch",
            id: "105",
            mission_name: "Starlink-14 (v1.0)",
            launch_date_local: "2020-10-24T11:31:00-04:00",
            launch_site: {
              __typename: "LaunchSite",
              site_name_long:
                "Cape Canaveral Air Force Station Space Launch Complex 40",
            },
            links: {
              __typename: "LaunchLinks",
              article_link:
                "https://spaceflightnow.com/2020/10/24/spacex-adds-another-60-satellites-to-starlink-network/",
              video_link: "https://youtu.be/2gbVgTxLgN0",
              mission_patch: "https://images2.imgbox.com/d2/3b/bQaWiil0_o.png",
            },
            rocket: { __typename: "LaunchRocket", rocket_name: "Falcon 9" },
          },
          {
            __typename: "Launch",
            id: "104",
            mission_name: "Starlink-13 (v1.0)",
            launch_date_local: "2020-10-18T08:25:00-04:00",
            launch_site: {
              __typename: "LaunchSite",
              site_name_long:
                "Kennedy Space Center Historic Launch Complex 39A",
            },
            links: {
              __typename: "LaunchLinks",
              article_link:
                "https://spaceflightnow.com/2020/10/18/spacex-launches-another-batch-of-starlink-satellites/",
              video_link: "https://youtu.be/UM8CDDAmp98",
              mission_patch: "https://images2.imgbox.com/d2/3b/bQaWiil0_o.png",
            },
            rocket: { __typename: "LaunchRocket", rocket_name: "Falcon 9" },
          },
          {
            __typename: "Launch",
            id: "103",
            mission_name: "Starlink-12 (v1.0)",
            launch_date_local: "2020-10-06T07:29:00-04:00",
            launch_site: {
              __typename: "LaunchSite",
              site_name_long:
                "Kennedy Space Center Historic Launch Complex 39A",
            },
            links: {
              __typename: "LaunchLinks",
              article_link: null,
              video_link: "https://youtu.be/8O8Z2yPyTnc",
              mission_patch: "https://images2.imgbox.com/d2/3b/bQaWiil0_o.png",
            },
            rocket: { __typename: "LaunchRocket", rocket_name: "Falcon 9" },
          },
          {
            __typename: "Launch",
            id: "102",
            mission_name: "Starlink-11 (v1.0)",
            launch_date_local: "2020-09-03T08:46:00-04:00",
            launch_site: {
              __typename: "LaunchSite",
              site_name_long:
                "Kennedy Space Center Historic Launch Complex 39A",
            },
            links: {
              __typename: "LaunchLinks",
              article_link: null,
              video_link: "https://youtu.be/_j4xR7LMCGY",
              mission_patch: "https://images2.imgbox.com/d2/3b/bQaWiil0_o.png",
            },
            rocket: { __typename: "LaunchRocket", rocket_name: "Falcon 9" },
          },
          {
            __typename: "Launch",
            id: "101",
            mission_name: "SAOCOM 1B, GNOMES-1, Tyvak-0172",
            launch_date_local: "2020-08-30T19:18:00-04:00",
            launch_site: {
              __typename: "LaunchSite",
              site_name_long:
                "Cape Canaveral Air Force Station Space Launch Complex 40",
            },
            links: {
              __typename: "LaunchLinks",
              article_link:
                "https://spaceflightnow.com/2020/08/31/spacex-launches-first-polar-orbit-mission-from-florida-in-decades/",
              video_link: "https://youtu.be/P-gLOsDjE3E",
              mission_patch: "https://images2.imgbox.com/43/33/36WPntCu_o.png",
            },
            rocket: { __typename: "LaunchRocket", rocket_name: "Falcon 9" },
          },
          {
            __typename: "Launch",
            id: "100",
            mission_name: "Starlink-10 (v1.0) & SkySat 19-21",
            launch_date_local: "2020-08-18T10:31:00-04:00",
            launch_site: {
              __typename: "LaunchSite",
              site_name_long:
                "Cape Canaveral Air Force Station Space Launch Complex 40",
            },
            links: {
              __typename: "LaunchLinks",
              article_link:
                "https://spaceflightnow.com/2020/08/18/spacex-adds-more-satellites-to-ever-growing-starlink-network/",
              video_link: "https://youtu.be/jTMJK7wb0rM",
              mission_patch: "https://images2.imgbox.com/d2/3b/bQaWiil0_o.png",
            },
            rocket: { __typename: "LaunchRocket", rocket_name: "Falcon 9" },
          },
        ],
      },
    };
  }
}
