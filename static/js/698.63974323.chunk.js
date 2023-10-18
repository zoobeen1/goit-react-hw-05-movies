"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[698],{4698:function(A,r,e){e.r(r),e.d(r,{default:function(){return j}});var n,t,a,p,s,c=e(4165),i=e(5861),o=e(9439),Q=e(2791),g=e(7689),x=e(4390),l=e(168),h=e(6444),d=h.ZP.img(n||(n=(0,l.Z)(["\n  margin-top: 20px;\n  margin-bottom: 10px;\n  width: 150px;\n  /* display: flex; */\n  /* align-items: center; */\n  /* justify-content: center; */\n  border-radius: 5px;\n  box-shadow: 2px 2px 3px 0px rgba(0, 0, 0, 0.5);\n"]))),u=h.ZP.h4(t||(t=(0,l.Z)(["\n  margin-top: 10px;\n  margin-bottom: 5px;\n"]))),B=h.ZP.ul(a||(a=(0,l.Z)(["\n  margin-top: 20px;\n  padding-left: 10px;\n  width: 150px;\n"]))),Z=h.ZP.li(p||(p=(0,l.Z)(["\n  /* padding-top: 10px; */\n"]))),E=h.ZP.p(s||(s=(0,l.Z)(["\n  padding-top: 5px;\n  /* padding-bottom: 10px; */\n"]))),f=e(8379),m=e(184),I=function(){var A=(0,Q.useState)("idle"),r=(0,o.Z)(A,2),e=r[0],n=r[1],t=(0,Q.useState)(null),a=(0,o.Z)(t,2),p=a[0],s=a[1],l=(0,g.UO)().movieId;return(0,Q.useEffect)((function(){n("pending");var A=function(){var A=(0,i.Z)((0,c.Z)().mark((function A(){var r;return(0,c.Z)().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.prev=0,A.next=3,(0,x.v)("movie/"+l+"/credits");case 3:if(!((r=A.sent).cast.length>0)){A.next=8;break}return s(r.cast),n("resolved"),A.abrupt("return");case 8:n("rejected"),A.next=15;break;case 11:A.prev=11,A.t0=A.catch(0),console.log(A.t0),n("rejected");case 15:case"end":return A.stop()}}),A,null,[[0,11]])})));return function(){return A.apply(this,arguments)}}();A()}),[l]),"pending"===e?(0,m.jsx)(f.a,{}):"rejected"===e?(0,m.jsx)("h2",{children:"Sorry! We have no information about the actors."}):"resolved"===e?(0,m.jsx)(B,{children:p.map((function(A){return(0,m.jsxs)(Z,{children:[(0,m.jsx)(d,{src:A.profile_path?"http://image.tmdb.org/t/p/w200"+A.profile_path:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMNBhUREBEVDQ8NDxMVDQ0SDw8QEAoQGBIYFhYVGRUaHDQgGBolGxMTITEhJS8rMTIuGCszODMtNzQtLisBCgoKDQ0NDg0NDisdFRkrKysrKysrKysrNysrKysrKzc3KysrKysrKysrKysrKysrKysrNysrKysrKysrKysrN//AABEIAOAA4AMBIgACEQEDEQH/xAAbAAEBAAIDAQAAAAAAAAAAAAAAAQQGAwUHAv/EAD8QAAIBAQQECggEBQUAAAAAAAABAgMEBRExEiFBYQYTMlFScoGRobEiM0Jxc7LB0SMkNZI0YqPh8BQlU2OC/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD3EAAAAAAAAAAACSkoxxbSSzbeCQFB1lpvulDUm6j/AJVq739Drq3CCb5MYwW/GTA2QGqxv2stsX74/ZnDbLylVWtaL2uM6mH7ccANvbwz1Hxx8ceVHHm0kaK+8+QPQAafYL3qUGljxkOg3ktz2G0WK2Qr0dKD60XnB8zQGQAAAAAAAAAAAAAAAAAAAAAAGPbrZGhQ0pf+Y7ZsC2yroUcdKMFtnLF4e5bWapbrRxlXlyqJbZJRXZFZHzbLZKtV0pvqx2QW4xwBAQAAQAQEAHNYrXKhaFOOzNbJrmZwEA3qnbqboxlpxiprFaUkmc1KtGa9GSl7mn5HnxYTcZ4xbi1k02mu0D0MHS8HbzlWjKFR6U4JOMtso5a/dq7zugAAAAAAAAAAAAAAAAI3gsXqSzfMafeVsde1OXsrVBc0f7m2Wl/lpdSXkaQAICAACACAgAgIAICACAgGfctZ07fGaWMYvCo+jCWrF7sWjeDz6yWqVGupx2ZxeU47Yvcb5ZqyqWeM45Timt24DlAAAAAAAAAAAAAAABj3i8LvqfDn8rNKN1vBfkKnwp/KzSQABABAQAQEAEBABAQAAQoG8XD+kU+q/NmjG9XGsLop9T6kGeAAAAAAAAAAAAAAADitUcbNJc8JLwNFN+axRoMlg8OZgCAgAgIAICACAgAAhQICADf7ojhddL4UPGKZ5+8j0Wxx0bHBdGnFd0UQcwAAAAAAAAAAAAAAAOC12uFGGM5aOOSzcvcjSrTJStEnHkynJx58G9RmX9Wc7zlzQwjFc2C1+OJ1wAgIAICACAgAAhQICACAgFWevLb7j0C77xp2iP4csXHOLWEo9h56Zd0Wh0rzpyWr00pb4yeD8wPQgAQAAAAAAAAAAAAAGkXp+o1PiS8zEOwv+joXpLmnhJb8Vr8UzrgBAQAQEAAEKBAQAQEAEBAB92d/mI9ePmjjMu56Dq3pTiumm+rH0n4ID0QAEAAAAAAAAAAAAAB1d/Xfx9mxj6yni4rprajT3qfM1muY9EMO1XXSrVNKcE5bWm4t+/DMDRiGdfVmVG8ZRSwi8HBbmvviYAAAhQICACAgAgIAIDJu2z8deEIZqU1pdVa5eCYGKzceC11OjSdWawnUWEYvOnDfveruM+zXLQpVtONNaSeKbcpaL3JvUdgQAAAAAAAAAAAAAAAAAABr/Cyy40Y1V7D0Z9V5Pv8AM1g9Dr0VUouEtcZpp9poNtszo2mUJZxefSWxgcJAQoEBABAQAQEAGycDbHjWlWa1RWjDrPXLww7zXqFJ1KyhFYym8IreeiXfZFQscacfZWt9KWbfeBkgAgAAAAAAAAAAAAAAAAAAAdTf91/6ihpR9bBej/2Lo/Y7YAeatYPDJrNcxDktX8TPry+ZnEUCAgAgIAIynzLII3PgxdHE0+NqL8Sa9CP/ABRf1f8Am078+KPqV1V5H2RQAAAAAAAAAAAAAAAAAAADEtN50aXLqRTXsp6Uu5awMsHQWnhTTj6uEqj53hBffwOrtPCWtPk6NJfyxxfewOrtX8TPry+ZnCWUsZYvW28W+dnyUCAgAAgQPmWRSMD1Cj6ldVeR9mh2XhLXppJuNVLZKOvD3rA7azcL4P1lOUN8Wpr6PzIrZgYFlvmhV5NWOL9mT0G+x5meAAAAAAAAAAMO87wjZqGlLW3qhBZzf23gZhwWi206XLnGO5yWL7MzTLbe1WtL0pOMehH0Yr79pgAbfaOEtKPIUqj3LRj3vX4HV2nhNVlyIxpr98l2vV4HSEKMi02+rV5dSUt2OEe5ajGBABAQAQEAAECBAQAQEAEBADOezW6pRf4dSUNyk8O7IxyAd/ZeFleHLUaq3rRk+1avA7ey8L6MvWRlSfPqnFdq1+BpAA9Pst50a3q6sJPo6SUv2vWZZ5GzOsF8VrPL8Oo9FexJ6UH2PLswIr04HVXDfUbZRy0KkOXTx8Vzo7UAaPflr468ZPH0YPRh7lt7XibnaamhZpS6EJPuWJ52BSAhQICACAgAgIAAIECAgAgIAICACAgAgAAgIAICAZd0252a8IVFlF+mulB8pd3kepJ4rnxy3nkLPULgrcZctKW3i4p72lovyIr7vmWF1VPhy8VgaEb1fr/2ip1fqjRABAQoEBABAQAAQIEBABAQAQEAEBABAABAQAQEAEBAB6NwOljwep7nUX9SR5weicCv0CPXn8zA/9k=",alt:A.name}),(0,m.jsx)(u,{children:A.name}),(0,m.jsxs)(E,{children:["Character: ",A.character]})]},A.id)}))}):(0,m.jsx)("div",{children:"Cast"})},j=I},4390:function(A,r,e){e.d(r,{v:function(){return c}});var n=e(4165),t=e(1413),a=e(5861),p=e(4569),s=e.n(p)().create({baseURL:"https://api.themoviedb.org/3/",params:{language:"en-US"},headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNjI2NzM2NDE0YjQyOThhMjhhNTBjMWI4ODEzZTlhNiIsInN1YiI6IjY1MjU2Y2UzNDQ3ZjljMDBhZDcxNDZjNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8rEsMXUCTlrOZG7wX4q7BjxLIzMsf9BEzSeowZL4e8g"}});function c(A){return i.apply(this,arguments)}function i(){return i=(0,a.Z)((0,n.Z)().mark((function A(r){var e,a,p=arguments;return(0,n.Z)().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return e=p.length>1&&void 0!==p[1]?p[1]:{},A.prev=1,A.next=4,s.get(r,{params:(0,t.Z)({},e)});case 4:return a=A.sent,A.abrupt("return",a.data);case 8:A.prev=8,A.t0=A.catch(1),console.log(A.t0);case 11:case"end":return A.stop()}}),A,null,[[1,8]])}))),i.apply(this,arguments)}}}]);
//# sourceMappingURL=698.63974323.chunk.js.map