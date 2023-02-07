const app = Vue.createApp({
data() {
    return {
        enterGoalValue: '',
        goals: [],
    }
},
methods: {
    addGoal() {
        this.goals.push(this.enterGoalValue);
    },
    removeGoal(idx) {
      this.goals.splice(idx, 1)
    }
},
});

app.mount('#user-goals');
