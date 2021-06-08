const appRouter = (app) => {
	app.get("/", (req, res) => {
		if (!req.query.number) {
			return res.send({"status": "error", "message": "missing item"});
		} 
		if (req.query.number<0) {
			return res.send({"status": "error", "message": "number should be positive"});
		}
		else {
			result = fibonacci(req.query.number);
			return res.send ({"status": "success", "result": result});
			
		}
	});

	
}

const fibonacci = (num)=> {

	if (num == 0) {
		return 0;
	}
	else if (num == 1) {
		return 1;
	}
	else {
		
		return Number(fibonacci (num-2)) + Number(fibonacci (num-1));
	}
}

module.exports = appRouter;