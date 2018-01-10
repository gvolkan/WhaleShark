"use strict";
var Mongoose = require("mongoose");
var Constants = require("./../../config/constants/constants");
var DataAccess = (function () {
    function DataAccess() {
        DataAccess.connect();
    }
    DataAccess.connect = function () {
        if (this.mongooseInstance)
            return this.mongooseInstance;
        this.mongooseConnection = Mongoose.connection;
        this.mongooseConnection.once("open", function () {
            console.log("Connected to mongodb.");
        });
        this.mongooseInstance = Mongoose.connect(Constants.DB_CONNECTION_STRING);
        return this.mongooseInstance;
    };
    return DataAccess;
}());
DataAccess.connect();
module.exports = DataAccess;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9kYXRhQWNjZXNzL0RhdGFBY2Nlc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLG1DQUFzQztBQUN0Qyw4REFBaUU7QUFFakU7SUFJSTtRQUNJLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRU0sa0JBQU8sR0FBZDtRQUNJLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztZQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7UUFFdkQsSUFBSSxDQUFDLGtCQUFrQixHQUFJLFFBQVEsQ0FBQyxVQUFVLENBQUM7UUFDL0MsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1FBQ3pDLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFDekUsTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztJQUNqQyxDQUFDO0lBQ0wsaUJBQUM7QUFBRCxDQW5CQSxBQW1CQyxJQUFBO0FBRUQsVUFBVSxDQUFDLE9BQU8sRUFBRSxDQUFDO0FBQ3JCLGlCQUFTLFVBQVUsQ0FBQyIsImZpbGUiOiJhcHAvZGF0YUFjY2Vzcy9EYXRhQWNjZXNzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1vbmdvb3NlID0gcmVxdWlyZShcIm1vbmdvb3NlXCIpO1xuaW1wb3J0IENvbnN0YW50cyA9IHJlcXVpcmUoXCIuLy4uLy4uL2NvbmZpZy9jb25zdGFudHMvY29uc3RhbnRzXCIpO1xuXG5jbGFzcyBEYXRhQWNjZXNzIHtcbiAgICBzdGF0aWMgbW9uZ29vc2VJbnN0YW5jZTogYW55O1xuICAgIHN0YXRpYyBtb25nb29zZUNvbm5lY3Rpb246IE1vbmdvb3NlLkNvbm5lY3Rpb247XG5cbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIERhdGFBY2Nlc3MuY29ubmVjdCgpO1xuICAgIH1cblxuICAgIHN0YXRpYyBjb25uZWN0ICgpOiBNb25nb29zZS5Db25uZWN0aW9uIHtcbiAgICAgICAgaWYodGhpcy5tb25nb29zZUluc3RhbmNlKSByZXR1cm4gdGhpcy5tb25nb29zZUluc3RhbmNlO1xuXG4gICAgICAgIHRoaXMubW9uZ29vc2VDb25uZWN0aW9uICA9IE1vbmdvb3NlLmNvbm5lY3Rpb247XG4gICAgICAgIHRoaXMubW9uZ29vc2VDb25uZWN0aW9uLm9uY2UoXCJvcGVuXCIsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ29ubmVjdGVkIHRvIG1vbmdvZGIuXCIpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLm1vbmdvb3NlSW5zdGFuY2UgPSBNb25nb29zZS5jb25uZWN0KENvbnN0YW50cy5EQl9DT05ORUNUSU9OX1NUUklORyk7XG4gICAgICAgIHJldHVybiB0aGlzLm1vbmdvb3NlSW5zdGFuY2U7XG4gICAgfVxufVxuXG5EYXRhQWNjZXNzLmNvbm5lY3QoKTtcbmV4cG9ydCA9IERhdGFBY2Nlc3M7Il19