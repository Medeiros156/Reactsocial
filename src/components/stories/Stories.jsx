import { useContext, useState, useEffect } from "react";
import "./stories.scss"
import { AuthContext } from "../../context/authContext"
import { createUsersData } from "../../fetchData"
import { Skeletons } from "../skeletons";

const Stories = ({ data }) => {
  const [stories, setStories] = useState([])
  const fetchStories = async () => {
    const storaged = localStorage.getItem("StoriesData")
    if (!storaged) {

      const storiesData = await createUsersData()
      console.log(storiesData);
      localStorage.setItem("StoriesData", JSON.stringify(storiesData))
      setStories(storiesData)
      return storiesData
    } else {
      console.log(JSON.parse(storaged));
      setStories(JSON.parse(storaged))
      return storaged
    }
  }

  useEffect(() => {
    fetchStories()
  }, [])
  const { currentUser } = useContext(AuthContext)


  const changeData = (q) => {
    console.log(q.target.textContent);
    data(q.target.textContent)

  }
  return (
    <div className="stories">
      <div className="story">
        <span>{currentUser.name}</span>
        <img src={currentUser.profilePic} alt="" />
        <button onClick={fetchStories}>+</button>
      </div>



      {stories.length === 0 ? (
        <Skeletons />
      ) : (
        stories.map(story => (
          <div className="story" key={story.id}>
            <img src={story.profile_image_url
            } alt="" />
            <span style={{ cursor: 'pointer' }} onClick={changeData}>{story.username}</span>
          </div>
        )))
      }
    </div>

  )
}

export default Stories