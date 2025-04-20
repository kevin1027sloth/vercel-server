
export const testTask = async () => {
    try {
        console.log("test task", new Date().toISOString())
    } catch (error) {
      console.error('testTask:', error);
    }
  };