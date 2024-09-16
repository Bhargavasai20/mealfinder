const userinput = "";

const app = async (getdata) => {
  const url = "www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata";
  try {
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.error(error.message);
  }
};
