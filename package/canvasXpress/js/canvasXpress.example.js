CanvasXpress.prototype.initExample = function() {
	this.dataSetGeneric = {
		z: {
			Annt1: ["Desc:1", "Desc:2", "Desc:3", "Desc:4"],
			Annt2: ["Desc:A", "Desc:B", "Desc:A", "Desc:B"],
			Annt3: ["Desc:X", "Desc:X", "Desc:Y", "Desc:Y"]
		},
		x: {
			Factor1: ["Lev:1", "Lev:2", "Lev:3", "Lev:1", "Lev:2", "Lev:3"],
			Factor2: ["Lev:A", "Lev:B", "Lev:A", "Lev:B", "Lev:A", "Lev:B"],
			Factor3: ["Lev:X", "Lev:X", "Lev:Y", "Lev:Y", "Lev:Z", "Lev:Z"]
		},
		y: {
			vars: ["Variable1", "Variable2", "Variable3", "Variable4"],
			smps: ["Sample1", "Sample2", "Sample3", "Sample4", "Sample5", "Sample6"],
			data: [
				[5, 10, 25, 40, 45, 50],
				[95, 80, 75, 70, 55, 40],
				[25, 30, 45, 60, 65, 70],
				[55, 40, 35, 30, 15, 1]
			]
		},
		a: {
			xAxis: ["Variable1", "Variable2"],
			xAxis2: ["Variable3", "Variable4"]
		},
		t: {
			vars: "(((Variable1,Variable3),Variable4),Variable2)",
			smps: "(((((Sample1,Sample2),Sample3),Sample4),Sample5),Sample6)"
		}
	};
	this.dataSetCircular = {
		z: {
			Ring: ["1", "2", "2", "3"]
		},
		x: {
			Segment: ["Seg1", "Seg1", "Seg1", "Seg1", "Seg1", "Seg2", "Seg2", "Seg2", "Seg2", "Seg2", "Seg3", "Seg3", "Seg3", "Seg3", "Seg3"],
			Factor1: ["L1", "L2", "L3", "L4", "L5", "L1", "L2", "L3", "L4", "L5", "L1", "L2", "L3", "L4", "L5"]
		},
		y: {
			vars: ["Variable1", "Variable2", "Variable3", "Variable4"],
			smps: ["Sample1", "Sample2", "Sample3", "Sample4", "Sample5", "Sample6", "Sample7", "Sample8", "Sample9", "Sample10", "Sample11", "Sample12", "Sample13", "Sample14", "Sample15"],
			data: [
				[5, 15, 25, 35, 45, 55, 65, 75, 85, 75, 65, 55, 45, 35, 25],
				[95, 85, 75, 65, 55, 45, 35, 25, 15, 5, 15, 25, 35, 45, 55],
				[25, 35, 45, 55, 65, 75, 85, 95, 85, 75, 65, 55, 45, 35, 25],
				[55, 45, 35, 25, 15, 5, 15, 25, 35, 45, 55, 65, 75, 85, 95]
			]
		},
		c: [
			["rgb(51,125,255)", "Sample1", "Sample10"],
			["rgb(125,255,51)", "Sample8", "Sample11"],
			["rgb(255,51,125)", "Sample12", "Sample4"],
			["rgb(125,255,51)", "Sample9", "Sample2"],
			["rgb(51,125,255)", "Sample3", "Sample6"]
		]
	};
	this.dataSetCircular2 = {
		z: {
			Ring: ["-1", "1", "2", "2", "3"]
		},
		x: {
			Segment: ["Seg1", "Seg1", "Seg1", "Seg1", "Seg1", "Seg2", "Seg2", "Seg2", "Seg2", "Seg2", "Seg3", "Seg3", "Seg3", "Seg3", "Seg3"],
			Factor1: ["L1", "L2", "L3", "L4", "L5", "L1", "L2", "L3", "L4", "L5", "L1", "L2", "L3", "L4", "L5"]
		},
		y: {
			vars: ["Number", "Variable1", "Variable2", "Variable3", "Variable4"],
			smps: ["Sample1", "Sample2", "Sample3", "Sample4", "Sample5", "Sample6", "Sample7", "Sample8", "Sample9", "Sample10", "Sample11", "Sample12", "Sample13", "Sample14", "Sample15"],
			data: [
				[1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5],
				[5, 15, 25, 35, 45, 55, 65, 75, 85, 75, 65, 55, 45, 35, 25],
				[95, 85, 75, 65, 55, 45, 35, 25, 15, 5, 15, 25, 35, 45, 55],
				[25, 35, 45, 55, 65, 75, 85, 95, 85, 75, 65, 55, 45, 35, 25],
				[55, 45, 35, 25, 15, 5, 15, 25, 35, 45, 55, 65, 75, 85, 95]
			]
		},
		c: [
			["rgb(51,125,255)", "Seg1", 1, "Seg2", 5, 1, 1],
			["rgb(125,255,51)", "Seg2", 3, "Seg3", 1, 1, 2],
			["rgb(255,51,125)", "Seg3", 2, "Seg1", 4, 2, 1],
			["rgb(125,255,51)", "Seg2", 4, "Seg1", 2, 1, 1],
			["rgb(51,125,255)", "Seg1", 3, "Seg3", 4, 1, 1]
		]
	};
	this.dataSetBoxplot = {
		x: {
			Factor1: ["Lev1", "Lev1", "Lev1", "Lev1", "Lev1", "Lev1", "Lev2", "Lev2", "Lev2", "Lev2", "Lev2", "Lev2"]
		},
		y: {
			vars: ["Variable1", "Variable2"],
			smps: ["Sample1", "Sample2", "Sample3", "Sample4", "Sample5", "Sample6", "Sample7", "Sample8", "Sample9", "Sample10", "Sample11", "Sample12"],
			data: [
				[5, 8, 10, 6, 8, 20, 25, 27, 30, 27, 6, 29],
				[49, 18, 14, 16, 18, 15, 65, 67, 60, 72, 76, 9]
			]
		}
	};
	this.dataSetMultidimensionalHeatmap = {
		y: {
			vars: ["Variable1", "Variable2", "Variable3", "Variable4", "Variable5"],
			smps: ["Sample1", "Sample2", "Sample3", "Sample4", "Sample5", "Sample6", "Sample7", "Sample8", "Sample9", "Sample10"],
			data: [
				[1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
				[10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
				[1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
				[10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
				[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
			],
			data2: [
				[1, 1, 2, 2, 3, 3, 4, 4, 5, 5],
				[6, 6, 7, 7, 8, 8, 9, 9, 10, 10],
				[10, 10, 9, 9, 8, 8, 7, 7, 6, 6],
				[5, 5, 4, 4, 3, 3, 2, 2, 1, 1],
				[3, 3, 4, 4, 5, 5, 6, 6, 7, 7]
			],
			data3: [
				["A", "A", "B", "B", "C", "C", "D", "D", "E", "E"],
				["E", "E", "D", "D", "C", "C", "B", "B", "A", "A"],
				["A", "A", "B", "B", "C", "C", "D", "D", "E", "E"],
				["E", "E", "D", "D", "C", "C", "B", "B", "A", "A"],
				["A", "A", "B", "B", "C", "C", "D", "D", "E", "E"]
			],
			data4: [
				["A", "A", "B", "B", "A", "A", "B", "B", "A", "A"],
				["B", "B", "A", "A", "B", "B", "A", "A", "B", "B"],
				["A", "A", "B", "B", "A", "A", "B", "B", "A", "A"],
				["B", "B", "A", "A", "B", "B", "A", "A", "B", "B"],
				["A", "A", "B", "B", "A", "A", "B", "B", "A", "A"]
			]
		},
		x: {
			Factor: ["Lev:1", "Lev:2", "Lev:1", "Lev:2", "Lev:1", "Lev:2", "Lev:1", "Lev:2", "Lev:1", "Lev:2"]
		},
		z: {
			Annt: ["Desc:1", "Desc:2", "Desc:1", "Desc:2", "Desc:1", "Desc:2", "Desc:1", "Desc:2", "Desc:1", "Desc:2"]
		}
	};
	this.dataSet3DScatter = {
		y: {
			vars: ["Variable1", "Variable2", "Variable3", "Variable4", "Variable5", "Variable6", "Variable7", "Variable8", "Variable9", "Variable10", "Variable11", "Variable12", "Variable13", "Variable14", "Variable15", "Variable16", "Variable17", "Variable18", "Variable19", "Variable20", "Variable21", "Variable22", "Variable23", "Variable24", "Variable25", "Variable26", "Variable27", "Variable28", "Variable29", "Variable30", "Variable31", "Variable32", "Variable33", "Variable34", "Variable35", "Variable36", "Variable37", "Variable38", "Variable39", "Variable40", "Variable41", "Variable42", "Variable43", "Variable44", "Variable45", "Variable46", "Variable47", "Variable48", "Variable49", "Variable50", "Variable51", "Variable52", "Variable53", "Variable54", "Variable55", "Variable56", "Variable57", "Variable58", "Variable59", "Variable60", "Variable61", "Variable62", "Variable63", "Variable64", "Variable65", "Variable66", "Variable67", "Variable68", "Variable69", "Variable70", "Variable71", "Variable72", "Variable73", "Variable74", "Variable75", "Variable76", "Variable77", "Variable78", "Variable79", "Variable80", "Variable81"],
			smps: ["Sample1", "Sample2", "Sample3"],
			data: [
				[-5, 5, 5],
				[-5, 15, 15],
				[-5, 25, 25],
				[-5, 35, 35],
				[-5, 45, 45],
				[-5, 35, 55],
				[-5, 25, 65],
				[-5, 15, 75],
				[-5, 5, 85],
				[-15, 15, 5],
				[-15, 25, 15],
				[-15, 35, 25],
				[-15, 45, 35],
				[-15, 55, 45],
				[-15, 45, 55],
				[-15, 35, 65],
				[-15, 25, 75],
				[-15, 15, 85],
				[-25, 25, 5],
				[-25, 35, 15],
				[-25, 45, 25],
				[-25, 55, 35],
				[-25, 65, 45],
				[-25, 55, 55],
				[-25, 45, 65],
				[-25, 35, 75],
				[-25, 25, 85],
				[-35, 35, 5],
				[-35, 45, 15],
				[-35, 55, 25],
				[-35, 65, 35],
				[-35, 75, 45],
				[-35, 65, 55],
				[-35, 55, 65],
				[-35, 45, 75],
				[-35, 35, 85],
				[-45, 45, 5],
				[-45, 55, 15],
				[-45, 65, 25],
				[-45, 75, 35],
				[-45, 85, 45],
				[-45, 75, 55],
				[-45, 65, 65],
				[-45, 55, 75],
				[-45, 45, 85],
				[-55, 35, 5],
				[-55, 45, 15],
				[-55, 55, 25],
				[-55, 65, 35],
				[-55, 75, 45],
				[-55, 65, 55],
				[-55, 55, 65],
				[-55, 45, 75],
				[-55, 35, 85],
				[-65, 25, 5],
				[-65, 35, 15],
				[-65, 45, 25],
				[-65, 55, 35],
				[-65, 65, 45],
				[-65, 55, 55],
				[-65, 45, 65],
				[-65, 35, 75],
				[-65, 25, 85],
				[-75, 15, 5],
				[-75, 25, 15],
				[-75, 35, 25],
				[-75, 45, 35],
				[-75, 55, 45],
				[-75, 45, 55],
				[-75, 35, 65],
				[-75, 25, 75],
				[-75, 15, 85],
				[-85, 5, 5],
				[-85, 15, 15],
				[-85, 25, 25],
				[-85, 35, 35],
				[-85, 45, 45],
				[-85, 35, 55],
				[-85, 25, 65],
				[-85, 15, 75],
				[-85, 5, 85]
			]
		}
	};
	this.dataSetFunction = {
		fx: "sin(2y) * cos(3x) / sec(xy)"
	};
	this.dataSetNonLinearFit = {
		y: {
			vars: ["Sample1", "Sample2", "Sample3", "Sample4", "Sample5", "Sample6", "Sample7", "Sample8", "Sample9", "Sample10", "Sample11", "Sample12"],
			smps: ["Concentration", "Variable1"],
			data: [
				[0.0009, 172],
				[0.0018, 177],
				[0.0037, 160],
				[0.0073, 166],
				[0.0146, 211],
				[0.0293, 248],
				[0.0586, 269],
				[0.117, 283],
				[0.234, 298],
				[0.469, 314],
				[0.938, 328],
				[1.88, 316]
			]
		},
		d: {
			nlfit: [{
				param: [164, 313, 0.031, -1.5, 0.0000012, 1.9],
				label: "Custom Fit",
				type: "cst"
			}, {
				param: [164, 313, 0.031, 1.5, 0.0000012, 1.9],
				label: "Regular Fit",
				type: "reg"
			}]
		}
	};
	this.dataSetDecorationLine = {
		y: {
			vars: ["Sample1", "Sample2", "Sample3", "Sample4", "Sample5", "Sample6", "Sample7", "Sample8", "Sample9", "Sample10", "Sample11", "Sample12"],
			smps: ["Concentration", "Variable1"],
			data: [
				[0.0009, 172],
				[0.0018, 177],
				[0.0037, 160],
				[0.0073, 166],
				[0.0146, 211],
				[0.0293, 248],
				[0.0586, 269],
				[0.117, 283],
				[0.234, 298],
				[0.469, 314],
				[0.938, 328],
				[1.88, 316]
			]
		},
		d: {
			line: [{
				x: 0.4,
				y: 200,
				color: "rgb(255,125,51)",
				type: "dashedLine"
			}, {
				x: 0.15,
				color: "rgb(51,255,125)",
				type: "line"
			}]
		}
	};
	this.dataSetDecorationLines = {
		y: {
			vars: ["Concentration"],
			smps: ["Sample1", "Sample2", "Sample3", "Sample4", "Sample5", "Sample6", "Sample7", "Sample8", "Sample9", "Sample10", "Sample11", "Sample12"],
			data: [
				[0.0009, 0.0018, 0.0037, 0.0073, 0.0146, 0.0293, 0.0586, 0.117, 0.234, 0.469, 0.938, 1.88]
			]
		},
		d: {
			lines: [{
				value: 0.25,
				label: "Background",
				color: "rgb(255,125,51)",
				type: "dashedLine"
			}]
		}
	};
	this.dataSetDecorationArea = {
		y: {
			vars: ["Sample1", "Sample2", "Sample3", "Sample4", "Sample5", "Sample6", "Sample7", "Sample8", "Sample9", "Sample10", "Sample11", "Sample12"],
			smps: ["Concentration", "Variable1"],
			data: [
				[0.0009, 172],
				[0.0018, 177],
				[0.0037, 160],
				[0.0073, 166],
				[0.0146, 211],
				[0.0293, 248],
				[0.0586, 269],
				[0.117, 283],
				[0.234, 298],
				[0.469, 314],
				[0.938, 328],
				[1.88, 316]
			]
		},
		d: {
			area: [{
				x: 1.42,
				y: 322,
				label: "Area",
				width: 1.2,
				height: 30,
				color: "rgb(255,125,51,0.5)",
				ouline: "rgb(255,125,51,0.5)",
				pattern: "closed",
				rotate: 0.1,
				type: "oval"
			}]
		}
	};
	this.dataSetKaplanMeyer = {
		y: {
			vars: ["p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8", "p9", "p10", "p11", "p12", "p13", "p14", "p15", "p16", "p17", "p18", "p19", "p20"],
			smps: ["Time", "Censored-1", "Censored-2"],
			data: [
				[1, 0, 1],
				[2, 0, 1],
				[3, 0, 1],
				[3, 0, 1],
				[1, 1, 1],
				[2, 1, 1],
				[2, 1, 2],
				[3, 1, 1],
				[3, 1, 1],
				[4, 0, 0],
				[5, 0, 0],
				[6, 0, 0],
				[6, 0, 0],
				[7, 1, 0],
				[8, 0, 1],
				[9, 0, 0],
				[9, 0],
				[9, 0],
				[10, 1],
				[11, 1]
			]
		}
	};
	this.dataSetDashDot = {
		nodes: [{
			id: "Id1",
			color: "rgb(255,0,0)",
			shape: "sphere",
			size: 1,
			x: 0,
			y: 0
		}, {
			id: "Id2",
			color: "rgb(255,0,0)",
			shape: "sphere",
			size: 1,
			x: 200,
			y: 0
		}, {
			id: "Id3",
			color: "rgb(255,0,0)",
			shape: "sphere",
			size: 1,
			x: 0,
			y: 50
		}, {
			id: "Id4",
			color: "rgb(255,0,0)",
			shape: "sphere",
			size: 1,
			x: 200,
			y: 50
		}, {
			id: "Id5",
			color: "rgb(255,0,0)",
			shape: "sphere",
			size: 1,
			x: 0,
			y: 100
		}, {
			id: "Id6",
			color: "rgb(255,0,0)",
			shape: "sphere",
			size: 1,
			x: 200,
			y: 100
		}],
		edges: [{
			id1: "Id1",
			id2: "Id2",
			color: "rgb(0,255,0)",
			type: "line"
		}, {
			id1: "Id3",
			id2: "Id4",
			color: "rgb(0,255,0)",
			type: "dashedLine"
		}, {
			id1: "Id5",
			id2: "Id6",
			color: "rgb(0,255,0)",
			type: "dottedLine"
		}]
	};
	this.dataSetLines = {
		nodes: [{
			id: "Id1",
			color: "rgb(255,0,0)",
			shape: "sphere",
			size: 1,
			x: 0,
			y: 0
		}, {
			id: "Id2",
			color: "rgb(255,0,0)",
			shape: "sphere",
			size: 1,
			x: 200,
			y: 0
		}, {
			id: "Id3",
			color: "rgb(255,0,0)",
			shape: "sphere",
			size: 1,
			x: 400,
			y: 0
		}, {
			id: "Id4",
			color: "rgb(255,0,0)",
			shape: "sphere",
			size: 1,
			x: 600,
			y: 0
		}, {
			id: "Id5",
			color: "rgb(255,0,0)",
			shape: "sphere",
			size: 1,
			x: 0,
			y: 100
		}, {
			id: "Id6",
			color: "rgb(255,0,0)",
			shape: "sphere",
			size: 1,
			x: 200,
			y: 100
		}, {
			id: "Id7",
			color: "rgb(255,0,0)",
			shape: "sphere",
			size: 1,
			x: 400,
			y: 100
		}, {
			id: "Id8",
			color: "rgb(255,0,0)",
			shape: "sphere",
			size: 1,
			x: 600,
			y: 100
		}, {
			id: "Id9",
			color: "rgb(255,0,0)",
			shape: "sphere",
			size: 1,
			x: 0,
			y: 200
		}, {
			id: "Id10",
			color: "rgb(255,0,0)",
			shape: "sphere",
			size: 1,
			x: 200,
			y: 200
		}, {
			id: "Id11",
			color: "rgb(255,0,0)",
			shape: "sphere",
			size: 1,
			x: 400,
			y: 200
		}, {
			id: "Id12",
			color: "rgb(255,0,0)",
			shape: "sphere",
			size: 1,
			x: 600,
			y: 200
		}, {
			id: "Id13",
			color: "rgb(255,0,0)",
			shape: "sphere",
			size: 1,
			x: 0,
			y: 300
		}, {
			id: "Id14",
			color: "rgb(255,0,0)",
			shape: "sphere",
			size: 1,
			x: 200,
			y: 300
		}, {
			id: "Id15",
			color: "rgb(255,0,0)",
			shape: "sphere",
			size: 1,
			x: 400,
			y: 300
		}, {
			id: "Id16",
			color: "rgb(255,0,0)",
			shape: "sphere",
			size: 1,
			x: 600,
			y: 300
		}, {
			id: "Id17",
			color: "rgb(255,0,0)",
			shape: "sphere",
			size: 1,
			x: 0,
			y: 400
		}, {
			id: "Id18",
			color: "rgb(255,0,0)",
			shape: "sphere",
			size: 1,
			x: 200,
			y: 400
		}, {
			id: "Id19",
			color: "rgb(255,0,0)",
			shape: "sphere",
			size: 1,
			x: 400,
			y: 400
		}, {
			id: "Id20",
			color: "rgb(255,0,0)",
			shape: "sphere",
			size: 1,
			x: 600,
			y: 400
		}, {
			id: "Id21",
			color: "rgb(255,0,0)",
			shape: "sphere",
			size: 1,
			x: 0,
			y: 500
		}, {
			id: "Id22",
			color: "rgb(255,0,0)",
			shape: "sphere",
			size: 1,
			x: 200,
			y: 500
		}, {
			id: "Id23",
			color: "rgb(255,0,0)",
			shape: "sphere",
			size: 1,
			x: 400,
			y: 500
		}, {
			id: "Id24",
			color: "rgb(255,0,0)",
			shape: "sphere",
			size: 1,
			x: 600,
			y: 500
		}, {
			id: "Id25",
			color: "rgb(255,0,0)",
			shape: "sphere",
			size: 1,
			x: 0,
			y: 600
		}, {
			id: "Id26",
			color: "rgb(255,0,0)",
			shape: "sphere",
			size: 1,
			x: 200,
			y: 600
		}, {
			id: "Id27",
			color: "rgb(255,0,0)",
			shape: "sphere",
			size: 1,
			x: 400,
			y: 600
		}, {
			id: "Id28",
			color: "rgb(255,0,0)",
			shape: "sphere",
			size: 1,
			x: 600,
			y: 600
		}, {
			id: "Id29",
			color: "rgb(255,0,0)",
			shape: "sphere",
			size: 1,
			x: 0,
			y: 700
		}, {
			id: "Id30",
			color: "rgb(255,0,0)",
			shape: "sphere",
			size: 1,
			x: 200,
			y: 700
		}, {
			id: "Id31",
			color: "rgb(255,0,0)",
			shape: "sphere",
			size: 1,
			x: 400,
			y: 700
		}, {
			id: "Id32",
			color: "rgb(255,0,0)",
			shape: "sphere",
			size: 1,
			x: 600,
			y: 700
		}, {
			id: "Id33",
			color: "rgb(255,0,0)",
			shape: "sphere",
			size: 1,
			x: 0,
			y: 800
		}, {
			id: "Id34",
			color: "rgb(255,0,0)",
			shape: "sphere",
			size: 1,
			x: 200,
			y: 800
		}, {
			id: "Id35",
			color: "rgb(255,0,0)",
			shape: "sphere",
			size: 1,
			x: 400,
			y: 800
		}, {
			id: "Id36",
			color: "rgb(255,0,0)",
			shape: "sphere",
			size: 1,
			x: 600,
			y: 800
		}, {
			id: "Id37",
			color: "rgb(255,0,0)",
			shape: "sphere",
			size: 1,
			x: 0,
			y: 900
		}, {
			id: "Id39",
			color: "rgb(255,0,0)",
			shape: "sphere",
			size: 1,
			x: 600,
			y: 900
		}, {
			id: "Id40",
			color: "rgb(255,0,0)",
			shape: "sphere",
			size: 1,
			x: 0,
			y: 1000
		}, {
			id: "Id41",
			color: "rgb(255,0,0)",
			shape: "sphere",
			size: 1,
			x: 200,
			y: 1100
		}, {
			id: "Id42",
			color: "rgb(255,0,0)",
			shape: "sphere",
			size: 1,
			x: 200,
			y: 1000
		}, {
			id: "Id43",
			color: "rgb(255,0,0)",
			shape: "sphere",
			size: 1,
			x: 400,
			y: 1100
		}, {
			id: "Id44",
			color: "rgb(255,0,0)",
			shape: "sphere",
			size: 1,
			x: 400,
			y: 1000
		}, {
			id: "Id45",
			color: "rgb(255,0,0)",
			shape: "sphere",
			size: 1,
			x: 600,
			y: 1100
		}, {
			id: "Id46",
			color: "rgb(255,0,0)",
			shape: "sphere",
			size: 1,
			x: 0,
			y: 1200
		}, {
			id: "Id47",
			color: "rgb(255,0,0)",
			shape: "sphere",
			size: 1,
			x: 200,
			y: 1300
		}, {
			id: "Id48",
			color: "rgb(255,0,0)",
			shape: "sphere",
			size: 1,
			x: 200,
			y: 1200
		}, {
			id: "Id49",
			color: "rgb(255,0,0)",
			shape: "sphere",
			size: 1,
			x: 400,
			y: 1300
		}, {
			id: "Id50",
			color: "rgb(255,0,0)",
			shape: "sphere",
			size: 1,
			x: 400,
			y: 1200
		}, {
			id: "Id51",
			color: "rgb(255,0,0)",
			shape: "sphere",
			size: 1,
			x: 600,
			y: 1300
		}, {
			id: "Id52",
			color: "rgb(255,0,0)",
			shape: "sphere",
			size: 1,
			x: 0,
			y: 1400
		}, {
			id: "Id54",
			color: "rgb(255,0,0)",
			shape: "sphere",
			size: 1,
			x: 200,
			y: 1400
		}, {
			id: "Id56",
			color: "rgb(255,0,0)",
			shape: "sphere",
			size: 1,
			x: 400,
			y: 1400
		}, {
			id: "Id57",
			color: "rgb(255,0,0)",
			shape: "sphere",
			size: 1,
			x: 600,
			y: 1400
		}],
		edges: [{
			id1: "Id1",
			id2: "Id2",
			color: "rgb(0,255,0)",
			type: "line"
		}, {
			id1: "Id2",
			id2: "Id3",
			color: "rgb(0,255,0)",
			type: "dashedLine"
		}, {
			id1: "Id3",
			id2: "Id4",
			color: "rgb(0,255,0)",
			type: "dottedLine"
		}, {
			id1: "Id5",
			id2: "Id6",
			color: "rgb(0,255,0)",
			type: "arrowHeadLine"
		}, {
			id1: "Id6",
			id2: "Id7",
			color: "rgb(0,255,0)",
			type: "arrowLine"
		}, {
			id1: "Id7",
			id2: "Id8",
			color: "rgb(0,255,0)",
			type: "arrowTailLine"
		}, {
			id1: "Id9",
			id2: "Id10",
			color: "rgb(0,255,0)",
			type: "arrowHeadDashedLine"
		}, {
			id1: "Id10",
			id2: "Id11",
			color: "rgb(0,255,0)",
			type: "arrowDashedLine"
		}, {
			id1: "Id11",
			id2: "Id12",
			color: "rgb(0,255,0)",
			type: "arrowTailDashedLine"
		}, {
			id1: "Id13",
			id2: "Id14",
			color: "rgb(0,255,0)",
			type: "arrowHeadDottedLine"
		}, {
			id1: "Id14",
			id2: "Id15",
			color: "rgb(0,255,0)",
			type: "arrowDottedLine"
		}, {
			id1: "Id15",
			id2: "Id16",
			color: "rgb(0,255,0)",
			type: "arrowTailDottedLine"
		}, {
			id1: "Id17",
			id2: "Id18",
			color: "rgb(0,255,0)",
			type: "squareHeadLine"
		}, {
			id1: "Id18",
			id2: "Id19",
			color: "rgb(0,255,0)",
			type: "squareLine"
		}, {
			id1: "Id19",
			id2: "Id20",
			color: "rgb(0,255,0)",
			type: "squareTailLine"
		}, {
			id1: "Id21",
			id2: "Id22",
			color: "rgb(0,255,0)",
			type: "squareHeadDashedLine"
		}, {
			id1: "Id22",
			id2: "Id23",
			color: "rgb(0,255,0)",
			type: "squareDashedLine"
		}, {
			id1: "Id23",
			id2: "Id24",
			color: "rgb(0,255,0)",
			type: "squareTailDashedLine"
		}, {
			id1: "Id25",
			id2: "Id26",
			color: "rgb(0,255,0)",
			type: "squareHeadDottedLine"
		}, {
			id1: "Id26",
			id2: "Id27",
			color: "rgb(0,255,0)",
			type: "squareDottedLine"
		}, {
			id1: "Id27",
			id2: "Id28",
			color: "rgb(0,255,0)",
			type: "squareTailDottedLine"
		}, {
			id1: "Id29",
			id2: "Id30",
			color: "rgb(0,255,0)",
			type: "squareHeadArrowTailLine"
		}, {
			id1: "Id30",
			id2: "Id31",
			color: "rgb(0,255,0)",
			type: "squareHeadArrowTailDashedLine"
		}, {
			id1: "Id31",
			id2: "Id32",
			color: "rgb(0,255,0)",
			type: "squareHeadArrowTailDottedLine"
		}, {
			id1: "Id33",
			id2: "Id34",
			color: "rgb(0,255,0)",
			type: "arrowHeadSquareTailLine"
		}, {
			id1: "Id34",
			id2: "Id35",
			color: "rgb(0,255,0)",
			type: "arrowHeadSquareTailDashedLine"
		}, {
			id1: "Id35",
			id2: "Id36",
			color: "rgb(0,255,0)",
			type: "arrowHeadSquareTailDottedLine"
		}, {
			id1: "Id37",
			id2: "Id42",
			color: "rgb(0,255,0)",
			type: "bezierLine"
		}, {
			id1: "Id44",
			id2: "Id39",
			color: "rgb(0,255,0)",
			type: "bezierYLine"
		}, {
			id1: "Id40",
			id2: "Id41",
			color: "rgb(0,255,0)",
			type: "arrowBezierLine"
		}, {
			id1: "Id42",
			id2: "Id43",
			color: "rgb(0,255,0)",
			type: "arrowTailBezierLine"
		}, {
			id1: "Id44",
			id2: "Id45",
			color: "rgb(0,255,0)",
			type: "arrowHeadBezierLine"
		}, {
			id1: "Id46",
			id2: "Id47",
			color: "rgb(0,255,0)",
			type: "squareBezierLine"
		}, {
			id1: "Id48",
			id2: "Id49",
			color: "rgb(0,255,0)",
			type: "squareTailBezierLine"
		}, {
			id1: "Id50",
			id2: "Id51",
			color: "rgb(0,255,0)",
			type: "squareHeadBezierLine"
		}, {
			id1: "Id49",
			id2: "Id57",
			color: "rgb(0,255,0)",
			type: "arrowBezierYLine"
		}, {
			id1: "Id47",
			id2: "Id56",
			color: "rgb(0,255,0)",
			type: "arrowTailBezierYLine"
		}, {
			id1: "Id35",
			id2: "Id42",
			color: "rgb(0,255,0)",
			type: "arrowHeadBezierYLine"
		}, {
			id1: "Id46",
			id2: "Id41",
			color: "rgb(0,255,0)",
			type: "squareBezierYLine"
		}, {
			id1: "Id48",
			id2: "Id43",
			color: "rgb(0,255,0)",
			type: "squareTailBezierYLine"
		}, {
			id1: "Id50",
			id2: "Id45",
			color: "rgb(0,255,0)",
			type: "squareHeadBezierYLine"
		}, {
			id1: "Id9",
			id2: "Id1",
			color: "rgb(0,255,0)",
			type: "curvedLine"
		}, {
			id1: "Id13",
			id2: "Id5",
			color: "rgb(0,255,0)",
			type: "squareCurvedLine"
		}, {
			id1: "Id25",
			id2: "Id17",
			color: "rgb(0,255,0)",
			type: "squareHeadCurvedLine"
		}, {
			id1: "Id29",
			id2: "Id21",
			color: "rgb(0,255,0)",
			type: "squareTailCurvedLine"
		}, {
			id1: "Id40",
			id2: "Id33",
			color: "rgb(0,255,0)",
			type: "arrowCurvedLine"
		}, {
			id1: "Id52",
			id2: "Id46",
			color: "rgb(0,255,0)",
			type: "arrowHeadCurvedLine"
		}, {
			id1: "Id4",
			id2: "Id12",
			color: "rgb(0,255,0)",
			type: "arrowTailCurvedLine"
		}, {
			id1: "Id8",
			id2: "Id16",
			color: "rgb(0,255,0)",
			type: "arrowHeadSquareTailCurvedLine"
		}, {
			id1: "Id20",
			id2: "Id28",
			color: "rgb(0,255,0)",
			type: "squareTailArrowHeadCurvedLine"
		}, {
			id1: "Id24",
			id2: "Id32",
			color: "rgb(0,255,0)",
			type: "squareHeadArrowTailCurvedLine"
		}, {
			id1: "Id39",
			id2: "Id45",
			color: "rgb(0,255,0)",
			type: "arrowTailSquareHeadCurvedLine"
		}]
	};
	this.dataSetShapes = {
		nodes: [{
			id: "Id1",
			color: "rgb(255,0,0)",
			shape: "sphere",
			size: 1,
			x: 0,
			y: 0
		}, {
			id: "Id2",
			color: "rgb(255,0,0)",
			shape: "square",
			size: 1,
			x: 200,
			y: 0
		}, {
			id: "Id3",
			color: "rgb(255,0,0)",
			shape: "triangle",
			size: 1,
			x: 400,
			y: 0
		}, {
			id: "Id4",
			color: "rgb(255,0,0)",
			shape: "star",
			size: 1,
			x: 600,
			y: 0
		}, {
			id: "Id5",
			color: "rgb(255,0,0)",
			shape: "rhombus",
			size: 1,
			x: 0,
			y: 100
		}, {
			id: "Id6",
			color: "rgb(255,0,0)",
			shape: "octagon",
			size: 1,
			x: 200,
			y: 100
		}, {
			id: "Id7",
			color: "rgb(255,0,0)",
			shape: "oval",
			size: 1,
			x: 400,
			y: 100
		}, {
			id: "Id8",
			color: "rgb(255,0,0)",
			shape: "plus",
			size: 1,
			x: 600,
			y: 100
		}, {
			id: "Id9",
			color: "rgb(255,0,0)",
			shape: "minus",
			size: 1,
			x: 0,
			y: 200
		}, {
			id: "Id10",
			color: "rgb(255,0,0)",
			shape: "pacman",
			size: 1,
			x: 200,
			y: 200
		}, {
			id: "Id11",
			color: "rgb(255,0,0)",
			shape: "pacman2",
			size: 1,
			x: 400,
			y: 200
		}, {
			id: "Id12",
			color: "rgb(255,0,0)",
			shape: "mdavid",
			size: 1,
			x: 600,
			y: 200
		}, {
			id: "Id13",
			color: "rgb(255,0,0)",
			shape: "rect2",
			size: 1,
			x: 0,
			y: 300
		}, {
			id: "Id14",
			color: "rgb(255,0,0)",
			shape: "rect3",
			size: 1,
			x: 200,
			y: 300
		}, {
			id: "Id15",
			color: "rgb(255,0,0)",
			shape: "arc",
			size: 1,
			x: 400,
			y: 300
		}, {
			id: "Id16",
			color: "rgb(255,0,0)",
			shape: "rectangle",
			size: 1,
			x: 600,
			y: 300
		}, {
			id: "Id17",
			color: "rgb(255,0,0)",
			shape: "image",
			imagePath: "cx.png",
			size: 1,
			x: 0,
			y: 400
		}, {
			id: "Id18",
			color: "rgb(255,0,0)",
			shape: "pie0",
			size: 1,
			x: 200,
			y: 400
		}, {
			id: "Id19",
			color: "rgb(255,0,0)",
			shape: "pie1",
			size: 1,
			x: 400,
			y: 400
		}, {
			id: "Id20",
			color: "rgb(255,0,0)",
			shape: "pie2",
			size: 1,
			x: 600,
			y: 400
		}, {
			id: "Id21",
			color: "rgb(255,0,0)",
			shape: "pie3",
			size: 1,
			x: 0,
			y: 500
		}, {
			id: "Id22",
			color: "rgb(255,0,0)",
			shape: "pie4",
			size: 1,
			x: 200,
			y: 500
		}, {
			id: "Id23",
			color: "rgb(255,0,0)",
			shape: "pie5",
			size: 1,
			x: 400,
			y: 500
		}, {
			id: "Id24",
			color: "rgb(255,0,0)",
			shape: "pie6",
			size: 1,
			x: 600,
			y: 500
		}, {
			id: "Id25",
			color: "rgb(255,0,0)",
			shape: "pie7",
			size: 1,
			x: 0,
			y: 600
		}, {
			id: "Id26",
			color: "rgb(255,0,0)",
			shape: "pie8",
			size: 1,
			x: 200,
			y: 600
		}, {
			id: "Id27",
			color: "rgb(255,0,0)",
			shape: "pie9",
			size: 1,
			x: 400,
			y: 600
		}, {
			id: "Id28",
			color: "rgb(255,0,0)",
			shape: "circle",
			size: 1,
			x: 600,
			y: 600
		}, {
			id: "Id29",
			color: "rgb(255,0,0)",
			shape: "box",
			size: 1,
			x: 0,
			y: 700
		}, {
			id: "Id30",
			color: "rgb(255,0,0)",
			shape: "rect",
			size: 1,
			x: 200,
			y: 700
		}, {
			id: "Id31",
			color: "rgb(255,0,0)",
			shape: "rect2",
			size: 1,
			x: 400,
			y: 700
		}, {
			id: "Id32",
			color: "rgb(255,0,0)",
			shape: "rect3",
			size: 1,
			x: 600,
			y: 700
		}, {
			id: "Id33",
			color: "rgb(255,0,0)",
			shape: "roundrect",
			size: 1,
			x: 0,
			y: 800
		}, {
			id: "Id34",
			color: "rgb(255,0,0)",
			shape: "triangle2",
			size: 1,
			x: 200,
			y: 800
		}, {
			id: "Id35",
			color: "rgb(255,0,0)",
			shape: "equilateral",
			size: 1,
			x: 400,
			y: 800
		}, {
			id: "Id36",
			color: "rgb(255,0,0)",
			shape: "equilateral2",
			size: 1,
			x: 600,
			y: 800
		}, {
			id: "Id37",
			color: "rgb(255,0,0)",
			shape: "hexagon",
			size: 1,
			x: 0,
			y: 900
		}, {
			id: "Id38",
			color: "rgb(255,0,0)",
			shape: "oval2",
			size: 1,
			x: 200,
			y: 900
		}, {
			id: "Id39",
			color: "rgb(255,0,0)",
			shape: "oval3",
			size: 1,
			x: 400,
			y: 900
		}, {
			id: "Id40",
			color: "rgb(255,0,0)",
			shape: "ellipse",
			size: 1,
			x: 600,
			y: 900
		}, {
			id: "Id41",
			color: "rgb(255,0,0)",
			shape: "ellipse2",
			size: 1,
			x: 0,
			y: 1000
		}, {
			id: "Id42",
			color: "rgb(255,0,0)",
			shape: "ellipse3",
			size: 1,
			x: 200,
			y: 1000
		}],
		edges: []
	};
	this.dataSetNetworkDecorations = {
		nodes: [{
			id: "Gene1",
			exp1: 1,
			exp2: 2,
			exp3: 4,
			exp4: {
				cl1: 2,
				cl2: 4,
				cl3: 3
			},
			exp5: {
				cl1: 12,
				cl2: 1,
				cl3: 5
			},
			color: "rgb(255,0,0)",
			shape: "sphere",
			size: 1,
			x: 155,
			y: 160
		}, {
			id: "Gene2",
			exp1: 2,
			exp2: 4,
			exp3: 1,
			exp4: {
				cl1: 7,
				cl2: 1,
				cl3: 8
			},
			exp5: {
				cl1: 1,
				cl2: 11,
				cl3: 8
			},
			color: "rgb(255,0,0)",
			shape: "sphere",
			size: 1,
			x: 155,
			y: 340
		}, {
			id: "Gene3",
			exp1: 1,
			exp2: 5,
			exp3: 1,
			exp4: {
				cl1: 12,
				cl2: 4,
				cl3: 8
			},
			exp5: {
				cl1: 3,
				cl2: 7,
				cl3: 5
			},
			color: "rgb(255,0,0)",
			shape: "sphere",
			size: 1,
			x: 355,
			y: 160
		}, {
			id: "Gene4",
			exp1: 4,
			exp2: 2,
			exp3: 1,
			exp4: {
				cl1: 1,
				cl2: 14,
				cl3: 7
			},
			exp5: {
				cl1: 2,
				cl2: 1,
				cl3: 15
			},
			color: "rgb(255,0,0)",
			shape: "sphere",
			size: 1,
			x: 355,
			y: 340
		}, {
			id: "Gene5",
			exp1: 1,
			exp2: 3,
			exp3: 2,
			exp4: {
				cl1: 4,
				cl2: 4,
				cl3: 8
			},
			exp5: {
				cl1: 6,
				cl2: 7,
				cl3: 2
			},
			color: "rgb(255,0,0)",
			shape: "sphere",
			size: 1,
			x: 255,
			y: 100
		}, {
			id: "Gene6",
			color: "rgb(255,0,0)",
			shape: "sphere",
			size: 1,
			x: 255,
			y: 400
		}, {
			id: "Gene7",
			exp1: 3,
			exp2: 3,
			exp3: 4,
			exp4: {
				cl1: 2,
				cl2: 14,
				cl3: 1
			},
			exp5: {
				cl1: 9,
				cl2: 3,
				cl3: 5
			},
			color: "rgb(255,0,0)",
			shape: "sphere",
			size: 1,
			x: 50,
			y: 250
		}, {
			id: "Gene8",
			color: "rgb(255,0,0)",
			shape: "sphere",
			size: 1,
			x: 450,
			y: 250
		}],
		edges: [{
			id1: "Gene1",
			id2: "Gene2",
			color: "rgb(51,12,255)",
			width: "3",
			type: "curvedArrowHeadLine"
		}, {
			id1: "Gene4",
			id2: "Gene3",
			color: "rgb(51,12,255)",
			width: "3",
			type: "curvedArrowHeadLine"
		}, {
			id1: "Gene5",
			id2: "Gene6",
			color: "rgb(51,12,255)",
			width: "3",
			type: "arrowHeadLine"
		}, {
			id1: "Gene3",
			id2: "Gene8",
			color: "rgb(51,12,255)",
			width: "3",
			type: "bezierArrowHeadLine"
		}, {
			id1: "Gene7",
			id2: "Gene1",
			color: "rgb(51,12,255)",
			width: "3",
			type: "bezierArrowHeadLine"
		}]
	};
	this.dataSetNetworkRadial = {
		nodes: [{
			id: "Gene1",
			color: "rgb(255,0,0)",
			shape: "square"
		}, {
			id: "Gene2",
			color: "rgb(255,0,0)",
			shape: "square"
		}, {
			id: "Gene3",
			color: "rgb(255,0,0)",
			shape: "square"
		}, {
			id: "Gene4",
			color: "rgb(255,0,0)",
			shape: "square"
		}, {
			id: "Gene5",
			color: "rgb(255,0,0)",
			shape: "square"
		}, {
			id: "Gene6",
			color: "rgb(255,0,0)",
			shape: "square"
		}, {
			id: "Gene7",
			color: "rgb(255,0,0)",
			shape: "square"
		}, {
			id: "Gene8",
			color: "rgb(255,0,0)",
			shape: "square"
		}, {
			id: "SNP1",
			color: "rgb(0,255,0)",
			shape: "sphere"
		}, {
			id: "SNP2",
			color: "rgb(0,255,0)",
			shape: "sphere"
		}, {
			id: "SNP3",
			color: "rgb(0,255,0)",
			shape: "sphere"
		}, {
			id: "SNP4",
			color: "rgb(0,255,0)",
			shape: "sphere"
		}, {
			id: "SNP5",
			color: "rgb(0,255,0)",
			shape: "sphere"
		}, {
			id: "SNP6",
			color: "rgb(0,255,0)",
			shape: "sphere"
		}, {
			id: "SNP7",
			color: "rgb(0,255,0)",
			shape: "sphere"
		}, {
			id: "SNP8",
			color: "rgb(0,255,0)",
			shape: "sphere"
		}, {
			id: "PH1",
			color: "rgb(0,255,255)",
			shape: "star"
		}, {
			id: "PH1a",
			color: "rgb(0,255,255)",
			shape: "star",
			parentNode: "PH1"
		}, {
			id: "PH1b",
			color: "rgb(0,255,255)",
			shape: "star",
			parentNode: "PH1"
		}, {
			id: "PH2",
			color: "rgb(0,255,255)",
			shape: "star"
		}, {
			id: "PH2a",
			color: "rgb(0,255,255)",
			shape: "star",
			parentNode: "PH2"
		}, {
			id: "PH2b",
			color: "rgb(0,255,255)",
			shape: "star",
			parentNode: "PH2"
		}, {
			id: "PH2ba",
			color: "rgb(0,255,255)",
			shape: "star",
			parentNode: "PH2b"
		}, {
			id: "PH3",
			color: "rgb(0,255,255)",
			shape: "star"
		}, {
			id: "PH4",
			color: "rgb(0,255,255)",
			shape: "star"
		}],
		edges: [{
			id1: "Gene1",
			id2: "Gene2",
			color: "rgb(51,12,255)",
			type: "line"
		}, {
			id1: "SNP1",
			id2: "PH1",
			color: "rgb(51,12,152)",
			type: "line"
		}, {
			id1: "Gene2",
			id2: "Gene7",
			color: "rgb(51,12,255)",
			type: "line"
		}, {
			id1: "Gene2",
			id2: "Gene8",
			color: "rgb(51,12,255)",
			type: "line"
		}, {
			id1: "Gene1",
			id2: "Gene3",
			color: "rgb(51,12,255)",
			type: "line"
		}, {
			id1: "SNP4",
			id2: "PH4",
			color: "rgb(51,12,152)",
			type: "line"
		}, {
			id1: "PH1",
			id2: "PH1a",
			color: "rgb(102,12,152)",
			type: "line"
		}, {
			id1: "PH1",
			id2: "PH1b",
			color: "rgb(102,12,152)",
			type: "line"
		}, {
			id1: "Gene4",
			id2: "SNP3",
			color: "rgb(51,12,255)",
			type: "line"
		}, {
			id1: "Gene6",
			id2: "SNP4",
			color: "rgb(51,12,255)",
			type: "line"
		}, {
			id1: "PH2",
			id2: "PH2a",
			color: "rgb(51,12,152)",
			type: "line"
		}, {
			id1: "PH2",
			id2: "PH2b",
			color: "rgb(102,12,152)",
			type: "line"
		}, {
			id1: "Gene6",
			id2: "SNP5",
			color: "rgb(51,12,255)",
			type: "line"
		}, {
			id1: "Gene7",
			id2: "SNP6",
			color: "rgb(51,12,255)",
			type: "line"
		}, {
			id1: "SNP6",
			id2: "SNP7",
			color: "rgb(51,12,255)",
			type: "line"
		}, {
			id1: "Gene1",
			id2: "Gene4",
			color: "rgb(51,12,255)",
			type: "line"
		}, {
			id1: "Gene1",
			id2: "Gene5",
			color: "rgb(51,12,255)",
			type: "line"
		}, {
			id1: "SNP7",
			id2: "Gene6",
			color: "rgb(51,12,255)",
			type: "line"
		}, {
			id1: "SNP6",
			id2: "SNP8",
			color: "rgb(153,12,255)",
			type: "line"
		}, {
			id1: "Gene3",
			id2: "SNP1",
			color: "rgb(51,12,255)",
			type: "line"
		}, {
			id1: "Gene3",
			id2: "SNP2",
			color: "rgb(51,12,255)",
			type: "line"
		}, {
			id1: "SNP2",
			id2: "PH2",
			color: "rgb(153,12,255)",
			type: "line"
		}, {
			id1: "SNP3",
			id2: "PH3",
			color: "rgb(51,12,152)",
			type: "line"
		}, {
			id1: "PH2b",
			id2: "PH2ba",
			color: "rgb(102,12,152)",
			type: "line"
		}]
	};
	this.dataSetNetworkBasic = {
		nodes: [{
			id: "Cell",
			shape: "image",
			eventless: true,
			width: 525,
			height: 400,
			imagePath: "cell.png",
			x: 250,
			y: 250,
			hideLabel: true
		}, {
			id: "Gene1",
			exp1: 1,
			exp2: 2,
			exp3: 4,
			exp4: {
				cl1: 2,
				cl2: 4,
				cl3: 3
			},
			exp5: {
				cl1: 12,
				cl2: 1,
				cl3: 5
			},
			shape: "image",
			width: 40,
			height: 40,
			imagePath: "prot.png",
			x: 155,
			y: 160
		}, {
			id: "Gene2",
			exp1: 2,
			exp2: 4,
			exp3: 1,
			exp4: {
				cl1: 7,
				cl2: 1,
				cl3: 8
			},
			exp5: {
				cl1: 1,
				cl2: 11,
				cl3: 8
			},
			color: "rgb(255,0,0)",
			shape: "sphere",
			size: 1,
			x: 155,
			y: 340
		}, {
			id: "Gene3",
			exp1: 1,
			exp2: 5,
			exp3: 1,
			exp4: {
				cl1: 12,
				cl2: 4,
				cl3: 8
			},
			exp5: {
				cl1: 3,
				cl2: 7,
				cl3: 5
			},
			color: "rgb(255,0,0)",
			shape: "sphere",
			size: 1,
			x: 355,
			y: 160
		}, {
			id: "Gene4",
			label: "Receptor\nGene4",
			exp1: 4,
			exp2: 2,
			exp3: 1,
			exp4: {
				cl1: 1,
				cl2: 14,
				cl3: 7
			},
			exp5: {
				cl1: 2,
				cl2: 1,
				cl3: 15
			},
			color: "rgb(255,0,0)",
			shape: "sphere",
			size: 1,
			x: 355,
			y: 340
		}, {
			id: "Gene5",
			exp1: 1,
			exp2: 3,
			exp3: 2,
			exp4: {
				cl1: 4,
				cl2: 4,
				cl3: 8
			},
			exp5: {
				cl1: 6,
				cl2: 7,
				cl3: 2
			},
			color: "rgb(255,0,0)",
			shape: "sphere",
			width: 20,
			height: 20,
			x: 255,
			y: 100
		}, {
			id: "Met",
			shape: "image",
			width: 40,
			height: 40,
			imagePath: "met.png",
			x: 255,
			y: 400,
			hideLabel: true
		}, {
			id: "Gene7",
			exp1: 3,
			exp2: 3,
			exp3: 4,
			exp4: {
				cl1: 2,
				cl2: 14,
				cl3: 1
			},
			exp5: {
				cl1: 9,
				cl2: 3,
				cl3: 5
			},
			shape: "image",
			width: 40,
			height: 40,
			imagePath: "prot7.png",
			x: 50,
			y: 250
		}, {
			id: "DNA",
			shape: "image",
			width: 40,
			height: 40,
			imagePath: "dna1.png",
			x: 450,
			y: 250,
			hideLabel: true
		}],
		edges: [{
			id1: "Gene1",
			id2: "Gene2",
			color: "rgb(51,12,255)",
			width: "3",
			type: "curvedArrowHeadLine"
		}, {
			id1: "Gene4",
			id2: "Gene3",
			color: "rgb(51,12,255)",
			width: "3",
			type: "curvedArrowHeadLine"
		}, {
			id1: "Gene5",
			id2: "Met",
			color: "rgb(51,12,255)",
			width: "3",
			type: "arrowHeadLine"
		}, {
			id1: "Gene3",
			id2: "DNA",
			color: "rgb(51,12,255)",
			width: "3",
			type: "bezierArrowHeadLine"
		}, {
			id1: "Gene7",
			id2: "Gene1",
			color: "rgb(51,12,255)",
			width: "3",
			type: "bezierArrowHeadLine"
		}],
		legend: {
			nodes: [{
				shape: "sphere",
				color: "rgb(255,0,0)",
				text: "Gene",
				id: "nodesLegendId0"
			}],
			edges: [{
				type: "arrowHeadLine",
				text: "Activate",
				id: "edgesLegendId0"
			}],
			text: [{
				text: "Cool Pathway",
				x: 150,
				y: 460,
				id: "textLegendId0"
			}],
			pos: {
				nodes: {
					x: -5,
					y: -5
				},
				edges: {
					x: 360,
					y: -5
				},
				decorations: {
					x: 20,
					y: 80
				}
			}
		}
	};
	this.dataSetVenn = {
		venn: {
			data: {
				A: 340,
				B: 562,
				C: 620,
				D: 592,
				AB: 639,
				AC: 456,
				AD: 257,
				BC: 915,
				BD: 354,
				CD: 143,
				ABC: 552,
				ABD: 578,
				ACD: 298,
				BCD: 613,
				ABCD: 148
			},
			legend: {
				A: "List 1",
				B: "List 2",
				C: "List 3",
				D: "List 4"
			}
		}
	};
	this.dataSetMarket = {
		market: [{
			symbol: "BMY",
			data: [
				[20100824, 26.26, 26.37, 25.95, 26.02, 11625900, 26.02],
				[20100823, 26.48, 26.76, 26.38, 26.48, 12146600, 26.48],
				[20100820, 26.31, 26.54, 26.08, 26.44, 18140100, 26.44],
				[20100819, 26.2, 26.29, 25.81, 26.06, 8218000, 26.06],
				[20100818, 26.53, 26.57, 26.23, 26.28, 12235800, 26.28],
				[20100817, 26.4, 26.79, 26.26, 26.59, 12325700, 26.59],
				[20100816, 26.24, 26.34, 26.04, 26.28, 10377700, 26.28],
				[20100813, 26.24, 26.46, 26.1, 26.32, 5760100, 26.32],
				[20100812, 26.01, 26.39, 26, 26.33, 7350500, 26.33],
				[20100811, 26.32, 26.5, 26.15, 26.25, 8808100, 26.25],
				[20100810, 26.32, 26.78, 26.3, 26.66, 7009500, 26.66],
				[20100809, 26.37, 26.54, 26.3, 26.51, 6825300, 26.51],
				[20100806, 26.29, 26.45, 26.05, 26.37, 8774900, 26.37],
				[20100805, 25.83, 26.38, 25.8, 26.38, 12264600, 26.38],
				[20100804, 25.7, 26.13, 25.61, 26.03, 10233700, 26.03],
				[20100803, 25.65, 25.85, 25.58, 25.68, 6842900, 25.68],
				[20100802, 25.33, 25.61, 25.29, 25.53, 9770900, 25.53],
				[20100730, 24.98, 25.13, 24.78, 24.92, 11435700, 24.92],
				[20100729, 25.37, 25.5, 24.85, 25.08, 9463800, 25.08],
				[20100728, 25.25, 25.36, 25.02, 25.12, 8072400, 25.12],
				[20100727, 25.09, 25.35, 24.84, 25.32, 14152600, 25.32],
				[20100726, 24.57, 25.03, 24.57, 24.97, 8817400, 24.97],
				[20100723, 24.94, 24.95, 24.26, 24.65, 13043700, 24.65],
				[20100722, 24.96, 25.22, 24.75, 24.93, 10385300, 24.93],
				[20100721, 24.92, 25.11, 24.59, 24.75, 9830000, 24.75],
				[20100720, 24.65, 25.09, 24.46, 25.02, 10655500, 25.02],
				[20100719, 25.27, 25.27, 24.78, 24.84, 11804800, 24.84],
				[20100716, 25.44, 25.47, 25.1, 25.17, 13136300, 25.17]
			]
		}]
	};
	this.dataSetGenomeTranslate = {
		tracks: [{
			subtype: "DNA",
			type: "sequence",
			data: [{
				id: "Sequence",
				fill: "rgb(51,255,255)",
				outline: "rgb(0,0,0)",
				dir: "right",
				offset: 1,
				sequence: "TACGTACGTACGTACGTACG",
				translate: [-3, -2, -1, 1, 2, 3]
			}]
		}]
	};
	this.dataSetGenomeSimple = {
		tracks: [{
			subtype: "DNA",
			type: "sequence",
			data: [{
				id: "Reference Sequence",
				fill: "rgb(51,255,255)",
				outline: "rgb(0,0,0)",
				dir: "right",
				offset: 1,
				sequence: "TACGTACGTACGTACGTACGTACGTACGT",
				index: 0,
				counter: 0,
				measureText: 108
			}, {
				id: "R1-0000-1234",
				fill: "rgb(255,255,51)",
				outline: "rgb(0,0,0)",
				dir: "right",
				offset: 1,
				gaps: [
					[4, 2],
					[8, 1]
				],
				sequence: "TACGCGTAGTACGT",
				index: 1,
				counter: 1,
				measureText: 74
			}, {
				id: "R1-0000-2345",
				fill: "rgb(255,255,102)",
				outline: "rgb(0,0,0)",
				dir: "right",
				offset: 6,
				gaps: [
					[3, 1],
					[10, 1]
				],
				sequence: "ACGACGTACGACG",
				index: 2,
				counter: 2,
				measureText: 74
			}, {
				id: "R1-0000-3456",
				fill: "rgb(255,51,255)",
				outline: "rgb(0,0,0)",
				dir: "left",
				offsetLeft: "23",
				gaps: [
					[7, 2]
				],
				sequence: "GTACGTATAC",
				index: 3,
				counter: 3,
				offset: 12,
				measureText: 74
			}, {
				id: "R1-0000-4567",
				fill: "rgb(255,102,255)",
				outline: "rgb(0,0,0)",
				dir: "right",
				offset: 15,
				gaps: [
					[5, 1]
				],
				sequence: "CGTACTACGTA",
				index: 4,
				counter: 4,
				measureText: 74
			}, {
				id: "R1-0000-5678",
				fill: "rgb(51,255,255)",
				outline: "rgb(0,0,0)",
				dir: "right",
				offset: 18,
				gaps: [
					[7, 1]
				],
				sequence: "ACGTACGACGT",
				index: 5,
				counter: 5,
				measureText: 74
			}]
		}]
	};
	this.dataSetGenomeIntermediate = {
		tracks: [{
			subtype: "DNA",
			highlight: [{
				offset: 8,
				width: 1,
				color: "rgb(120,120,180)"
			}, {
				offset: 22,
				width: 1,
				color: "rgb(180,20,180)"
			}],
			type: "sequence",
			data: [{
				id: "Reference Sequence",
				fill: "rgb(51,255,255)",
				outline: "rgb(0,0,0)",
				dir: "right",
				offset: 1,
				sequence: "TACGTACGTACGTACGTACGTACGTACGT",
				translate: [-3, -2, -1, 1, 2, 3],
				index: 0,
				counter: 0,
				measureText: 108
			}, {
				id: "R1-0000-1234",
				fill: "rgb(255,255,51)",
				outline: "rgb(0,0,0)",
				dir: "right",
				offset: 1,
				gaps: [
					[4, 2],
					[8, 1]
				],
				sequence: "TACGCGTAGTACGT",
				coordinate: 50,
				trace: {
					A: [15, 27, 47, 72, 93, 101, 93, 72, 47, 27, 15, 54, 120, 224, 350, 459, 502, 459, 350, 224, 120, 54, 3, 4, 6, 12, 24, 43, 67, 86, 94, 86, 67, 43, 24, 12, 6, 4, 3, 13, 26, 45, 69, 89, 97, 89, 69, 45, 26, 13, 13, 26, 46, 70, 92, 100, 92, 70, 46, 26, 13, 5, 12, 26, 48, 75, 99, 108, 99, 75, 48, 26, 12, 5, 2, 4, 10, 22, 41, 64, 83, 91, 83, 64, 41, 22, 10, 4, 2, 22, 55, 122, 226, 353, 462, 505, 462, 353, 226, 122, 55, 22, 4, 11, 24, 45, 70, 92, 100, 92, 70, 45, 24, 11, 4, 2, 3, 6, 13, 28, 50, 78, 102, 111, 102, 78, 50, 28, 13, 6, 3, 2, 6, 11, 26, 62, 135, 249, 388, 506, 553, 506, 388, 249, 135, 62, 26, 11, 6, 6, 8, 14, 26, 45, 68, 87, 95, 87, 68, 45, 26, 14, 8, 6, 11, 23, 43, 67, 88, 96, 88, 67, 43, 23, 11, 5, 6, 8, 15, 28, 48, 73, 94, 102, 94, 73, 48, 28, 15, 8, 6, 5],
					C: [10, 16, 26, 39, 50, 54, 50, 39, 26, 16, 10, 7, 14, 26, 40, 51, 56, 51, 40, 26, 14, 7, 4, 8, 20, 50, 109, 203, 317, 414, 453, 414, 317, 203, 109, 50, 20, 8, 4, 9, 16, 26, 39, 51, 55, 51, 39, 26, 16, 9, 56, 123, 229, 357, 467, 511, 467, 357, 229, 123, 56, 2, 6, 12, 22, 35, 45, 49, 45, 35, 22, 12, 6, 2, 1, 3, 6, 13, 25, 39, 50, 55, 50, 39, 25, 13, 6, 3, 1, 5, 8, 15, 26, 39, 50, 55, 50, 39, 26, 15, 8, 5, 2, 5, 11, 21, 32, 42, 46, 42, 32, 21, 11, 5, 2, 2, 2, 3, 6, 12, 22, 33, 43, 47, 43, 33, 22, 12, 6, 3, 2, 2, 5, 5, 6, 9, 16, 25, 37, 47, 51, 47, 37, 25, 16, 9, 6, 5, 5, 10, 24, 56, 121, 223, 347, 453, 495, 453, 347, 223, 121, 56, 24, 10, 6, 13, 24, 37, 48, 52, 48, 37, 24, 13, 6, 5, 5, 6, 9, 15, 25, 36, 46, 50, 46, 36, 25, 15, 9, 6, 5, 5],
					G: [7, 10, 15, 20, 25, 27, 25, 20, 15, 10, 7, 4, 7, 13, 19, 25, 27, 25, 19, 13, 7, 4, 3, 3, 3, 5, 8, 14, 20, 25, 27, 25, 20, 14, 8, 5, 3, 3, 3, 56, 122, 226, 353, 461, 504, 461, 353, 226, 122, 56, 5, 8, 13, 19, 24, 26, 24, 19, 13, 8, 5, 22, 58, 130, 245, 383, 502, 549, 502, 383, 245, 130, 58, 22, 1, 1, 3, 7, 12, 18, 24, 26, 24, 18, 12, 7, 3, 1, 1, 3, 5, 8, 13, 19, 24, 26, 24, 19, 13, 8, 5, 3, 19, 51, 114, 213, 334, 437, 478, 437, 334, 213, 114, 51, 19, 2, 2, 3, 4, 8, 14, 21, 26, 29, 26, 21, 14, 8, 4, 3, 2, 2, 5, 5, 5, 7, 10, 15, 20, 25, 27, 25, 20, 15, 10, 7, 5, 5, 5, 5, 5, 7, 10, 15, 20, 25, 27, 25, 20, 15, 10, 7, 5, 5, 53, 119, 223, 349, 457, 500, 457, 349, 223, 119, 53, 5, 5, 5, 7, 10, 15, 21, 26, 28, 26, 21, 15, 10, 7, 5, 5, 5],
					T: [62, 135, 249, 388, 507, 554, 507, 388, 249, 135, 62, 2, 4, 6, 8, 10, 11, 10, 8, 6, 4, 2, 3, 3, 3, 4, 5, 7, 9, 12, 12, 12, 9, 7, 5, 4, 3, 3, 3, 5, 6, 8, 11, 13, 14, 13, 11, 8, 6, 5, 4, 5, 7, 10, 12, 13, 12, 10, 7, 5, 4, 1, 2, 3, 5, 8, 10, 11, 10, 8, 5, 3, 2, 1, 7, 22, 58, 130, 244, 383, 501, 548, 501, 383, 244, 130, 58, 22, 7, 3, 4, 5, 7, 10, 12, 13, 12, 10, 7, 5, 4, 3, 1, 2, 3, 5, 8, 10, 11, 10, 8, 5, 3, 2, 1, 3, 8, 21, 54, 119, 222, 347, 454, 497, 454, 347, 222, 119, 54, 21, 8, 3, 5, 5, 5, 6, 7, 9, 12, 14, 15, 14, 12, 9, 7, 6, 5, 5, 5, 5, 5, 6, 7, 9, 12, 14, 15, 14, 12, 9, 7, 6, 5, 5, 2, 3, 5, 7, 9, 10, 9, 7, 5, 3, 2, 6, 11, 25, 61, 131, 242, 377, 492, 538, 492, 377, 242, 131, 61, 25, 11, 6],
					peak: [5, 16, 30, 44, 55, 67, 81, 95, 108, 123, 140, 156, 169, 183],
					max: 507
				},
				index: 1,
				counter: 1,
				measureText: 74
			}, {
				id: "R1-0000-2345",
				fill: "rgb(255,255,102)",
				outline: "rgb(0,0,0)",
				dir: "right",
				offset: 6,
				gaps: [
					[3, 1],
					[10, 1]
				],
				sequence: "ACGACGTACGACG",
				coordinate: 80,
				trace: {
					A: [49, 110, 206, 323, 424, 463, 424, 323, 206, 110, 49, 3, 5, 12, 24, 45, 69, 90, 98, 90, 69, 45, 24, 12, 5, 3, 5, 7, 14, 28, 49, 75, 97, 105, 97, 75, 49, 28, 14, 7, 5, 5, 10, 25, 61, 132, 245, 382, 499, 545, 499, 382, 245, 132, 61, 25, 10, 5, 7, 13, 27, 48, 74, 96, 105, 96, 74, 48, 27, 13, 7, 4, 6, 13, 25, 46, 70, 91, 100, 91, 70, 46, 25, 13, 6, 4, 4, 7, 14, 27, 49, 76, 99, 108, 99, 76, 49, 27, 14, 7, 4, 3, 8, 22, 57, 125, 234, 366, 479, 524, 479, 366, 234, 125, 57, 22, 8, 3, 5, 8, 15, 30, 52, 80, 104, 113, 104, 80, 52, 30, 15, 8, 5, 7, 13, 25, 44, 66, 86, 94, 86, 66, 44, 25, 13, 7, 23, 58, 127, 236, 368, 482, 527, 482, 368, 236, 127, 58, 23, 3, 4, 6, 13, 26, 47, 73, 95, 104, 95, 73, 47, 26, 13, 6, 4, 3, 5, 6, 9, 16, 30, 52, 79, 102, 111, 102, 79, 52, 30, 16, 9, 6, 5],
					C: [5, 12, 21, 33, 43, 47, 43, 33, 21, 12, 5, 7, 21, 53, 117, 218, 341, 447, 488, 447, 341, 218, 117, 53, 21, 7, 4, 5, 9, 15, 26, 38, 49, 53, 49, 38, 26, 15, 9, 5, 4, 4, 4, 6, 9, 16, 27, 40, 51, 56, 51, 40, 27, 16, 9, 6, 4, 4, 20, 50, 109, 203, 317, 415, 453, 415, 317, 203, 109, 50, 20, 3, 4, 8, 14, 25, 37, 48, 52, 48, 37, 25, 14, 8, 4, 3, 3, 4, 8, 14, 24, 36, 46, 50, 46, 36, 24, 14, 8, 4, 3, 2, 2, 3, 6, 13, 22, 34, 44, 48, 44, 34, 22, 13, 6, 3, 2, 2, 9, 23, 55, 118, 219, 342, 447, 489, 447, 342, 219, 118, 55, 23, 9, 5, 9, 16, 26, 39, 50, 54, 50, 39, 26, 16, 9, 5, 4, 8, 14, 25, 37, 48, 52, 48, 37, 25, 14, 8, 4, 4, 9, 22, 55, 120, 224, 349, 457, 500, 457, 349, 224, 120, 55, 22, 9, 4, 5, 5, 7, 10, 17, 27, 40, 51, 56, 51, 40, 27, 17, 10, 7, 5, 5],
					G: [3, 6, 11, 17, 22, 24, 22, 17, 11, 6, 3, 2, 2, 4, 7, 12, 17, 22, 24, 22, 17, 12, 7, 4, 2, 2, 10, 24, 59, 129, 239, 373, 487, 533, 487, 373, 239, 129, 59, 24, 10, 4, 4, 4, 6, 9, 14, 20, 25, 27, 25, 20, 14, 9, 6, 4, 4, 4, 3, 5, 8, 13, 19, 24, 26, 24, 19, 13, 8, 5, 3, 9, 23, 59, 129, 239, 374, 489, 534, 489, 374, 239, 129, 59, 23, 9, 3, 3, 5, 8, 13, 18, 23, 25, 23, 18, 13, 8, 5, 3, 3, 2, 2, 2, 4, 7, 12, 17, 22, 24, 22, 17, 12, 7, 4, 2, 2, 2, 4, 4, 6, 9, 14, 19, 24, 26, 24, 19, 14, 9, 6, 4, 4, 22, 52, 113, 209, 325, 425, 465, 425, 325, 209, 113, 52, 22, 3, 5, 8, 13, 19, 24, 26, 24, 19, 13, 8, 5, 3, 3, 3, 3, 5, 8, 14, 20, 26, 28, 26, 20, 14, 8, 5, 3, 3, 3, 6, 11, 26, 62, 133, 246, 383, 501, 547, 501, 383, 246, 133, 62, 26, 11, 6],
					T: [2, 3, 5, 7, 10, 10, 10, 7, 5, 3, 2, 2, 2, 2, 4, 6, 8, 10, 11, 10, 8, 6, 4, 2, 2, 2, 4, 4, 4, 6, 8, 10, 12, 13, 12, 10, 8, 6, 4, 4, 4, 4, 4, 4, 5, 6, 8, 11, 13, 14, 13, 11, 8, 6, 5, 4, 4, 4, 3, 4, 5, 7, 10, 12, 13, 12, 10, 7, 5, 4, 3, 3, 3, 3, 5, 7, 9, 11, 12, 11, 9, 7, 5, 3, 3, 3, 8, 21, 52, 115, 213, 333, 436, 476, 436, 333, 213, 115, 52, 21, 8, 2, 2, 2, 3, 4, 6, 8, 10, 11, 10, 8, 6, 4, 3, 2, 2, 2, 4, 4, 4, 6, 8, 10, 12, 13, 12, 10, 8, 6, 4, 4, 4, 4, 4, 6, 8, 10, 12, 13, 12, 10, 8, 6, 4, 4, 3, 4, 5, 7, 9, 11, 12, 11, 9, 7, 5, 4, 3, 3, 3, 3, 4, 5, 7, 10, 12, 13, 12, 10, 7, 5, 4, 3, 3, 3, 5, 5, 5, 6, 7, 9, 11, 14, 14, 14, 11, 9, 7, 6, 5, 5, 5],
					peak: [5, 18, 33, 49, 64, 78, 93, 109, 125, 139, 152, 167, 184],
					max: 501
				},
				index: 2,
				counter: 2,
				measureText: 74
			}, {
				id: "R1-0000-3456",
				fill: "rgb(255,51,255)",
				outline: "rgb(0,0,0)",
				dir: "left",
				offsetLeft: "23",
				gaps: [
					[7, 2]
				],
				sequence: "GTACGTATAC",
				coordinate: 150,
				trace: {
					A: [4, 4, 5, 6, 8, 11, 13, 14, 13, 11, 8, 6, 5, 4, 4, 2, 2, 3, 4, 6, 8, 10, 11, 10, 8, 6, 4, 3, 2, 2, 8, 20, 50, 110, 205, 320, 418, 457, 418, 320, 205, 110, 50, 20, 8, 5, 5, 5, 7, 9, 11, 13, 14, 13, 11, 9, 7, 5, 5, 5, 8, 23, 59, 130, 243, 380, 498, 545, 498, 380, 243, 130, 59, 23, 8, 1, 1, 1, 2, 3, 5, 8, 10, 11, 10, 8, 5, 3, 2, 1, 1, 1, 4, 5, 7, 10, 12, 13, 12, 10, 7, 5, 4, 5, 5, 6, 7, 9, 12, 14, 15, 14, 12, 9, 7, 6, 5, 5, 10, 23, 57, 124, 230, 358, 468, 512, 468, 358, 230, 124, 57, 23, 10, 1, 1, 3, 5, 7, 9, 10, 9, 7, 5, 3, 1, 1],
					C: [4, 4, 6, 10, 15, 21, 27, 29, 27, 21, 15, 10, 6, 4, 4, 2, 3, 4, 8, 14, 21, 26, 29, 26, 21, 14, 8, 4, 3, 2, 3, 3, 5, 8, 13, 19, 24, 26, 24, 19, 13, 8, 5, 3, 3, 5, 6, 7, 11, 17, 24, 30, 32, 30, 24, 17, 11, 7, 6, 5, 2, 2, 4, 7, 13, 19, 24, 26, 24, 19, 13, 7, 4, 2, 2, 2, 7, 21, 56, 126, 236, 370, 485, 531, 485, 370, 236, 126, 56, 21, 7, 2, 5, 8, 13, 19, 24, 26, 24, 19, 13, 8, 5, 5, 6, 7, 11, 16, 23, 29, 31, 29, 23, 16, 11, 7, 6, 5, 4, 4, 6, 9, 14, 21, 26, 28, 26, 21, 14, 9, 6, 4, 4, 21, 54, 122, 228, 357, 467, 511, 467, 357, 228, 122, 54, 21],
					G: [10, 24, 57, 125, 231, 360, 470, 514, 470, 360, 231, 125, 57, 24, 10, 2, 3, 7, 13, 23, 35, 46, 50, 46, 35, 23, 13, 7, 3, 2, 3, 5, 8, 15, 26, 39, 51, 55, 51, 39, 26, 15, 8, 5, 3, 5, 6, 9, 15, 25, 36, 46, 50, 46, 36, 25, 15, 9, 6, 5, 2, 3, 6, 13, 22, 34, 44, 48, 44, 34, 22, 13, 6, 3, 2, 1, 1, 2, 6, 12, 22, 34, 44, 48, 44, 34, 22, 12, 6, 2, 1, 1, 59, 130, 242, 377, 494, 540, 494, 377, 242, 130, 59, 5, 7, 10, 17, 28, 41, 53, 57, 53, 41, 28, 17, 10, 7, 5, 4, 5, 8, 14, 24, 35, 45, 49, 45, 35, 24, 14, 8, 5, 4, 2, 6, 13, 23, 36, 47, 51, 47, 36, 23, 13, 6, 2],
					T: [5, 8, 15, 28, 50, 76, 99, 108, 99, 76, 50, 28, 15, 8, 5, 7, 19, 50, 110, 206, 322, 421, 460, 421, 322, 206, 110, 50, 19, 7, 4, 7, 13, 27, 49, 75, 98, 107, 98, 75, 49, 27, 13, 7, 4, 11, 24, 58, 124, 228, 355, 464, 507, 464, 355, 228, 124, 58, 24, 11, 3, 6, 13, 26, 48, 75, 98, 107, 98, 75, 48, 26, 13, 6, 3, 1, 2, 4, 11, 24, 44, 69, 90, 99, 90, 69, 44, 24, 11, 4, 2, 1, 13, 25, 45, 69, 89, 97, 89, 69, 45, 25, 13, 11, 24, 58, 124, 228, 356, 465, 508, 465, 356, 228, 124, 58, 24, 11, 5, 8, 15, 29, 51, 79, 102, 111, 102, 79, 51, 29, 15, 8, 5, 4, 10, 22, 41, 64, 84, 92, 84, 64, 41, 22, 10, 4],
					peak: [8, 23, 38, 53, 68, 84, 98, 111, 126, 140],
					reversed: true,
					max: 511
				},
				index: 3,
				counter: 3,
				offset: 12,
				measureText: 74
			}, {
				id: "R1-0000-4567",
				fill: "rgb(255,102,255)",
				outline: "rgb(0,0,0)",
				dir: "right",
				offset: 15,
				gaps: [
					[5, 1]
				],
				sequence: "CGTACTACGTA",
				coordinate: 20,
				trace: {
					A: [9, 16, 29, 51, 78, 100, 110, 100, 78, 51, 29, 16, 9, 15, 28, 50, 77, 100, 109, 100, 77, 50, 28, 15, 4, 5, 7, 13, 25, 44, 67, 86, 94, 86, 67, 44, 25, 13, 7, 5, 4, 4, 8, 21, 53, 115, 214, 335, 438, 479, 438, 335, 214, 115, 53, 21, 8, 4, 2, 3, 5, 11, 23, 42, 65, 85, 93, 85, 65, 42, 23, 11, 5, 3, 2, 8, 15, 29, 52, 80, 103, 113, 103, 80, 52, 29, 15, 8, 4, 9, 23, 57, 126, 233, 365, 477, 522, 477, 365, 233, 126, 57, 23, 9, 4, 2, 4, 10, 23, 42, 66, 87, 95, 87, 66, 42, 23, 10, 4, 2, 3, 5, 12, 25, 46, 71, 93, 101, 93, 71, 46, 25, 12, 5, 3, 4, 5, 8, 14, 28, 50, 76, 99, 108, 99, 76, 50, 28, 14, 8, 5, 4, 19, 49, 108, 202, 316, 413, 452, 413, 316, 202, 108, 49, 19],
					C: [24, 56, 121, 223, 348, 454, 496, 454, 348, 223, 121, 56, 24, 8, 14, 24, 36, 46, 50, 46, 36, 24, 14, 8, 4, 4, 5, 8, 15, 24, 36, 46, 50, 46, 36, 24, 15, 8, 5, 4, 4, 3, 3, 4, 8, 14, 25, 38, 48, 53, 48, 38, 25, 14, 8, 4, 3, 3, 3, 8, 21, 54, 119, 222, 348, 455, 498, 455, 348, 222, 119, 54, 21, 8, 3, 5, 9, 15, 25, 38, 48, 52, 48, 38, 25, 15, 9, 5, 3, 3, 5, 8, 15, 26, 39, 51, 55, 51, 39, 26, 15, 8, 5, 3, 3, 6, 18, 48, 107, 201, 315, 412, 451, 412, 315, 201, 107, 48, 18, 6, 2, 3, 6, 12, 22, 33, 43, 47, 43, 33, 22, 12, 6, 3, 2, 4, 4, 6, 9, 16, 28, 42, 54, 58, 54, 42, 28, 16, 9, 6, 4, 4, 3, 7, 13, 24, 37, 47, 52, 47, 37, 24, 13, 7, 3],
					G: [6, 7, 11, 16, 23, 29, 31, 29, 23, 16, 11, 7, 6, 56, 121, 223, 348, 455, 498, 455, 348, 223, 121, 56, 4, 4, 5, 6, 10, 16, 23, 28, 31, 28, 23, 16, 10, 6, 5, 4, 4, 3, 3, 4, 5, 9, 14, 21, 26, 29, 26, 21, 14, 9, 5, 4, 3, 3, 2, 2, 2, 4, 7, 12, 18, 24, 26, 24, 18, 12, 7, 4, 2, 2, 2, 4, 6, 9, 14, 19, 24, 26, 24, 19, 14, 9, 6, 4, 3, 3, 3, 5, 8, 13, 19, 24, 26, 24, 19, 13, 8, 5, 3, 3, 3, 1, 2, 3, 7, 12, 19, 24, 27, 24, 19, 12, 7, 3, 2, 1, 7, 20, 51, 113, 211, 330, 432, 473, 432, 330, 211, 113, 51, 20, 7, 4, 4, 4, 6, 9, 15, 21, 26, 29, 26, 21, 15, 9, 6, 4, 4, 4, 3, 4, 8, 13, 20, 26, 28, 26, 20, 13, 8, 4, 3],
					T: [5, 6, 7, 9, 11, 13, 14, 13, 11, 9, 7, 6, 5, 4, 6, 8, 10, 12, 13, 12, 10, 8, 6, 4, 5, 10, 24, 60, 130, 241, 376, 492, 538, 492, 376, 241, 130, 60, 24, 10, 5, 3, 3, 3, 3, 5, 7, 9, 11, 12, 11, 9, 7, 5, 3, 3, 3, 3, 2, 2, 2, 2, 4, 6, 8, 10, 11, 10, 8, 6, 4, 2, 2, 2, 2, 22, 53, 114, 211, 328, 429, 469, 429, 328, 211, 114, 53, 22, 3, 3, 3, 3, 5, 7, 9, 11, 12, 11, 9, 7, 5, 3, 3, 3, 3, 1, 1, 2, 3, 5, 7, 9, 10, 9, 7, 5, 3, 2, 1, 1, 2, 2, 2, 4, 6, 8, 10, 11, 10, 8, 6, 4, 2, 2, 2, 5, 10, 24, 58, 127, 235, 366, 479, 524, 479, 366, 235, 127, 58, 24, 10, 5, 2, 3, 4, 6, 8, 10, 11, 10, 8, 6, 4, 3, 2],
					peak: [6, 18, 32, 49, 66, 81, 96, 112, 127, 143, 158],
					max: 492
				},
				index: 4,
				counter: 4,
				measureText: 74
			}, {
				id: "R1-0000-5678",
				fill: "rgb(51,255,255)",
				outline: "rgb(0,0,0)",
				dir: "right",
				offset: 18,
				gaps: [
					[7, 1]
				],
				sequence: "ACGTACGACGT",
				coordinate: 120,
				trace: {
					A: [10, 25, 60, 131, 244, 380, 497, 544, 497, 380, 244, 131, 60, 25, 10, 5, 6, 8, 15, 28, 48, 73, 95, 103, 95, 73, 48, 28, 15, 8, 6, 5, 4, 6, 13, 26, 47, 72, 94, 102, 94, 72, 47, 26, 13, 6, 4, 6, 8, 15, 28, 49, 74, 95, 104, 95, 74, 49, 28, 15, 8, 6, 2, 7, 22, 58, 129, 243, 380, 498, 545, 498, 380, 243, 129, 58, 22, 7, 2, 11, 23, 43, 66, 86, 94, 86, 66, 43, 23, 11, 5, 8, 15, 28, 50, 77, 100, 109, 100, 77, 50, 28, 15, 8, 5, 6, 11, 24, 58, 125, 232, 361, 471, 515, 471, 361, 232, 125, 58, 24, 11, 6, 12, 24, 43, 66, 85, 93, 85, 66, 43, 24, 12, 14, 28, 50, 76, 99, 108, 99, 76, 50, 28, 14, 5, 7, 14, 27, 47, 72, 93, 101, 93, 72, 47, 27, 14, 7, 5],
					C: [4, 5, 8, 15, 24, 36, 46, 50, 46, 36, 24, 15, 8, 5, 4, 6, 11, 26, 62, 135, 249, 388, 506, 554, 506, 388, 249, 135, 62, 26, 11, 6, 3, 5, 8, 15, 25, 38, 49, 54, 49, 38, 25, 15, 8, 5, 3, 5, 6, 9, 15, 25, 36, 46, 50, 46, 36, 25, 15, 9, 6, 5, 1, 1, 3, 6, 13, 24, 37, 49, 53, 49, 37, 24, 13, 6, 3, 1, 1, 53, 117, 219, 342, 447, 489, 447, 342, 219, 117, 53, 4, 5, 8, 15, 25, 36, 47, 51, 47, 36, 25, 15, 8, 5, 4, 5, 5, 7, 10, 17, 28, 41, 53, 57, 53, 41, 28, 17, 10, 7, 5, 5, 57, 124, 231, 360, 471, 516, 471, 360, 231, 124, 57, 9, 16, 27, 40, 51, 55, 51, 40, 27, 16, 9, 4, 6, 9, 16, 27, 41, 52, 57, 52, 41, 27, 16, 9, 6, 4],
					G: [4, 5, 6, 10, 16, 22, 28, 31, 28, 22, 16, 10, 6, 5, 4, 5, 5, 5, 7, 10, 15, 21, 26, 28, 26, 21, 15, 10, 7, 5, 5, 5, 8, 21, 53, 116, 216, 337, 440, 482, 440, 337, 216, 116, 53, 21, 8, 5, 6, 7, 11, 17, 23, 29, 32, 29, 23, 17, 11, 7, 6, 5, 1, 1, 1, 3, 6, 11, 17, 22, 24, 22, 17, 11, 6, 3, 1, 1, 1, 4, 8, 13, 20, 25, 27, 25, 20, 13, 8, 4, 9, 21, 52, 111, 206, 321, 420, 459, 420, 321, 206, 111, 52, 21, 9, 5, 5, 5, 7, 10, 16, 22, 27, 30, 27, 22, 16, 10, 7, 5, 5, 5, 5, 8, 14, 20, 25, 27, 25, 20, 14, 8, 5, 57, 124, 230, 358, 468, 512, 468, 358, 230, 124, 57, 4, 4, 6, 9, 14, 20, 25, 28, 25, 20, 14, 9, 6, 4, 4],
					T: [4, 4, 5, 6, 8, 11, 14, 14, 14, 11, 8, 6, 5, 4, 4, 5, 5, 5, 6, 7, 9, 12, 14, 15, 14, 12, 9, 7, 6, 5, 5, 5, 3, 3, 4, 5, 7, 10, 12, 13, 12, 10, 7, 5, 4, 3, 3, 11, 24, 57, 122, 224, 349, 456, 498, 456, 349, 224, 122, 57, 24, 11, 1, 1, 1, 2, 3, 5, 8, 10, 11, 10, 8, 5, 3, 2, 1, 1, 1, 3, 4, 6, 8, 11, 11, 11, 8, 6, 4, 3, 4, 4, 5, 6, 8, 11, 13, 14, 13, 11, 8, 6, 5, 4, 4, 5, 5, 5, 6, 7, 9, 12, 14, 15, 14, 12, 9, 7, 6, 5, 5, 5, 4, 5, 7, 10, 12, 13, 12, 10, 7, 5, 4, 4, 6, 8, 10, 12, 13, 12, 10, 8, 6, 4, 10, 25, 60, 131, 242, 378, 494, 540, 494, 378, 242, 131, 60, 25, 10],
					peak: [7, 23, 39, 54, 70, 84, 97, 113, 127, 138, 151],
					max: 512
				},
				index: 5,
				counter: 5,
				measureText: 74
			}]
		}]
	};
	this.dataSetGenomeAdvanced = {
		tracks: [{
			name: "Affymetrix Probes",
			type: "box",
			connect: true,
			data: [{
				id: "123456_at",
				fill: "rgb(255,255,51)",
				outline: "rgb(0,0,0)",
				dir: "right",
				data: [
					[10, 20],
					[30, 40],
					[50, 60],
					[70, 80],
					[90, 100],
					[110, 120]
				],
				sequences: ["GTTTTACGTAC", "TACGTACGTAC", "GGTTTACGTAC", "GGTTTACGTAC", "GGTTTACGTAC", "GGTTTACGTAC"],
				index: 0,
				counter: 0,
				start: 10,
				end: 120,
				measureText: 56
			}, {
				id: "234567_at",
				fill: "rgb(255,255,51)",
				outline: "rgb(0,0,0)",
				dir: "left",
				data: [
					[50, 60],
					[70, 80],
					[90, 100],
					[110, 120],
					[130, 140],
					[150, 160]
				],
				index: 1,
				counter: 1,
				start: 50,
				end: 160,
				measureText: 56
			}, {
				id: "345678_at",
				fill: "rgb(255,255,51)",
				outline: "rgb(0,0,0)",
				dir: "right",
				data: [
					[100, 110],
					[120, 130],
					[140, 150],
					[160, 170],
					[180, 190]
				],
				index: 2,
				counter: 2,
				start: 100,
				end: 190,
				measureText: 56
			}],
			startY: 50,
			endY: 82,
			displayedFeatures: 3,
			totalFeatures: 3
		}, {
			name: "Sanger Sequencing (Multiple sequeneces)",
			highlight: [{
				offset: 80,
				width: 1,
				color: "rgb(120,120,180)"
			}, {
				offset: 185,
				width: 1,
				color: "rgb(180,20,180)"
			}],
			subtype: "DNA",
			type: "sequence",
			data: [{
				id: "Reference Sequence",
				fill: "rgb(51,255,255)",
				outline: "rgb(0,0,0)",
				dir: "right",
				offset: 1,
				sequence: "AAAACCCGGGTTTTACGTACGTACGTACGTACGTACGTACGTAAACCCGGGTTTACGTACGTAAACCCGGGTTTACGTACGTAAACCCGGGTTTACGTACGTAAACCCGGGTTTACGTACGTAAACCCGGGTTTACGTACGTAAACCCGGGTTTACGTACGTAAACCCGGGTTTACGTACGTAAACCCGGGTTTAAACC",
				translate: [-3, -2, -1, 1, 2, 3],
				index: 0,
				counter: 3,
				measureText: 108
			}, {
				id: "R1-0000-1234",
				fill: "rgb(255,255,51)",
				outline: "rgb(0,0,0)",
				dir: "right",
				offset: 1,
				gaps: [
					[18, 1],
					[22, 1]
				],
				sequence: "AAAACCCGGGTTTTACGTCGTAGTACGTACGTACGTACGTAAACCCGGGTTTACGTACGTAAACCCGGGTTTACGTACGTAA",
				coordinate: 50,
				trace: {
					A: [57, 127, 237, 371, 486, 531, 486, 371, 237, 127, 57, 54, 117, 217, 339, 442, 484, 442, 339, 217, 117, 54, 10, 24, 60, 130, 240, 375, 490, 535, 490, 375, 240, 130, 60, 24, 10, 56, 121, 222, 346, 452, 494, 452, 346, 222, 121, 56, 7, 14, 27, 48, 74, 95, 104, 95, 74, 48, 27, 14, 7, 6, 8, 14, 27, 46, 69, 90, 98, 90, 69, 46, 27, 14, 8, 6, 4, 5, 7, 14, 27, 47, 72, 93, 101, 93, 72, 47, 27, 14, 7, 5, 4, 5, 11, 23, 42, 65, 85, 92, 85, 65, 42, 23, 11, 5, 7, 14, 27, 48, 74, 95, 104, 95, 74, 48, 27, 14, 7, 1, 2, 4, 10, 22, 42, 65, 85, 93, 85, 65, 42, 22, 10, 4, 2, 1, 5, 12, 24, 44, 68, 88, 97, 88, 68, 44, 24, 12, 5, 4, 5, 7, 14, 27, 47, 72, 94, 102, 94, 72, 47, 27, 14, 7, 5, 4, 2, 4, 10, 22, 41, 64, 83, 91, 83, 64, 41, 22, 10, 4, 2, 12, 24, 43, 67, 87, 95, 87, 67, 43, 24, 12, 21, 52, 113, 210, 328, 429, 469, 429, 328, 210, 113, 52, 21, 4, 6, 13, 26, 47, 72, 93, 102, 93, 72, 47, 26, 13, 6, 4, 4, 6, 13, 26, 46, 71, 92, 100, 92, 71, 46, 26, 13, 6, 4, 6, 8, 14, 27, 46, 69, 89, 97, 89, 69, 46, 27, 14, 8, 6, 4, 5, 8, 14, 28, 49, 76, 98, 107, 98, 76, 49, 28, 14, 8, 5, 4, 7, 13, 25, 45, 68, 88, 96, 88, 68, 45, 25, 13, 7, 5, 11, 24, 43, 67, 88, 96, 88, 67, 43, 24, 11, 5, 22, 54, 118, 219, 342, 447, 489, 447, 342, 219, 118, 54, 22, 5, 12, 25, 46, 71, 93, 102, 93, 71, 46, 25, 12, 5, 5, 12, 24, 44, 68, 89, 97, 89, 68, 44, 24, 12, 5, 20, 54, 121, 226, 355, 465, 508, 465, 355, 226, 121, 54, 20, 3, 4, 6, 13, 25, 45, 70, 91, 99, 91, 70, 45, 25, 13, 6, 4, 3, 6, 8, 15, 27, 47, 71, 91, 99, 91, 71, 47, 27, 15, 8, 6, 1, 2, 4, 11, 24, 44, 69, 90, 98, 90, 69, 44, 24, 11, 4, 2, 1, 6, 11, 25, 60, 128, 237, 369, 482, 527, 482, 369, 237, 128, 60, 25, 11, 6, 2, 5, 12, 25, 47, 74, 97, 106, 97, 74, 47, 25, 12, 5, 2, 5, 8, 15, 29, 51, 78, 101, 110, 101, 78, 51, 29, 15, 8, 5, 5, 12, 26, 48, 75, 98, 107, 98, 75, 48, 26, 12, 5, 6, 18, 48, 107, 201, 315, 412, 451, 412, 315, 201, 107, 48, 18, 6, 9, 16, 31, 53, 81, 105, 114, 105, 81, 53, 31, 16, 9, 6, 8, 15, 28, 48, 73, 94, 103, 94, 73, 48, 28, 15, 8, 6, 11, 23, 42, 65, 85, 92, 85, 65, 42, 23, 11, 19, 51, 113, 212, 332, 434, 475, 434, 332, 212, 113, 51, 19, 8, 15, 28, 49, 74, 95, 104, 95, 74, 49, 28, 15, 8, 12, 26, 49, 76, 99, 109, 99, 76, 49, 26, 12, 12, 24, 43, 67, 86, 94, 86, 67, 43, 24, 12, 22, 54, 118, 218, 341, 445, 487, 445, 341, 218, 118, 54, 22, 21, 52, 112, 208, 324, 423, 462, 423, 324, 208, 112, 52, 21, 10, 23, 54, 115, 212, 330, 430, 471, 430, 330, 212, 115, 54, 23, 10, 2, 3, 5, 12, 25, 45, 69, 91, 99, 91, 69, 45, 25, 12, 5, 3, 2, 2, 3, 5, 12, 24, 44, 68, 88, 97, 88, 68, 44, 24, 12, 5, 3, 2, 8, 15, 28, 50, 77, 100, 109, 100, 77, 50, 28, 15, 8, 12, 26, 48, 74, 96, 105, 96, 74, 48, 26, 12, 13, 27, 48, 74, 96, 105, 96, 74, 48, 27, 13, 13, 25, 45, 70, 91, 99, 91, 70, 45, 25, 13, 7, 14, 28, 49, 75, 97, 105, 97, 75, 49, 28, 14, 7, 2, 5, 12, 26, 48, 74, 97, 106, 97, 74, 48, 26, 12, 5, 2, 16, 30, 53, 80, 103, 113, 103, 80, 53, 30, 16, 25, 61, 133, 246, 384, 501, 548, 501, 384, 246, 133, 61, 25, 6, 13, 25, 45, 69, 90, 98, 90, 69, 45, 25, 13, 6, 5, 6, 9, 15, 29, 50, 77, 99, 108, 99, 77, 50, 29, 15, 9, 6, 5, 10, 23, 42, 65, 86, 94, 86, 65, 42, 23, 10, 9, 23, 55, 120, 223, 348, 454, 497, 454, 348, 223, 120, 55, 23, 9, 2, 4, 11, 23, 43, 67, 88, 96, 88, 67, 43, 23, 11, 4, 2, 2, 3, 6, 12, 26, 48, 74, 96, 105, 96, 74, 48, 26, 12, 6, 3, 2, 15, 28, 49, 74, 96, 104, 96, 74, 49, 28, 15, 22, 55, 120, 223, 348, 455, 498, 455, 348, 223, 120, 55, 22, 22, 53, 115, 213, 332, 434, 474, 434, 332, 213, 115, 53, 22, 7, 20, 53, 118, 221, 346, 454, 496, 454, 346, 221, 118, 53, 20, 7, 2, 3, 5, 11, 24, 44, 67, 88, 96, 88, 67, 44, 24, 11, 5, 3, 2, 15, 28, 50, 75, 97, 106, 97, 75, 50, 28, 15, 1, 2, 5, 12, 25, 47, 74, 96, 105, 96, 74, 47, 25, 12, 5, 2, 1, 6, 8, 15, 28, 49, 74, 96, 104, 96, 74, 49, 28, 15, 8, 6, 5, 12, 26, 47, 72, 94, 103, 94, 72, 47, 26, 12, 5, 8, 15, 27, 47, 71, 92, 100, 92, 71, 47, 27, 15, 8, 3, 5, 11, 23, 42, 65, 84, 92, 84, 65, 42, 23, 11, 5, 3, 5, 12, 25, 45, 70, 91, 100, 91, 70, 45, 25, 12, 5, 1, 2, 4, 10, 22, 41, 64, 84, 92, 84, 64, 41, 22, 10, 4, 2, 1, 7, 20, 51, 113, 212, 331, 433, 474, 433, 331, 212, 113, 51, 20, 7, 2, 3, 5, 12, 25, 46, 72, 94, 102, 94, 72, 46, 25, 12, 5, 3, 2, 2, 4, 11, 25, 46, 72, 94, 102, 94, 72, 46, 25, 11, 4, 2, 2, 3, 6, 12, 26, 48, 74, 97, 106, 97, 74, 48, 26, 12, 6, 3, 2, 10, 25, 61, 133, 247, 386, 504, 551, 504, 386, 247, 133, 61, 25, 10, 15, 27, 47, 71, 92, 100, 92, 71, 47, 27, 15, 5, 8, 15, 28, 50, 76, 99, 108, 99, 76, 50, 28, 15, 8, 5, 2, 3, 6, 13, 26, 48, 75, 98, 107, 98, 75, 48, 26, 13, 6, 3, 2, 8, 22, 57, 127, 238, 372, 487, 532, 487, 372, 238, 127, 57, 22, 8, 60, 129, 237, 370, 483, 528, 483, 370, 237, 129, 60],
					C: [6, 13, 23, 34, 45, 49, 45, 34, 23, 13, 6, 9, 16, 28, 41, 53, 58, 53, 41, 28, 16, 9, 4, 5, 9, 15, 26, 39, 49, 54, 49, 39, 26, 15, 9, 5, 4, 10, 17, 28, 41, 52, 57, 52, 41, 28, 17, 10, 21, 51, 111, 206, 321, 419, 459, 419, 321, 206, 111, 51, 21, 11, 26, 62, 134, 248, 387, 505, 552, 505, 387, 248, 134, 62, 26, 11, 5, 10, 24, 58, 126, 233, 364, 475, 520, 475, 364, 233, 126, 58, 24, 10, 5, 3, 7, 13, 23, 35, 46, 50, 46, 35, 23, 13, 7, 3, 6, 9, 16, 27, 41, 52, 57, 52, 41, 27, 16, 9, 6, 1, 1, 3, 6, 13, 24, 38, 49, 54, 49, 38, 24, 13, 6, 3, 1, 1, 3, 6, 13, 22, 34, 45, 49, 45, 34, 22, 13, 6, 3, 4, 4, 5, 8, 14, 24, 36, 46, 50, 46, 36, 24, 14, 8, 5, 4, 4, 1, 2, 6, 12, 23, 36, 47, 51, 47, 36, 23, 12, 6, 2, 1, 7, 13, 23, 34, 44, 48, 44, 34, 23, 13, 7, 5, 8, 15, 27, 41, 52, 57, 52, 41, 27, 15, 8, 5, 8, 21, 52, 113, 211, 329, 431, 471, 431, 329, 211, 113, 52, 21, 8, 3, 4, 8, 14, 24, 37, 47, 51, 47, 37, 24, 14, 8, 4, 3, 5, 6, 10, 16, 27, 39, 50, 54, 50, 39, 27, 16, 10, 6, 5, 5, 9, 22, 52, 114, 210, 328, 428, 468, 428, 328, 210, 114, 52, 22, 9, 5, 6, 9, 16, 27, 41, 53, 57, 53, 41, 27, 16, 9, 6, 3, 7, 13, 24, 36, 47, 51, 47, 36, 24, 13, 7, 3, 4, 8, 15, 25, 38, 49, 54, 49, 38, 25, 15, 8, 4, 4, 7, 14, 25, 38, 49, 54, 49, 38, 25, 14, 7, 4, 3, 7, 14, 24, 37, 48, 52, 48, 37, 24, 14, 7, 3, 2, 6, 13, 23, 36, 47, 51, 47, 36, 23, 13, 6, 2, 4, 8, 21, 52, 114, 212, 331, 433, 474, 433, 331, 212, 114, 52, 21, 8, 4, 5, 6, 10, 16, 27, 39, 50, 54, 50, 39, 27, 16, 10, 6, 5, 1, 1, 3, 6, 13, 24, 38, 49, 54, 49, 38, 24, 13, 6, 3, 1, 1, 5, 5, 7, 10, 17, 29, 43, 54, 59, 54, 43, 29, 17, 10, 7, 5, 5, 6, 18, 49, 109, 203, 319, 417, 457, 417, 319, 203, 109, 49, 18, 6, 4, 6, 9, 16, 27, 41, 52, 57, 52, 41, 27, 16, 9, 6, 4, 2, 5, 12, 21, 33, 43, 47, 43, 33, 21, 12, 5, 2, 1, 2, 6, 12, 22, 34, 45, 49, 45, 34, 22, 12, 6, 2, 1, 25, 61, 131, 242, 376, 492, 538, 492, 376, 242, 131, 61, 25, 5, 6, 9, 15, 25, 36, 46, 50, 46, 36, 25, 15, 9, 6, 5, 7, 14, 26, 39, 51, 56, 51, 39, 26, 14, 7, 3, 6, 13, 24, 38, 50, 54, 50, 38, 24, 13, 6, 3, 24, 56, 121, 224, 348, 454, 497, 454, 348, 224, 121, 56, 24, 6, 12, 22, 35, 45, 49, 45, 35, 22, 12, 6, 8, 14, 24, 36, 47, 51, 47, 36, 24, 14, 8, 5, 9, 15, 25, 38, 48, 53, 48, 38, 25, 15, 9, 5, 5, 9, 15, 25, 37, 47, 51, 47, 37, 25, 15, 9, 5, 5, 7, 10, 17, 29, 42, 54, 59, 54, 42, 29, 17, 10, 7, 5, 3, 7, 20, 52, 116, 217, 339, 443, 485, 443, 339, 217, 116, 52, 20, 7, 3, 3, 8, 22, 55, 123, 229, 358, 469, 513, 469, 358, 229, 123, 55, 22, 8, 3, 22, 52, 114, 210, 328, 428, 468, 428, 328, 210, 114, 52, 22, 7, 14, 25, 38, 49, 54, 49, 38, 25, 14, 7, 7, 13, 23, 35, 45, 49, 45, 35, 23, 13, 7, 8, 14, 24, 36, 47, 51, 47, 36, 24, 14, 8, 6, 9, 16, 27, 41, 52, 57, 52, 41, 27, 16, 9, 6, 1, 2, 6, 12, 22, 34, 45, 49, 45, 34, 22, 12, 6, 2, 1, 10, 16, 26, 39, 49, 54, 49, 39, 26, 16, 10, 5, 8, 14, 24, 36, 46, 49, 46, 36, 24, 14, 8, 5, 22, 54, 119, 222, 346, 453, 495, 453, 346, 222, 119, 54, 22, 5, 5, 6, 10, 16, 26, 38, 49, 53, 49, 38, 26, 16, 10, 6, 5, 5, 6, 13, 24, 37, 48, 53, 48, 37, 24, 13, 6, 4, 5, 9, 15, 26, 38, 49, 53, 49, 38, 26, 15, 9, 5, 4, 7, 20, 53, 119, 223, 349, 457, 500, 457, 349, 223, 119, 53, 20, 7, 2, 2, 4, 7, 14, 25, 38, 50, 54, 50, 38, 25, 14, 7, 4, 2, 2, 10, 16, 27, 39, 50, 55, 50, 39, 27, 16, 10, 5, 8, 15, 27, 41, 52, 57, 52, 41, 27, 15, 8, 5, 6, 9, 16, 27, 40, 51, 56, 51, 40, 27, 16, 9, 6, 1, 2, 6, 12, 22, 35, 45, 49, 45, 35, 22, 12, 6, 2, 1, 3, 8, 22, 56, 124, 232, 362, 474, 519, 474, 362, 232, 124, 56, 22, 8, 3, 56, 120, 221, 345, 450, 492, 450, 345, 221, 120, 56, 2, 7, 21, 55, 122, 229, 358, 469, 513, 469, 358, 229, 122, 55, 21, 7, 2, 5, 7, 10, 17, 27, 40, 51, 56, 51, 40, 27, 17, 10, 7, 5, 3, 7, 13, 23, 35, 45, 50, 45, 35, 23, 13, 7, 3, 6, 9, 15, 25, 36, 46, 50, 46, 36, 25, 15, 9, 6, 2, 3, 7, 13, 24, 37, 48, 52, 48, 37, 24, 13, 7, 3, 2, 4, 7, 14, 25, 39, 50, 55, 50, 39, 25, 14, 7, 4, 1, 1, 2, 6, 12, 22, 34, 44, 49, 44, 34, 22, 12, 6, 2, 1, 1, 2, 3, 7, 13, 23, 35, 46, 50, 46, 35, 23, 13, 7, 3, 2, 3, 8, 23, 58, 129, 240, 376, 492, 539, 492, 376, 240, 129, 58, 23, 8, 3, 1, 2, 6, 13, 23, 36, 47, 51, 47, 36, 23, 13, 6, 2, 1, 2, 2, 3, 6, 12, 22, 34, 44, 48, 44, 34, 22, 12, 6, 3, 2, 2, 4, 5, 8, 14, 24, 36, 46, 50, 46, 36, 24, 14, 8, 5, 4, 57, 122, 225, 350, 457, 500, 457, 350, 225, 122, 57, 4, 6, 9, 16, 27, 41, 52, 57, 52, 41, 27, 16, 9, 6, 4, 2, 2, 3, 6, 13, 22, 34, 45, 49, 45, 34, 22, 13, 6, 3, 2, 2, 2, 3, 7, 13, 24, 36, 47, 51, 47, 36, 24, 13, 7, 3, 2, 10, 16, 26, 38, 48, 52, 48, 38, 26, 16, 10],
					G: [4, 8, 14, 20, 26, 29, 26, 20, 14, 8, 4, 6, 9, 14, 20, 26, 28, 26, 20, 14, 9, 6, 4, 5, 6, 10, 15, 22, 27, 29, 27, 22, 15, 10, 6, 5, 4, 7, 10, 15, 20, 25, 27, 25, 20, 15, 10, 7, 4, 6, 9, 14, 20, 25, 27, 25, 20, 14, 9, 6, 4, 5, 5, 7, 10, 16, 22, 27, 30, 27, 22, 16, 10, 7, 5, 5, 4, 4, 5, 6, 10, 15, 22, 28, 30, 28, 22, 15, 10, 6, 5, 4, 4, 22, 57, 127, 237, 370, 485, 530, 485, 370, 237, 127, 57, 22, 24, 60, 130, 242, 377, 493, 539, 493, 377, 242, 130, 60, 24, 2, 7, 21, 55, 123, 230, 361, 472, 517, 472, 361, 230, 123, 55, 21, 7, 2, 2, 4, 7, 12, 18, 23, 25, 23, 18, 12, 7, 4, 2, 4, 4, 4, 6, 9, 14, 20, 25, 27, 25, 20, 14, 9, 6, 4, 4, 4, 1, 2, 3, 7, 12, 19, 25, 27, 25, 19, 12, 7, 3, 2, 1, 5, 8, 13, 19, 24, 26, 24, 19, 13, 8, 5, 3, 5, 8, 13, 19, 24, 26, 24, 19, 13, 8, 5, 3, 3, 3, 5, 8, 14, 20, 25, 28, 25, 20, 14, 8, 5, 3, 3, 9, 22, 55, 120, 224, 349, 457, 499, 457, 349, 224, 120, 55, 22, 9, 5, 6, 7, 11, 17, 24, 30, 32, 30, 24, 17, 11, 7, 6, 5, 4, 4, 4, 6, 9, 14, 20, 25, 27, 25, 20, 14, 9, 6, 4, 4, 4, 22, 54, 116, 215, 335, 438, 479, 438, 335, 215, 116, 54, 22, 2, 4, 7, 12, 18, 23, 25, 23, 18, 12, 7, 4, 2, 3, 5, 8, 14, 20, 25, 27, 25, 20, 14, 8, 5, 3, 22, 57, 127, 237, 371, 485, 530, 485, 371, 237, 127, 57, 22, 3, 4, 8, 13, 20, 26, 28, 26, 20, 13, 8, 4, 3, 2, 3, 7, 12, 18, 24, 26, 24, 18, 12, 7, 3, 2, 3, 3, 3, 5, 8, 13, 20, 25, 27, 25, 20, 13, 8, 5, 3, 3, 3, 11, 25, 59, 127, 234, 364, 476, 520, 476, 364, 234, 127, 59, 25, 11, 1, 1, 1, 3, 6, 11, 17, 22, 24, 22, 17, 11, 6, 3, 1, 1, 1, 5, 5, 5, 7, 11, 16, 22, 28, 30, 28, 22, 16, 11, 7, 5, 5, 5, 1, 1, 3, 6, 11, 17, 22, 24, 22, 17, 11, 6, 3, 1, 1, 10, 23, 56, 121, 223, 348, 455, 498, 455, 348, 223, 121, 56, 23, 10, 1, 3, 6, 12, 18, 23, 25, 23, 18, 12, 6, 3, 1, 1, 1, 3, 6, 11, 16, 21, 23, 21, 16, 11, 6, 3, 1, 1, 5, 7, 10, 15, 21, 26, 28, 26, 21, 15, 10, 7, 5, 11, 25, 61, 131, 243, 378, 494, 540, 494, 378, 243, 131, 61, 25, 11, 4, 8, 14, 20, 26, 29, 26, 20, 14, 8, 4, 1, 3, 6, 11, 16, 21, 23, 21, 16, 11, 6, 3, 1, 5, 7, 10, 15, 20, 25, 27, 25, 20, 15, 10, 7, 5, 50, 112, 211, 330, 432, 473, 432, 330, 211, 112, 50, 5, 8, 13, 20, 25, 27, 25, 20, 13, 8, 5, 5, 6, 10, 16, 22, 28, 31, 28, 22, 16, 10, 6, 5, 4, 6, 9, 14, 19, 24, 26, 24, 19, 14, 9, 6, 4, 5, 5, 7, 11, 16, 22, 28, 30, 28, 22, 16, 11, 7, 5, 5, 2, 2, 2, 4, 7, 12, 17, 22, 24, 22, 17, 12, 7, 4, 2, 2, 2, 2, 2, 3, 4, 8, 13, 20, 25, 27, 25, 20, 13, 8, 4, 3, 2, 2, 5, 6, 10, 15, 22, 28, 30, 28, 22, 15, 10, 6, 5, 59, 130, 243, 381, 498, 545, 498, 381, 243, 130, 59, 54, 118, 218, 341, 446, 488, 446, 341, 218, 118, 54, 57, 126, 234, 365, 477, 522, 477, 365, 234, 126, 57, 4, 6, 9, 14, 21, 26, 28, 26, 21, 14, 9, 6, 4, 1, 1, 3, 6, 11, 17, 22, 24, 22, 17, 11, 6, 3, 1, 1, 7, 10, 15, 21, 26, 28, 26, 21, 15, 10, 7, 4, 6, 10, 15, 21, 27, 29, 27, 21, 15, 10, 6, 4, 4, 5, 9, 14, 21, 27, 29, 27, 21, 14, 9, 5, 4, 6, 10, 24, 56, 121, 223, 347, 453, 495, 453, 347, 223, 121, 56, 24, 10, 6, 3, 6, 12, 18, 23, 25, 23, 18, 12, 6, 3, 4, 4, 6, 9, 14, 20, 25, 27, 25, 20, 14, 9, 6, 4, 4, 1, 2, 3, 7, 12, 18, 24, 26, 24, 18, 12, 7, 3, 2, 1, 3, 8, 23, 59, 131, 244, 382, 500, 547, 500, 382, 244, 131, 59, 23, 8, 3, 7, 11, 16, 22, 28, 30, 28, 22, 16, 11, 7, 3, 5, 8, 13, 19, 24, 27, 24, 19, 13, 8, 5, 3, 5, 6, 10, 15, 21, 27, 29, 27, 21, 15, 10, 6, 5, 1, 2, 3, 7, 13, 20, 25, 28, 25, 20, 13, 7, 3, 2, 1, 2, 2, 2, 4, 7, 12, 18, 23, 25, 23, 18, 12, 7, 4, 2, 2, 2, 7, 10, 16, 22, 27, 30, 27, 22, 16, 10, 7, 1, 1, 1, 3, 6, 11, 17, 22, 24, 22, 17, 11, 6, 3, 1, 1, 1, 11, 24, 57, 122, 225, 350, 457, 500, 457, 350, 225, 122, 57, 24, 11, 23, 58, 129, 241, 377, 494, 540, 494, 377, 241, 129, 58, 23, 26, 62, 133, 246, 384, 501, 548, 501, 384, 246, 133, 62, 26, 2, 2, 4, 7, 12, 18, 23, 25, 23, 18, 12, 7, 4, 2, 2, 2, 4, 7, 12, 18, 23, 25, 23, 18, 12, 7, 4, 2, 1, 1, 1, 3, 6, 11, 17, 22, 24, 22, 17, 11, 6, 3, 1, 1, 1, 2, 2, 4, 7, 12, 18, 23, 25, 23, 18, 12, 7, 4, 2, 2, 2, 2, 2, 4, 8, 13, 19, 25, 27, 25, 19, 13, 8, 4, 2, 2, 2, 7, 20, 54, 120, 224, 351, 460, 503, 460, 351, 224, 120, 54, 20, 7, 2, 2, 3, 4, 8, 13, 20, 26, 28, 26, 20, 13, 8, 4, 3, 2, 2, 4, 5, 6, 10, 16, 22, 28, 31, 28, 22, 16, 10, 6, 5, 4, 7, 10, 16, 22, 27, 29, 27, 22, 16, 10, 7, 10, 23, 57, 124, 230, 359, 469, 513, 469, 359, 230, 124, 57, 23, 10, 2, 2, 3, 4, 8, 14, 21, 27, 29, 27, 21, 14, 8, 4, 3, 2, 2, 2, 2, 4, 7, 12, 19, 24, 26, 24, 19, 12, 7, 4, 2, 2, 7, 11, 17, 24, 29, 32, 29, 24, 17, 11, 7],
					T: [3, 4, 6, 8, 10, 11, 10, 8, 6, 4, 3, 5, 6, 8, 11, 13, 14, 13, 11, 8, 6, 5, 4, 4, 5, 6, 8, 11, 13, 14, 13, 11, 8, 6, 5, 4, 4, 5, 7, 9, 11, 13, 14, 13, 11, 9, 7, 5, 4, 5, 6, 8, 11, 13, 14, 13, 11, 8, 6, 5, 4, 5, 5, 6, 7, 9, 12, 14, 15, 14, 12, 9, 7, 6, 5, 5, 4, 4, 4, 5, 6, 8, 10, 13, 14, 13, 10, 8, 6, 5, 4, 4, 4, 2, 3, 4, 6, 8, 11, 11, 11, 8, 6, 4, 3, 2, 4, 5, 6, 8, 10, 12, 13, 12, 10, 8, 6, 5, 4, 1, 1, 1, 2, 3, 5, 7, 9, 10, 9, 7, 5, 3, 2, 1, 1, 1, 23, 59, 131, 244, 382, 501, 548, 501, 382, 244, 131, 59, 23, 5, 10, 24, 59, 129, 239, 373, 488, 534, 488, 373, 239, 129, 59, 24, 10, 5, 6, 19, 50, 112, 210, 329, 431, 472, 431, 329, 210, 112, 50, 19, 6, 54, 118, 219, 342, 447, 488, 447, 342, 219, 118, 54, 3, 4, 5, 7, 9, 11, 12, 11, 9, 7, 5, 4, 3, 3, 3, 4, 5, 7, 10, 12, 13, 12, 10, 7, 5, 4, 3, 3, 3, 3, 4, 5, 7, 10, 12, 13, 12, 10, 7, 5, 4, 3, 3, 10, 23, 54, 115, 213, 331, 433, 473, 433, 331, 213, 115, 54, 23, 10, 4, 4, 4, 5, 6, 8, 11, 13, 14, 13, 11, 8, 6, 5, 4, 4, 4, 4, 4, 6, 8, 10, 12, 13, 12, 10, 8, 6, 4, 4, 21, 54, 119, 223, 348, 456, 498, 456, 348, 223, 119, 54, 21, 3, 3, 5, 7, 9, 11, 12, 11, 9, 7, 5, 3, 3, 2, 3, 4, 6, 8, 11, 12, 11, 8, 6, 4, 3, 2, 23, 58, 129, 242, 378, 495, 541, 495, 378, 242, 129, 58, 23, 1, 2, 3, 5, 8, 10, 11, 10, 8, 5, 3, 2, 1, 3, 3, 3, 4, 5, 7, 10, 12, 13, 12, 10, 7, 5, 4, 3, 3, 3, 5, 5, 5, 7, 9, 11, 13, 14, 13, 11, 9, 7, 5, 5, 5, 2, 6, 19, 51, 113, 212, 332, 435, 476, 435, 332, 212, 113, 51, 19, 6, 2, 5, 5, 5, 6, 7, 9, 12, 14, 15, 14, 12, 9, 7, 6, 5, 5, 5, 1, 1, 2, 3, 5, 8, 10, 11, 10, 8, 5, 3, 2, 1, 1, 4, 4, 4, 6, 8, 10, 12, 13, 12, 10, 8, 6, 4, 4, 4, 20, 53, 119, 222, 349, 456, 499, 456, 349, 222, 119, 53, 20, 1, 1, 1, 3, 5, 7, 9, 10, 9, 7, 5, 3, 1, 1, 1, 5, 6, 7, 9, 12, 15, 15, 15, 12, 9, 7, 6, 5, 5, 5, 6, 7, 9, 12, 14, 15, 14, 12, 9, 7, 6, 5, 5, 57, 126, 235, 367, 481, 526, 481, 367, 235, 126, 57, 1, 2, 3, 5, 8, 10, 11, 10, 8, 5, 3, 2, 1, 5, 6, 7, 9, 12, 14, 15, 14, 12, 9, 7, 6, 5, 2, 3, 5, 7, 9, 10, 9, 7, 5, 3, 2, 58, 128, 237, 371, 485, 530, 485, 371, 237, 128, 58, 4, 4, 6, 8, 10, 12, 13, 12, 10, 8, 6, 4, 4, 4, 4, 6, 8, 10, 12, 13, 12, 10, 8, 6, 4, 4, 5, 5, 6, 7, 9, 11, 14, 15, 14, 11, 9, 7, 6, 5, 5, 2, 2, 2, 2, 4, 6, 8, 10, 11, 10, 8, 6, 4, 2, 2, 2, 2, 2, 2, 2, 3, 4, 6, 9, 11, 12, 11, 9, 6, 4, 3, 2, 2, 2, 4, 5, 6, 8, 11, 13, 14, 13, 11, 8, 6, 5, 4, 2, 4, 6, 8, 10, 11, 10, 8, 6, 4, 2, 4, 5, 7, 9, 12, 12, 12, 9, 7, 5, 4, 4, 5, 7, 10, 12, 13, 12, 10, 7, 5, 4, 23, 55, 119, 221, 345, 451, 493, 451, 345, 221, 119, 55, 23, 7, 22, 58, 130, 243, 381, 499, 546, 499, 381, 243, 130, 58, 22, 7, 61, 133, 245, 381, 498, 545, 498, 381, 245, 133, 61, 4, 4, 6, 8, 10, 12, 13, 12, 10, 8, 6, 4, 4, 3, 4, 5, 7, 10, 12, 13, 12, 10, 7, 5, 4, 3, 5, 5, 5, 6, 7, 9, 12, 14, 15, 14, 12, 9, 7, 6, 5, 5, 5, 50, 111, 207, 325, 426, 466, 426, 325, 207, 111, 50, 4, 4, 5, 6, 8, 11, 13, 14, 13, 11, 8, 6, 5, 4, 4, 1, 1, 2, 3, 5, 8, 10, 11, 10, 8, 5, 3, 2, 1, 1, 2, 2, 2, 2, 4, 6, 8, 10, 11, 10, 8, 6, 4, 2, 2, 2, 2, 56, 119, 220, 342, 447, 489, 447, 342, 220, 119, 56, 3, 4, 5, 7, 9, 11, 12, 11, 9, 7, 5, 4, 3, 4, 5, 6, 8, 11, 14, 14, 14, 11, 8, 6, 5, 4, 1, 1, 2, 3, 5, 8, 10, 11, 10, 8, 5, 3, 2, 1, 1, 2, 2, 2, 3, 4, 6, 8, 10, 11, 10, 8, 6, 4, 3, 2, 2, 2, 5, 7, 9, 11, 13, 14, 13, 11, 9, 7, 5, 1, 1, 1, 2, 3, 5, 8, 10, 11, 10, 8, 5, 3, 2, 1, 1, 1, 5, 5, 6, 7, 9, 12, 14, 15, 14, 12, 9, 7, 6, 5, 5, 2, 2, 4, 6, 8, 10, 11, 10, 8, 6, 4, 2, 2, 5, 6, 7, 9, 12, 14, 15, 14, 12, 9, 7, 6, 5, 7, 21, 53, 117, 219, 343, 449, 491, 449, 343, 219, 117, 53, 21, 7, 21, 55, 122, 228, 356, 466, 510, 466, 356, 228, 122, 55, 21, 2, 6, 18, 48, 108, 202, 316, 414, 452, 414, 316, 202, 108, 48, 18, 6, 2, 2, 2, 2, 4, 6, 8, 10, 11, 10, 8, 6, 4, 2, 2, 2, 2, 2, 2, 3, 4, 6, 8, 10, 11, 10, 8, 6, 4, 3, 2, 2, 2, 1, 1, 1, 3, 5, 7, 9, 10, 9, 7, 5, 3, 1, 1, 1, 3, 8, 23, 59, 132, 246, 385, 504, 551, 504, 385, 246, 132, 59, 23, 8, 3, 4, 4, 5, 6, 8, 10, 12, 13, 12, 10, 8, 6, 5, 4, 4, 6, 7, 9, 11, 13, 14, 13, 11, 9, 7, 6, 4, 4, 5, 6, 8, 10, 12, 13, 12, 10, 8, 6, 5, 4, 4, 3, 7, 21, 53, 117, 219, 343, 448, 491, 448, 343, 219, 117, 53, 21, 7, 3, 2, 2, 2, 4, 6, 8, 10, 11, 10, 8, 6, 4, 2, 2, 2, 5, 7, 9, 11, 13, 14, 13, 11, 9, 7, 5],
					peak: [5, 16, 29, 42, 54, 68, 84, 99, 112, 127, 142, 157, 173, 186, 198, 212, 227, 242, 258, 273, 286, 299, 312, 325, 338, 353, 369, 385, 402, 418, 433, 447, 461, 475, 489, 502, 514, 527, 539, 550, 562, 575, 589, 605, 622, 637, 649, 660, 671, 683, 697, 710, 722, 735, 750, 764, 777, 792, 808, 822, 834, 847, 861, 877, 891, 905, 921, 935, 948, 962, 976, 991, 1007, 1023, 1039, 1055, 1071, 1084, 1097, 1113, 1129, 1142]
				},
				index: 1,
				counter: 4,
				measureText: 74
			}, {
				id: "R1-0000-2345",
				fill: "rgb(255,255,102)",
				outline: "rgb(0,0,0)",
				dir: "right",
				offset: 31,
				gaps: [
					[9, 1],
					[58, 1]
				],
				sequence: "ACGTACGTAGTAAACCCGGGTTTACGTACGTAAACCCGGGTTTACGTACGTAAACCCGGTTTACGTACGTAAACCCGGGTTTACGTAC",
				coordinate: 10,
				trace: {
					A: [4, 9, 22, 56, 123, 228, 357, 467, 510, 467, 357, 228, 123, 56, 22, 9, 4, 5, 12, 25, 45, 70, 91, 100, 91, 70, 45, 25, 12, 5, 11, 24, 43, 67, 87, 95, 87, 67, 43, 24, 11, 3, 4, 7, 14, 27, 49, 76, 99, 108, 99, 76, 49, 27, 14, 7, 4, 3, 57, 125, 233, 364, 475, 520, 475, 364, 233, 125, 57, 16, 30, 51, 78, 101, 110, 101, 78, 51, 30, 16, 4, 6, 12, 25, 44, 68, 88, 96, 88, 68, 44, 25, 12, 6, 4, 6, 12, 26, 47, 73, 95, 104, 95, 73, 47, 26, 12, 6, 55, 117, 216, 337, 440, 481, 440, 337, 216, 117, 55, 5, 11, 24, 43, 67, 87, 95, 87, 67, 43, 24, 11, 5, 4, 5, 8, 14, 28, 50, 76, 98, 107, 98, 76, 50, 28, 14, 8, 5, 4, 22, 57, 127, 236, 370, 484, 529, 484, 370, 236, 127, 57, 22, 50, 111, 208, 325, 426, 466, 426, 325, 208, 111, 50, 24, 57, 122, 225, 350, 457, 500, 457, 350, 225, 122, 57, 24, 2, 4, 11, 24, 45, 70, 92, 100, 92, 70, 45, 24, 11, 4, 2, 1, 2, 5, 11, 25, 47, 73, 96, 105, 96, 73, 47, 25, 11, 5, 2, 1, 14, 28, 50, 76, 99, 108, 99, 76, 50, 28, 14, 8, 14, 28, 50, 76, 99, 108, 99, 76, 50, 28, 14, 8, 3, 5, 11, 23, 42, 65, 84, 92, 84, 65, 42, 23, 11, 5, 3, 7, 14, 28, 50, 76, 99, 108, 99, 76, 50, 28, 14, 7, 4, 6, 13, 26, 46, 70, 91, 100, 91, 70, 46, 26, 13, 6, 4, 2, 4, 10, 22, 41, 64, 84, 92, 84, 64, 41, 22, 10, 4, 2, 11, 23, 43, 67, 88, 96, 88, 67, 43, 23, 11, 24, 60, 131, 244, 381, 498, 544, 498, 381, 244, 131, 60, 24, 1, 2, 5, 12, 26, 49, 77, 101, 110, 101, 77, 49, 26, 12, 5, 2, 1, 6, 12, 26, 47, 73, 95, 104, 95, 73, 47, 26, 12, 6, 2, 4, 10, 22, 41, 64, 84, 92, 84, 64, 41, 22, 10, 4, 2, 53, 117, 217, 339, 443, 485, 443, 339, 217, 117, 53, 1, 2, 5, 12, 26, 49, 76, 100, 109, 100, 76, 49, 26, 12, 5, 2, 1, 5, 12, 26, 49, 76, 100, 109, 100, 76, 49, 26, 12, 5, 5, 8, 15, 28, 50, 77, 99, 108, 99, 77, 50, 28, 15, 8, 5, 51, 112, 207, 324, 423, 463, 423, 324, 207, 112, 51, 18, 48, 108, 203, 318, 416, 455, 416, 318, 203, 108, 48, 18, 10, 23, 53, 114, 209, 326, 426, 465, 426, 326, 209, 114, 53, 23, 10, 2, 4, 10, 22, 41, 64, 83, 91, 83, 64, 41, 22, 10, 4, 2, 1, 2, 5, 12, 27, 49, 77, 101, 110, 101, 77, 49, 27, 12, 5, 2, 1, 12, 24, 43, 67, 87, 95, 87, 67, 43, 24, 12, 8, 15, 29, 51, 78, 101, 110, 101, 78, 51, 29, 15, 8, 1, 2, 4, 11, 24, 44, 69, 90, 98, 90, 69, 44, 24, 11, 4, 2, 1, 15, 28, 50, 77, 100, 109, 100, 77, 50, 28, 15, 1, 2, 4, 11, 24, 44, 69, 90, 99, 90, 69, 44, 24, 11, 4, 2, 1, 4, 7, 14, 28, 51, 79, 102, 112, 102, 79, 51, 28, 14, 7, 4, 4, 7, 13, 27, 48, 74, 97, 105, 97, 74, 48, 27, 13, 7, 4, 4, 9, 24, 60, 131, 244, 381, 498, 545, 498, 381, 244, 131, 60, 24, 9, 4, 15, 27, 47, 71, 92, 100, 92, 71, 47, 27, 15, 15, 28, 50, 76, 99, 108, 99, 76, 50, 28, 15, 6, 9, 16, 30, 52, 79, 102, 111, 102, 79, 52, 30, 16, 9, 6, 6, 18, 48, 108, 202, 317, 415, 454, 415, 317, 202, 108, 48, 18, 6, 2, 3, 6, 13, 27, 49, 76, 99, 108, 99, 76, 49, 27, 13, 6, 3, 2, 9, 16, 30, 53, 81, 104, 114, 104, 81, 53, 30, 16, 9, 3, 6, 12, 26, 47, 73, 95, 104, 95, 73, 47, 26, 12, 6, 3, 2, 6, 19, 51, 115, 215, 336, 440, 482, 440, 336, 215, 115, 51, 19, 6, 2, 11, 25, 59, 128, 236, 368, 481, 526, 481, 368, 236, 128, 59, 25, 11, 8, 22, 55, 123, 229, 358, 469, 513, 469, 358, 229, 123, 55, 22, 8, 6, 13, 27, 49, 76, 98, 108, 98, 76, 49, 27, 13, 6, 5, 12, 26, 49, 76, 99, 108, 99, 76, 49, 26, 12, 5, 3, 6, 13, 27, 50, 77, 100, 110, 100, 77, 50, 27, 13, 6, 3, 12, 25, 45, 70, 91, 99, 91, 70, 45, 25, 12, 3, 5, 12, 25, 45, 69, 90, 99, 90, 69, 45, 25, 12, 5, 3, 12, 24, 44, 69, 90, 98, 90, 69, 44, 24, 12, 3, 4, 7, 13, 27, 49, 75, 97, 106, 97, 75, 49, 27, 13, 7, 4, 3, 5, 8, 14, 28, 50, 76, 99, 108, 99, 76, 50, 28, 14, 8, 5, 55, 122, 227, 356, 466, 509, 466, 356, 227, 122, 55, 3, 6, 12, 26, 48, 74, 97, 106, 97, 74, 48, 26, 12, 6, 3, 13, 27, 48, 73, 95, 104, 95, 73, 48, 27, 13, 3, 4, 7, 14, 27, 49, 76, 99, 108, 99, 76, 49, 27, 14, 7, 4, 3, 6, 11, 26, 61, 132, 243, 379, 495, 541, 495, 379, 243, 132, 61, 26, 11, 6, 14, 27, 46, 69, 89, 97, 89, 69, 46, 27, 14, 4, 11, 24, 45, 71, 93, 101, 93, 71, 45, 24, 11, 4, 2, 3, 6, 13, 27, 50, 77, 100, 110, 100, 77, 50, 27, 13, 6, 3, 2, 2, 7, 20, 53, 118, 222, 348, 456, 499, 456, 348, 222, 118, 53, 20, 7, 2, 3, 8, 22, 58, 128, 240, 375, 491, 537, 491, 375, 240, 128, 58, 22, 8, 3, 6, 18, 49, 109, 204, 320, 420, 459, 420, 320, 204, 109, 49, 18, 6, 4, 10, 22, 41, 64, 83, 91, 83, 64, 41, 22, 10, 4, 3, 6, 13, 28, 50, 78, 102, 111, 102, 78, 50, 28, 13, 6, 3, 5, 12, 25, 45, 70, 91, 100, 91, 70, 45, 25, 12, 5, 6, 8, 15, 28, 49, 74, 95, 103, 95, 74, 49, 28, 15, 8, 6, 12, 25, 45, 70, 91, 100, 91, 70, 45, 25, 12, 6, 13, 26, 48, 75, 97, 106, 97, 75, 48, 26, 13, 6, 5, 12, 26, 48, 75, 98, 107, 98, 75, 48, 26, 12, 5, 3, 4, 6, 12, 24, 43, 67, 86, 94, 86, 67, 43, 24, 12, 6, 4, 3, 9, 15, 29, 50, 76, 98, 107, 98, 76, 50, 29, 15, 9, 6, 11, 26, 61, 132, 243, 379, 495, 541, 495, 379, 243, 132, 61, 26, 11, 6, 2, 5, 12, 25, 47, 73, 96, 105, 96, 73, 47, 25, 12, 5, 2, 8, 15, 29, 52, 79, 103, 112, 103, 79, 52, 29, 15, 8, 3, 6, 12, 26, 47, 73, 95, 104, 95, 73, 47, 26, 12, 6, 3, 9, 22, 56, 122, 227, 354, 463, 506, 463, 354, 227, 122, 56, 22, 9, 4, 6, 13, 26, 46, 70, 91, 100, 91, 70, 46, 26, 13, 6, 4],
					C: [3, 3, 5, 8, 15, 26, 40, 51, 56, 51, 40, 26, 15, 8, 5, 3, 3, 22, 57, 126, 234, 367, 480, 525, 480, 367, 234, 126, 57, 22, 6, 12, 22, 33, 43, 47, 43, 33, 22, 12, 6, 3, 3, 4, 8, 14, 24, 36, 46, 50, 46, 36, 24, 14, 8, 4, 3, 3, 7, 13, 23, 34, 44, 48, 44, 34, 23, 13, 7, 52, 112, 206, 321, 419, 458, 419, 321, 206, 112, 52, 3, 4, 8, 14, 24, 37, 47, 52, 47, 37, 24, 14, 8, 4, 3, 3, 7, 14, 24, 37, 48, 52, 48, 37, 24, 14, 7, 3, 10, 17, 29, 42, 54, 58, 54, 42, 29, 17, 10, 3, 7, 13, 23, 35, 45, 49, 45, 35, 23, 13, 7, 3, 4, 4, 5, 9, 16, 26, 39, 50, 54, 50, 39, 26, 16, 9, 5, 4, 4, 4, 7, 14, 25, 38, 49, 53, 49, 38, 25, 14, 7, 4, 7, 14, 25, 39, 51, 55, 51, 39, 25, 14, 7, 7, 10, 17, 27, 41, 52, 56, 52, 41, 27, 17, 10, 7, 6, 19, 50, 112, 210, 329, 430, 471, 430, 329, 210, 112, 50, 19, 6, 2, 6, 18, 49, 109, 204, 320, 419, 459, 419, 320, 204, 109, 49, 18, 6, 2, 55, 121, 224, 351, 458, 501, 458, 351, 224, 121, 55, 5, 9, 15, 25, 37, 48, 52, 48, 37, 25, 15, 9, 5, 2, 3, 7, 13, 23, 36, 47, 51, 47, 36, 23, 13, 7, 3, 2, 4, 7, 13, 23, 34, 44, 48, 44, 34, 23, 13, 7, 4, 3, 5, 8, 15, 27, 41, 53, 57, 53, 41, 27, 15, 8, 5, 3, 1, 2, 6, 12, 23, 35, 46, 50, 46, 35, 23, 12, 6, 2, 1, 6, 12, 23, 35, 46, 50, 46, 35, 23, 12, 6, 4, 8, 14, 24, 37, 47, 51, 47, 37, 24, 14, 8, 4, 2, 7, 21, 55, 124, 232, 363, 475, 520, 475, 363, 232, 124, 55, 21, 7, 2, 4, 7, 14, 25, 38, 50, 54, 50, 38, 25, 14, 7, 4, 1, 2, 6, 12, 23, 35, 46, 51, 46, 35, 23, 12, 6, 2, 1, 7, 13, 23, 35, 45, 49, 45, 35, 23, 13, 7, 2, 7, 22, 57, 128, 239, 375, 491, 537, 491, 375, 239, 128, 57, 22, 7, 2, 3, 6, 13, 25, 38, 50, 55, 50, 38, 25, 13, 6, 3, 4, 5, 9, 15, 26, 38, 49, 53, 49, 38, 26, 15, 9, 5, 4, 8, 14, 25, 37, 48, 52, 48, 37, 25, 14, 8, 2, 6, 12, 22, 35, 45, 50, 45, 35, 22, 12, 6, 2, 5, 7, 10, 17, 29, 42, 54, 59, 54, 42, 29, 17, 10, 7, 5, 6, 19, 50, 111, 209, 327, 428, 469, 428, 327, 209, 111, 50, 19, 6, 2, 7, 21, 56, 126, 236, 370, 484, 530, 484, 370, 236, 126, 56, 21, 7, 2, 55, 120, 223, 349, 456, 499, 456, 349, 223, 120, 55, 5, 9, 15, 25, 38, 49, 53, 49, 38, 25, 15, 9, 5, 1, 1, 2, 5, 12, 22, 34, 44, 48, 44, 34, 22, 12, 5, 2, 1, 1, 9, 15, 25, 37, 47, 51, 47, 37, 25, 15, 9, 1, 1, 3, 6, 13, 25, 39, 51, 55, 51, 39, 25, 13, 6, 3, 1, 1, 3, 5, 8, 15, 27, 41, 53, 57, 53, 41, 27, 15, 8, 5, 3, 3, 4, 8, 14, 24, 37, 47, 52, 47, 37, 24, 14, 8, 4, 3, 3, 3, 4, 7, 14, 24, 35, 46, 50, 46, 35, 24, 14, 7, 4, 3, 3, 61, 131, 241, 376, 491, 537, 491, 376, 241, 131, 61, 9, 15, 25, 38, 48, 52, 48, 38, 25, 15, 9, 5, 7, 10, 17, 28, 41, 53, 58, 53, 41, 28, 17, 10, 7, 5, 1, 2, 5, 12, 21, 33, 43, 47, 43, 33, 21, 12, 5, 2, 1, 3, 7, 20, 50, 112, 208, 326, 426, 466, 426, 326, 208, 112, 50, 20, 7, 3, 7, 10, 17, 29, 42, 54, 59, 54, 42, 29, 17, 10, 7, 2, 3, 7, 13, 23, 35, 45, 49, 45, 35, 23, 13, 7, 3, 2, 1, 1, 3, 6, 13, 24, 37, 48, 53, 48, 37, 24, 13, 6, 3, 1, 1, 5, 6, 9, 16, 25, 37, 47, 51, 47, 37, 25, 16, 9, 6, 5, 2, 3, 7, 13, 24, 36, 47, 52, 47, 36, 24, 13, 7, 3, 2, 23, 59, 130, 243, 380, 498, 544, 498, 380, 243, 130, 59, 23, 22, 58, 131, 245, 384, 503, 550, 503, 384, 245, 131, 58, 22, 7, 20, 52, 114, 213, 333, 435, 476, 435, 333, 213, 114, 52, 20, 7, 6, 12, 22, 33, 43, 47, 43, 33, 22, 12, 6, 2, 4, 7, 14, 25, 38, 49, 53, 49, 38, 25, 14, 7, 4, 2, 7, 14, 25, 39, 50, 55, 50, 39, 25, 14, 7, 3, 3, 4, 8, 14, 24, 36, 46, 50, 46, 36, 24, 14, 8, 4, 3, 3, 4, 5, 9, 15, 26, 38, 49, 53, 49, 38, 26, 15, 9, 5, 4, 7, 14, 26, 39, 51, 56, 51, 39, 26, 14, 7, 7, 19, 49, 108, 202, 316, 413, 452, 413, 316, 202, 108, 49, 19, 7, 8, 15, 25, 38, 49, 53, 49, 38, 25, 15, 8, 3, 3, 5, 8, 15, 26, 40, 52, 56, 52, 40, 26, 15, 8, 5, 3, 3, 5, 5, 6, 10, 16, 26, 38, 49, 53, 49, 38, 26, 16, 10, 6, 5, 5, 58, 124, 229, 356, 465, 509, 465, 356, 229, 124, 58, 3, 6, 13, 25, 38, 50, 55, 50, 38, 25, 13, 6, 3, 2, 2, 4, 7, 14, 24, 37, 48, 53, 48, 37, 24, 14, 7, 4, 2, 2, 1, 1, 3, 6, 13, 24, 37, 48, 53, 48, 37, 24, 13, 6, 3, 1, 1, 2, 2, 3, 7, 13, 24, 36, 47, 51, 47, 36, 24, 13, 7, 3, 2, 2, 1, 2, 5, 11, 21, 33, 43, 47, 43, 33, 21, 11, 5, 2, 1, 21, 55, 123, 231, 361, 473, 518, 473, 361, 231, 123, 55, 21, 7, 19, 50, 109, 204, 319, 418, 457, 418, 319, 204, 109, 50, 19, 7, 22, 57, 125, 234, 366, 479, 524, 479, 366, 234, 125, 57, 22, 5, 7, 10, 17, 28, 41, 52, 57, 52, 41, 28, 17, 10, 7, 5, 6, 13, 22, 34, 45, 49, 45, 34, 22, 13, 6, 3, 7, 13, 23, 35, 46, 50, 46, 35, 23, 13, 7, 3, 2, 5, 12, 21, 33, 43, 47, 43, 33, 21, 12, 5, 2, 3, 3, 4, 8, 14, 24, 37, 47, 51, 47, 37, 24, 14, 8, 4, 3, 3, 6, 9, 15, 25, 37, 46, 50, 46, 37, 25, 15, 9, 6, 5, 5, 6, 9, 15, 25, 37, 47, 51, 47, 37, 25, 15, 9, 6, 5, 5, 6, 18, 49, 109, 204, 320, 419, 458, 419, 320, 204, 109, 49, 18, 6, 5, 8, 15, 24, 36, 47, 51, 47, 36, 24, 15, 8, 5, 2, 3, 7, 13, 24, 37, 48, 52, 48, 37, 24, 13, 7, 3, 2, 3, 4, 8, 14, 24, 37, 47, 51, 47, 37, 24, 14, 8, 4, 3, 8, 22, 54, 119, 222, 346, 453, 495, 453, 346, 222, 119, 54, 22, 8],
					G: [3, 3, 4, 5, 9, 14, 20, 26, 28, 26, 20, 14, 9, 5, 4, 3, 3, 3, 4, 8, 13, 20, 25, 28, 25, 20, 13, 8, 4, 3, 58, 129, 241, 378, 494, 541, 494, 378, 241, 129, 58, 3, 3, 3, 5, 8, 14, 20, 25, 27, 25, 20, 14, 8, 5, 3, 3, 3, 5, 8, 14, 20, 25, 27, 25, 20, 14, 8, 5, 7, 11, 16, 23, 29, 31, 29, 23, 16, 11, 7, 8, 22, 54, 118, 219, 342, 447, 489, 447, 342, 219, 118, 54, 22, 8, 3, 4, 8, 13, 20, 26, 28, 26, 20, 13, 8, 4, 3, 7, 11, 16, 22, 28, 30, 28, 22, 16, 11, 7, 19, 50, 110, 205, 321, 420, 459, 420, 321, 205, 110, 50, 19, 4, 4, 5, 6, 10, 16, 22, 28, 31, 28, 22, 16, 10, 6, 5, 4, 4, 2, 4, 7, 12, 18, 24, 26, 24, 18, 12, 7, 4, 2, 4, 8, 13, 20, 26, 28, 26, 20, 13, 8, 4, 5, 7, 10, 15, 21, 27, 29, 27, 21, 15, 10, 7, 5, 1, 1, 3, 6, 11, 17, 22, 24, 22, 17, 11, 6, 3, 1, 1, 1, 1, 2, 3, 7, 12, 19, 25, 27, 25, 19, 12, 7, 3, 2, 1, 1, 5, 9, 15, 22, 27, 30, 27, 22, 15, 9, 5, 21, 51, 110, 204, 318, 416, 454, 416, 318, 204, 110, 51, 21, 8, 22, 58, 128, 239, 374, 489, 535, 489, 374, 239, 128, 58, 22, 8, 22, 55, 122, 226, 353, 462, 505, 462, 353, 226, 122, 55, 22, 3, 4, 5, 9, 15, 22, 27, 30, 27, 22, 15, 9, 5, 4, 3, 1, 2, 3, 7, 12, 19, 25, 27, 25, 19, 12, 7, 3, 2, 1, 3, 6, 11, 17, 22, 24, 22, 17, 11, 6, 3, 4, 5, 9, 15, 22, 28, 30, 28, 22, 15, 9, 5, 4, 1, 1, 2, 3, 7, 13, 20, 26, 28, 26, 20, 13, 7, 3, 2, 1, 1, 21, 54, 120, 224, 350, 458, 501, 458, 350, 224, 120, 54, 21, 1, 2, 3, 7, 12, 19, 25, 27, 25, 19, 12, 7, 3, 2, 1, 5, 9, 14, 21, 27, 29, 27, 21, 14, 9, 5, 1, 1, 1, 3, 6, 11, 17, 22, 24, 22, 17, 11, 6, 3, 1, 1, 1, 21, 55, 124, 232, 364, 476, 521, 476, 364, 232, 124, 55, 21, 4, 4, 6, 9, 14, 21, 26, 28, 26, 21, 14, 9, 6, 4, 4, 5, 8, 14, 20, 25, 27, 25, 20, 14, 8, 5, 1, 3, 7, 12, 18, 24, 26, 24, 18, 12, 7, 3, 1, 5, 5, 7, 10, 16, 22, 27, 30, 27, 22, 16, 10, 7, 5, 5, 1, 1, 3, 6, 12, 18, 24, 26, 24, 18, 12, 6, 3, 1, 1, 1, 1, 1, 3, 6, 11, 16, 21, 23, 21, 16, 11, 6, 3, 1, 1, 1, 5, 8, 13, 19, 24, 26, 24, 19, 13, 8, 5, 24, 57, 125, 231, 361, 472, 516, 472, 361, 231, 125, 57, 24, 2, 6, 19, 49, 110, 207, 324, 424, 464, 424, 324, 207, 110, 49, 19, 6, 2, 57, 124, 229, 358, 467, 511, 467, 358, 229, 124, 57, 1, 1, 2, 3, 7, 13, 19, 25, 28, 25, 19, 13, 7, 3, 2, 1, 1, 3, 4, 5, 9, 14, 20, 26, 28, 26, 20, 14, 9, 5, 4, 3, 3, 3, 5, 8, 13, 18, 23, 25, 23, 18, 13, 8, 5, 3, 3, 3, 3, 3, 5, 8, 13, 18, 23, 25, 23, 18, 13, 8, 5, 3, 3, 3, 7, 11, 17, 23, 29, 32, 29, 23, 17, 11, 7, 55, 120, 223, 347, 454, 496, 454, 347, 223, 120, 55, 5, 5, 7, 10, 15, 20, 25, 27, 25, 20, 15, 10, 7, 5, 5, 1, 1, 3, 6, 11, 18, 23, 25, 23, 18, 11, 6, 3, 1, 1, 2, 2, 2, 4, 7, 13, 19, 25, 27, 25, 19, 13, 7, 4, 2, 2, 2, 24, 58, 125, 230, 359, 469, 512, 469, 359, 230, 125, 58, 24, 2, 2, 4, 7, 12, 18, 23, 25, 23, 18, 12, 7, 4, 2, 2, 1, 1, 1, 3, 6, 11, 17, 23, 25, 23, 17, 11, 6, 3, 1, 1, 1, 5, 5, 7, 11, 16, 22, 28, 30, 28, 22, 16, 11, 7, 5, 5, 2, 2, 4, 8, 13, 19, 25, 27, 25, 19, 13, 8, 4, 2, 2, 2, 4, 7, 12, 18, 23, 25, 23, 18, 12, 7, 4, 2, 1, 3, 6, 12, 18, 23, 25, 23, 18, 12, 6, 3, 1, 2, 3, 4, 8, 13, 20, 26, 28, 26, 20, 13, 8, 4, 3, 2, 53, 118, 221, 346, 452, 495, 452, 346, 221, 118, 53, 8, 22, 55, 123, 229, 359, 470, 514, 470, 359, 229, 123, 55, 22, 8, 4, 8, 13, 20, 26, 28, 26, 20, 13, 8, 4, 3, 3, 4, 5, 9, 15, 22, 28, 30, 28, 22, 15, 9, 5, 4, 3, 3, 4, 5, 6, 10, 15, 22, 28, 30, 28, 22, 15, 10, 6, 5, 4, 4, 8, 13, 20, 25, 28, 25, 20, 13, 8, 4, 2, 2, 4, 7, 13, 19, 24, 27, 24, 19, 13, 7, 4, 2, 2, 56, 123, 229, 358, 469, 513, 469, 358, 229, 123, 56, 3, 3, 4, 5, 9, 14, 21, 27, 29, 27, 21, 14, 9, 5, 4, 3, 3, 5, 5, 5, 7, 10, 15, 21, 26, 28, 26, 21, 15, 10, 7, 5, 5, 5, 7, 11, 17, 24, 30, 32, 30, 24, 17, 11, 7, 19, 49, 109, 205, 321, 421, 460, 421, 321, 205, 109, 49, 19, 2, 2, 3, 4, 8, 14, 20, 26, 29, 26, 20, 14, 8, 4, 3, 2, 2, 1, 1, 2, 3, 7, 13, 20, 26, 28, 26, 20, 13, 7, 3, 2, 1, 1, 2, 2, 3, 4, 8, 14, 21, 26, 29, 26, 21, 14, 8, 4, 3, 2, 2, 1, 2, 3, 7, 12, 18, 24, 26, 24, 18, 12, 7, 3, 2, 1, 1, 3, 6, 11, 17, 22, 24, 22, 17, 11, 6, 3, 1, 2, 2, 4, 7, 13, 19, 24, 26, 24, 19, 13, 7, 4, 2, 2, 2, 4, 7, 12, 18, 23, 25, 23, 18, 12, 7, 4, 2, 11, 24, 58, 124, 228, 355, 464, 508, 464, 355, 228, 124, 58, 24, 11, 59, 131, 244, 382, 500, 547, 500, 382, 244, 131, 59, 21, 55, 121, 226, 354, 463, 507, 463, 354, 226, 121, 55, 21, 1, 3, 6, 11, 16, 21, 23, 21, 16, 11, 6, 3, 1, 3, 3, 3, 5, 8, 13, 19, 24, 26, 24, 19, 13, 8, 5, 3, 3, 3, 6, 7, 11, 17, 24, 30, 32, 30, 24, 17, 11, 7, 6, 5, 5, 5, 7, 10, 15, 20, 25, 27, 25, 20, 15, 10, 7, 5, 5, 5, 1, 1, 3, 6, 11, 16, 21, 23, 21, 16, 11, 6, 3, 1, 1, 22, 53, 114, 211, 329, 431, 471, 431, 329, 211, 114, 53, 22, 2, 2, 4, 7, 13, 19, 25, 27, 25, 19, 13, 7, 4, 2, 2, 3, 3, 5, 8, 13, 19, 24, 26, 24, 19, 13, 8, 5, 3, 3, 3, 4, 5, 9, 14, 21, 27, 29, 27, 21, 14, 9, 5, 4, 3],
					T: [3, 3, 3, 4, 5, 7, 10, 12, 13, 12, 10, 7, 5, 4, 3, 3, 3, 2, 3, 4, 6, 8, 10, 11, 10, 8, 6, 4, 3, 2, 3, 4, 6, 9, 11, 12, 11, 9, 6, 4, 3, 4, 9, 22, 56, 122, 226, 353, 462, 506, 462, 353, 226, 122, 56, 22, 9, 4, 3, 5, 7, 9, 11, 12, 11, 9, 7, 5, 3, 6, 7, 9, 12, 14, 15, 14, 12, 9, 7, 6, 3, 3, 4, 5, 7, 9, 11, 12, 11, 9, 7, 5, 4, 3, 3, 22, 58, 128, 238, 373, 488, 534, 488, 373, 238, 128, 58, 22, 5, 7, 9, 11, 13, 14, 13, 11, 9, 7, 5, 2, 3, 4, 6, 8, 10, 11, 10, 8, 6, 4, 3, 2, 5, 10, 23, 56, 121, 223, 348, 455, 498, 455, 348, 223, 121, 56, 23, 10, 5, 2, 3, 4, 6, 9, 11, 12, 11, 9, 6, 4, 3, 2, 3, 4, 6, 8, 11, 11, 11, 8, 6, 4, 3, 5, 6, 7, 9, 11, 14, 14, 14, 11, 9, 7, 6, 5, 1, 1, 2, 3, 5, 8, 10, 11, 10, 8, 5, 3, 2, 1, 1, 1, 1, 1, 1, 3, 5, 7, 9, 10, 9, 7, 5, 3, 1, 1, 1, 1, 4, 5, 7, 10, 12, 13, 12, 10, 7, 5, 4, 4, 5, 6, 8, 11, 13, 14, 13, 11, 8, 6, 5, 4, 2, 2, 3, 4, 6, 9, 11, 12, 11, 9, 6, 4, 3, 2, 2, 3, 4, 5, 7, 9, 11, 12, 11, 9, 7, 5, 4, 3, 8, 21, 52, 115, 213, 332, 435, 475, 435, 332, 213, 115, 52, 21, 8, 7, 21, 56, 125, 235, 367, 481, 527, 481, 367, 235, 125, 56, 21, 7, 56, 125, 234, 366, 480, 525, 480, 366, 234, 125, 56, 3, 4, 5, 7, 9, 11, 12, 11, 9, 7, 5, 4, 3, 1, 1, 1, 2, 3, 5, 8, 10, 11, 10, 8, 5, 3, 2, 1, 1, 1, 2, 3, 4, 6, 9, 12, 12, 12, 9, 6, 4, 3, 2, 6, 19, 51, 114, 214, 336, 440, 481, 440, 336, 214, 114, 51, 19, 6, 4, 5, 7, 10, 12, 13, 12, 10, 7, 5, 4, 1, 1, 1, 2, 3, 5, 7, 9, 10, 9, 7, 5, 3, 2, 1, 1, 1, 1, 1, 3, 5, 7, 9, 10, 9, 7, 5, 3, 1, 1, 9, 23, 55, 120, 223, 347, 454, 496, 454, 347, 223, 120, 55, 23, 9, 4, 5, 7, 10, 12, 13, 12, 10, 7, 5, 4, 1, 2, 3, 5, 8, 10, 11, 10, 8, 5, 3, 2, 1, 5, 5, 6, 7, 9, 11, 14, 14, 14, 11, 9, 7, 6, 5, 5, 1, 1, 2, 3, 5, 7, 10, 10, 10, 7, 5, 3, 2, 1, 1, 1, 1, 1, 2, 3, 5, 7, 9, 10, 9, 7, 5, 3, 2, 1, 1, 1, 4, 5, 7, 10, 13, 13, 13, 10, 7, 5, 4, 4, 4, 6, 8, 10, 12, 13, 12, 10, 8, 6, 4, 4, 1, 1, 1, 2, 3, 5, 7, 9, 10, 9, 7, 5, 3, 2, 1, 1, 1, 5, 6, 8, 11, 13, 14, 13, 11, 8, 6, 5, 2, 7, 21, 57, 126, 237, 371, 486, 532, 486, 371, 237, 126, 57, 21, 7, 2, 8, 21, 52, 115, 213, 333, 436, 477, 436, 333, 213, 115, 52, 21, 8, 9, 23, 59, 129, 240, 375, 490, 536, 490, 375, 240, 129, 59, 23, 9, 3, 3, 3, 4, 5, 7, 10, 12, 13, 12, 10, 7, 5, 4, 3, 3, 3, 6, 7, 9, 12, 14, 15, 14, 12, 9, 7, 6, 5, 6, 8, 10, 12, 13, 12, 10, 8, 6, 5, 10, 23, 55, 118, 217, 337, 440, 482, 440, 337, 217, 118, 55, 23, 10, 1, 1, 2, 3, 5, 8, 10, 11, 10, 8, 5, 3, 2, 1, 1, 2, 2, 2, 3, 4, 6, 8, 10, 11, 10, 8, 6, 4, 3, 2, 2, 2, 5, 6, 7, 9, 12, 14, 15, 14, 12, 9, 7, 6, 5, 7, 20, 52, 115, 215, 336, 439, 480, 439, 336, 215, 115, 52, 20, 7, 1, 1, 1, 2, 3, 5, 7, 10, 10, 10, 7, 5, 3, 2, 1, 1, 1, 5, 5, 6, 7, 9, 12, 14, 15, 14, 12, 9, 7, 6, 5, 5, 2, 2, 3, 4, 6, 8, 10, 11, 10, 8, 6, 4, 3, 2, 2, 2, 3, 4, 6, 9, 11, 12, 11, 9, 6, 4, 3, 2, 1, 2, 3, 5, 7, 9, 10, 9, 7, 5, 3, 2, 1, 2, 2, 3, 4, 6, 9, 11, 12, 11, 9, 6, 4, 3, 2, 2, 2, 4, 6, 8, 10, 11, 10, 8, 6, 4, 2, 2, 2, 3, 4, 6, 8, 10, 11, 10, 8, 6, 4, 3, 2, 2, 51, 113, 211, 330, 432, 472, 432, 330, 211, 113, 51, 4, 9, 22, 55, 122, 226, 353, 462, 505, 462, 353, 226, 122, 55, 22, 9, 4, 10, 23, 56, 121, 225, 351, 459, 501, 459, 351, 225, 121, 56, 23, 10, 2, 4, 6, 8, 10, 11, 10, 8, 6, 4, 2, 2, 2, 3, 4, 6, 9, 11, 12, 11, 9, 6, 4, 3, 2, 2, 3, 5, 7, 9, 11, 12, 11, 9, 7, 5, 3, 4, 8, 21, 54, 117, 218, 341, 446, 488, 446, 341, 218, 117, 54, 21, 8, 4, 5, 5, 5, 6, 7, 9, 11, 14, 14, 14, 11, 9, 7, 6, 5, 5, 5, 5, 7, 9, 11, 13, 14, 13, 11, 9, 7, 5, 1, 1, 3, 5, 7, 9, 10, 9, 7, 5, 3, 1, 1, 3, 8, 22, 56, 124, 231, 361, 473, 517, 473, 361, 231, 124, 56, 22, 8, 3, 1, 1, 1, 2, 3, 5, 8, 10, 11, 10, 8, 5, 3, 2, 1, 1, 1, 2, 2, 2, 3, 4, 6, 8, 10, 11, 10, 8, 6, 4, 3, 2, 2, 2, 1, 1, 1, 3, 5, 7, 9, 10, 9, 7, 5, 3, 1, 1, 1, 1, 1, 3, 5, 7, 9, 10, 9, 7, 5, 3, 1, 1, 2, 2, 3, 4, 6, 8, 10, 11, 10, 8, 6, 4, 3, 2, 2, 2, 3, 4, 6, 9, 11, 12, 11, 9, 6, 4, 3, 2, 5, 5, 5, 7, 9, 11, 13, 14, 13, 11, 9, 7, 5, 5, 5, 3, 4, 6, 9, 11, 12, 11, 9, 6, 4, 3, 2, 3, 4, 6, 9, 11, 12, 11, 9, 6, 4, 3, 2, 21, 55, 124, 232, 364, 477, 522, 477, 364, 232, 124, 55, 21, 4, 9, 22, 55, 121, 226, 353, 461, 505, 461, 353, 226, 121, 55, 22, 9, 4, 25, 60, 128, 237, 369, 482, 527, 482, 369, 237, 128, 60, 25, 5, 5, 5, 6, 7, 9, 12, 14, 15, 14, 12, 9, 7, 6, 5, 5, 5, 1, 1, 2, 3, 5, 8, 10, 11, 10, 8, 5, 3, 2, 1, 1, 4, 5, 6, 8, 10, 12, 13, 12, 10, 8, 6, 5, 4, 8, 21, 55, 121, 225, 353, 462, 505, 462, 353, 225, 121, 55, 21, 8, 3, 3, 4, 5, 7, 10, 12, 13, 12, 10, 7, 5, 4, 3, 3, 3, 3, 4, 5, 7, 10, 12, 13, 12, 10, 7, 5, 4, 3, 3],
					peak: [8, 23, 35, 49, 63, 74, 87, 101, 113, 125, 140, 155, 167, 179, 193, 209, 223, 235, 249, 263, 277, 292, 305, 317, 332, 347, 361, 374, 388, 403, 417, 430, 442, 456, 471, 487, 501, 513, 528, 542, 556, 572, 587, 603, 617, 628, 641, 656, 672, 687, 701, 717, 733, 748, 762, 775, 789, 802, 815, 828, 842, 858, 871, 884, 897, 911, 928, 942, 954, 969, 986, 1003, 1019, 1033, 1047, 1061, 1075, 1088, 1100, 1113, 1128, 1143, 1158, 1174, 1188, 1202, 1217, 1232]
				},
				index: 2,
				counter: 5,
				measureText: 74
			}, {
				id: "R1-0000-3456",
				fill: "rgb(255,51,255)",
				outline: "rgb(0,0,0)",
				dir: "left",
				offsetLeft: "134",
				sequence: "AAACCCGGGTTTACGTACGTAAACCCGGGTTTACGTACGTAAACCCGGGTTTACGTACGTAAACCCGGGTTTACGTACGTAAAC",
				coordinate: 230,
				trace: {
					A: [6, 18, 49, 109, 203, 319, 417, 457, 417, 319, 203, 109, 49, 18, 6, 2, 6, 19, 50, 112, 210, 330, 432, 472, 432, 330, 210, 112, 50, 19, 6, 2, 5, 10, 23, 57, 124, 230, 359, 469, 513, 469, 359, 230, 124, 57, 23, 10, 5, 13, 27, 48, 74, 96, 105, 96, 74, 48, 27, 13, 5, 11, 23, 42, 65, 85, 93, 85, 65, 42, 23, 11, 5, 2, 4, 11, 24, 45, 70, 91, 100, 91, 70, 45, 24, 11, 4, 2, 11, 24, 44, 69, 90, 98, 90, 69, 44, 24, 11, 6, 13, 28, 50, 78, 102, 111, 102, 78, 50, 28, 13, 6, 12, 26, 49, 76, 100, 109, 100, 76, 49, 26, 12, 2, 4, 11, 24, 45, 70, 91, 100, 91, 70, 45, 24, 11, 4, 2, 2, 4, 10, 23, 42, 66, 86, 94, 86, 66, 42, 23, 10, 4, 2, 1, 2, 4, 11, 24, 46, 71, 93, 102, 93, 71, 46, 24, 11, 4, 2, 1, 3, 8, 21, 55, 122, 228, 357, 468, 512, 468, 357, 228, 122, 55, 21, 8, 3, 15, 28, 49, 75, 96, 105, 96, 75, 49, 28, 15, 1, 2, 5, 11, 25, 46, 72, 95, 104, 95, 72, 46, 25, 11, 5, 2, 1, 6, 13, 26, 48, 75, 98, 107, 98, 75, 48, 26, 13, 6, 7, 22, 58, 130, 243, 381, 499, 546, 499, 381, 243, 130, 58, 22, 7, 4, 6, 12, 24, 43, 65, 85, 93, 85, 65, 43, 24, 12, 6, 4, 5, 12, 26, 48, 75, 98, 107, 98, 75, 48, 26, 12, 5, 2, 4, 11, 24, 44, 68, 89, 98, 89, 68, 44, 24, 11, 4, 2, 24, 58, 125, 230, 358, 468, 512, 468, 358, 230, 125, 58, 24, 50, 109, 203, 317, 414, 453, 414, 317, 203, 109, 50, 8, 22, 54, 119, 220, 344, 450, 492, 450, 344, 220, 119, 54, 22, 8, 4, 10, 23, 42, 65, 86, 94, 86, 65, 42, 23, 10, 4, 5, 12, 26, 48, 75, 99, 108, 99, 75, 48, 26, 12, 5, 9, 16, 29, 51, 78, 100, 109, 100, 78, 51, 29, 16, 9, 3, 4, 6, 13, 25, 45, 69, 90, 98, 90, 69, 45, 25, 13, 6, 4, 3, 1, 2, 5, 12, 26, 48, 74, 97, 106, 97, 74, 48, 26, 12, 5, 2, 1, 3, 5, 11, 23, 42, 65, 84, 92, 84, 65, 42, 23, 11, 5, 3, 4, 5, 7, 14, 27, 48, 73, 95, 103, 95, 73, 48, 27, 14, 7, 5, 4, 15, 28, 49, 74, 95, 104, 95, 74, 49, 28, 15, 15, 28, 48, 73, 94, 103, 94, 73, 48, 28, 15, 5, 9, 22, 54, 116, 215, 336, 439, 480, 439, 336, 215, 116, 54, 22, 9, 5, 11, 24, 45, 70, 91, 99, 91, 70, 45, 24, 11, 7, 14, 27, 48, 73, 95, 103, 95, 73, 48, 27, 14, 7, 2, 3, 5, 12, 25, 45, 70, 91, 100, 91, 70, 45, 25, 12, 5, 3, 2, 23, 59, 132, 246, 385, 504, 551, 504, 385, 246, 132, 59, 23, 11, 23, 43, 66, 86, 94, 86, 66, 43, 23, 11, 7, 14, 27, 49, 76, 99, 108, 99, 76, 49, 27, 14, 7, 1, 2, 5, 12, 26, 49, 76, 100, 109, 100, 76, 49, 26, 12, 5, 2, 1, 50, 113, 211, 331, 433, 474, 433, 331, 211, 113, 50, 2, 7, 20, 54, 120, 225, 352, 461, 505, 461, 352, 225, 120, 54, 20, 7, 2, 7, 21, 56, 125, 234, 366, 480, 525, 480, 366, 234, 125, 56, 21, 7, 9, 15, 29, 50, 76, 99, 108, 99, 76, 50, 29, 15, 9, 16, 30, 52, 79, 103, 112, 103, 79, 52, 30, 16, 13, 25, 44, 67, 87, 95, 87, 67, 44, 25, 13, 7, 14, 28, 51, 78, 102, 111, 102, 78, 51, 28, 14, 7, 2, 4, 10, 22, 41, 64, 84, 92, 84, 64, 41, 22, 10, 4, 2, 2, 4, 11, 23, 43, 67, 88, 96, 88, 67, 43, 23, 11, 4, 2, 5, 7, 13, 25, 45, 68, 88, 96, 88, 68, 45, 25, 13, 7, 5, 4, 5, 8, 15, 28, 50, 76, 99, 108, 99, 76, 50, 28, 15, 8, 5, 4, 15, 27, 47, 71, 92, 100, 92, 71, 47, 27, 15, 7, 21, 56, 125, 235, 368, 482, 528, 482, 368, 235, 125, 56, 21, 7, 6, 12, 25, 44, 68, 88, 96, 88, 68, 44, 25, 12, 6, 2, 3, 5, 11, 23, 42, 66, 85, 93, 85, 66, 42, 23, 11, 5, 3, 2, 2, 4, 10, 22, 41, 65, 85, 93, 85, 65, 41, 22, 10, 4, 2, 4, 8, 22, 54, 118, 220, 343, 448, 490, 448, 343, 220, 118, 54, 22, 8, 4, 13, 26, 45, 69, 90, 98, 90, 69, 45, 26, 13, 4, 5, 8, 15, 30, 52, 80, 104, 113, 104, 80, 52, 30, 15, 8, 5, 4, 2, 3, 6, 13, 27, 49, 76, 99, 108, 99, 76, 49, 27, 13, 6, 3, 2, 9, 23, 55, 120, 222, 347, 453, 496, 453, 347, 222, 120, 55, 23, 9, 60, 131, 243, 380, 496, 543, 496, 380, 243, 131, 60, 11, 26, 61, 132, 244, 380, 496, 542, 496, 380, 244, 132, 61, 26, 11, 2, 4, 11, 24, 44, 69, 90, 98, 90, 69, 44, 24, 11, 4, 2, 4, 11, 24, 45, 70, 91, 100, 91, 70, 45, 24, 11, 4, 8, 15, 28, 48, 73, 94, 103, 94, 73, 48, 28, 15, 8, 12, 26, 47, 74, 96, 105, 96, 74, 47, 26, 12, 5, 6, 9, 15, 29, 51, 77, 99, 108, 99, 77, 51, 29, 15, 9, 6, 5, 3, 5, 11, 23, 42, 66, 86, 94, 86, 66, 42, 23, 11, 5, 3, 4, 5, 7, 14, 26, 47, 71, 92, 100, 92, 71, 47, 26, 14, 7, 5, 4, 5, 8, 15, 29, 52, 79, 102, 112, 102, 79, 52, 29, 15, 8, 5, 5, 6, 9, 16, 30, 53, 80, 104, 113, 104, 80, 53, 30, 16, 9, 6, 5, 20, 50, 110, 204, 318, 416, 455, 416, 318, 204, 110, 50, 20, 11, 25, 46, 72, 94, 103, 94, 72, 46, 25, 11, 3, 4, 6, 13, 26, 46, 71, 93, 101, 93, 71, 46, 26, 13, 6, 4, 3, 13, 27, 50, 77, 101, 110, 101, 77, 50, 27, 13, 60, 132, 245, 383, 501, 548, 501, 383, 245, 132, 60, 13, 27, 50, 77, 101, 110, 101, 77, 50, 27, 13, 10, 23, 42, 66, 86, 95, 86, 66, 42, 23, 10, 4, 6, 12, 25, 44, 67, 87, 95, 87, 67, 44, 25, 12, 6, 4, 58, 129, 242, 380, 498, 544, 498, 380, 242, 129, 58, 6, 18, 49, 109, 204, 320, 419, 458, 419, 320, 204, 109, 49, 18, 6, 23, 57, 125, 232, 362, 474, 518, 474, 362, 232, 125, 57, 23, 4, 5, 8, 15, 29, 52, 80, 103, 112, 103, 80, 52, 29, 15, 8, 5, 4],
					C: [1, 3, 6, 13, 24, 37, 48, 53, 48, 37, 24, 13, 6, 3, 1, 1, 1, 2, 6, 12, 22, 35, 45, 49, 45, 35, 22, 12, 6, 2, 1, 1, 4, 4, 5, 8, 15, 24, 36, 46, 50, 46, 36, 24, 15, 8, 5, 4, 4, 60, 132, 246, 385, 504, 551, 504, 385, 246, 132, 60, 19, 50, 110, 206, 322, 421, 460, 421, 322, 206, 110, 50, 19, 7, 21, 56, 124, 233, 365, 478, 523, 478, 365, 233, 124, 56, 21, 7, 6, 13, 25, 38, 50, 55, 50, 38, 25, 13, 6, 3, 6, 12, 22, 33, 43, 47, 43, 33, 22, 12, 6, 3, 6, 13, 23, 36, 47, 52, 47, 36, 23, 13, 6, 1, 2, 5, 11, 21, 33, 43, 47, 43, 33, 21, 11, 5, 2, 1, 1, 2, 5, 11, 21, 33, 42, 46, 42, 33, 21, 11, 5, 2, 1, 1, 1, 3, 6, 13, 24, 38, 50, 54, 50, 38, 24, 13, 6, 3, 1, 1, 2, 2, 4, 7, 14, 25, 38, 50, 54, 50, 38, 25, 14, 7, 4, 2, 2, 56, 120, 221, 344, 449, 491, 449, 344, 221, 120, 56, 1, 1, 3, 6, 13, 24, 37, 48, 52, 48, 37, 24, 13, 6, 3, 1, 1, 4, 7, 14, 26, 39, 51, 56, 51, 39, 26, 14, 7, 4, 1, 2, 6, 12, 22, 35, 45, 50, 45, 35, 22, 12, 6, 2, 1, 8, 21, 53, 116, 216, 337, 441, 482, 441, 337, 216, 116, 53, 21, 8, 2, 5, 12, 21, 33, 43, 47, 43, 33, 21, 12, 5, 2, 1, 3, 6, 13, 24, 37, 48, 53, 48, 37, 24, 13, 6, 3, 1, 6, 10, 16, 26, 38, 48, 53, 48, 38, 26, 16, 10, 6, 8, 15, 26, 39, 50, 55, 50, 39, 26, 15, 8, 3, 4, 8, 14, 24, 36, 46, 50, 46, 36, 24, 14, 8, 4, 3, 20, 53, 119, 224, 350, 459, 502, 459, 350, 224, 119, 53, 20, 19, 50, 112, 211, 330, 432, 473, 432, 330, 211, 112, 50, 19, 23, 55, 118, 218, 340, 444, 485, 444, 340, 218, 118, 55, 23, 3, 3, 5, 8, 15, 26, 40, 51, 56, 51, 40, 26, 15, 8, 5, 3, 3, 1, 1, 3, 6, 13, 24, 37, 48, 52, 48, 37, 24, 13, 6, 3, 1, 1, 2, 3, 6, 13, 22, 34, 44, 48, 44, 34, 22, 13, 6, 3, 2, 4, 4, 5, 8, 14, 24, 36, 45, 49, 45, 36, 24, 14, 8, 5, 4, 4, 10, 17, 29, 43, 55, 59, 55, 43, 29, 17, 10, 10, 17, 28, 42, 53, 58, 53, 42, 28, 17, 10, 4, 4, 5, 8, 14, 24, 36, 46, 50, 46, 36, 24, 14, 8, 5, 4, 4, 54, 121, 226, 354, 464, 508, 464, 354, 226, 121, 54, 5, 8, 14, 24, 36, 46, 50, 46, 36, 24, 14, 8, 5, 2, 2, 3, 7, 13, 23, 36, 47, 51, 47, 36, 23, 13, 7, 3, 2, 2, 4, 7, 14, 25, 39, 51, 55, 51, 39, 25, 14, 7, 4, 51, 113, 210, 329, 430, 471, 430, 329, 210, 113, 51, 4, 8, 14, 24, 37, 47, 51, 47, 37, 24, 14, 8, 4, 1, 1, 2, 6, 13, 23, 36, 47, 51, 47, 36, 23, 13, 6, 2, 1, 1, 6, 13, 23, 36, 47, 51, 47, 36, 23, 13, 6, 1, 1, 2, 5, 12, 21, 33, 43, 47, 43, 33, 21, 12, 5, 2, 1, 1, 1, 3, 6, 13, 24, 38, 49, 54, 49, 38, 24, 13, 6, 3, 1, 22, 52, 112, 206, 321, 419, 458, 419, 321, 206, 112, 52, 22, 55, 117, 216, 337, 440, 481, 440, 337, 216, 117, 55, 53, 115, 212, 331, 432, 472, 432, 331, 212, 115, 53, 5, 8, 15, 26, 39, 51, 55, 51, 39, 26, 15, 8, 5, 1, 2, 6, 12, 22, 35, 46, 50, 46, 35, 22, 12, 6, 2, 1, 1, 2, 5, 11, 21, 32, 42, 46, 42, 32, 21, 11, 5, 2, 1, 4, 6, 9, 16, 28, 41, 53, 58, 53, 41, 28, 16, 9, 6, 4, 4, 4, 5, 9, 16, 26, 39, 50, 54, 50, 39, 26, 16, 9, 5, 4, 4, 10, 17, 28, 41, 52, 57, 52, 41, 28, 17, 10, 1, 2, 6, 12, 22, 35, 45, 49, 45, 35, 22, 12, 6, 2, 1, 23, 57, 125, 233, 364, 476, 521, 476, 364, 233, 125, 57, 23, 2, 2, 3, 6, 13, 22, 34, 44, 48, 44, 34, 22, 13, 6, 3, 2, 2, 1, 3, 6, 13, 24, 38, 49, 54, 49, 38, 24, 13, 6, 3, 1, 3, 3, 5, 8, 15, 27, 41, 52, 57, 52, 41, 27, 15, 8, 5, 3, 3, 54, 116, 215, 335, 437, 478, 437, 335, 215, 116, 54, 4, 4, 6, 9, 16, 26, 39, 50, 55, 50, 39, 26, 16, 9, 6, 4, 4, 2, 2, 4, 7, 14, 24, 37, 49, 53, 49, 37, 24, 14, 7, 4, 2, 2, 4, 6, 9, 16, 26, 39, 51, 55, 51, 39, 26, 16, 9, 6, 4, 8, 14, 24, 35, 45, 49, 45, 35, 24, 14, 8, 5, 6, 9, 16, 25, 37, 47, 51, 47, 37, 25, 16, 9, 6, 5, 7, 22, 57, 128, 239, 375, 491, 537, 491, 375, 239, 128, 57, 22, 7, 22, 58, 130, 244, 383, 501, 548, 501, 383, 244, 130, 58, 22, 22, 53, 113, 208, 324, 423, 463, 423, 324, 208, 113, 53, 22, 6, 13, 22, 34, 44, 48, 44, 34, 22, 13, 6, 5, 5, 7, 10, 17, 28, 41, 52, 57, 52, 41, 28, 17, 10, 7, 5, 5, 2, 4, 7, 14, 26, 40, 52, 56, 52, 40, 26, 14, 7, 4, 2, 4, 4, 5, 8, 14, 24, 35, 45, 49, 45, 35, 24, 14, 8, 5, 4, 4, 4, 6, 9, 16, 27, 41, 52, 57, 52, 41, 27, 16, 9, 6, 4, 5, 5, 6, 9, 16, 25, 37, 48, 52, 48, 37, 25, 16, 9, 6, 5, 5, 4, 7, 14, 24, 35, 46, 50, 46, 35, 24, 14, 7, 4, 51, 113, 212, 332, 435, 476, 435, 332, 212, 113, 51, 3, 3, 5, 8, 15, 26, 39, 50, 55, 50, 39, 26, 15, 8, 5, 3, 3, 6, 12, 22, 34, 43, 47, 43, 34, 22, 12, 6, 8, 14, 24, 37, 47, 52, 47, 37, 24, 14, 8, 56, 123, 230, 360, 471, 515, 471, 360, 230, 123, 56, 6, 13, 23, 36, 47, 52, 47, 36, 23, 13, 6, 3, 5, 8, 15, 26, 39, 51, 55, 51, 39, 26, 15, 8, 5, 3, 5, 11, 21, 33, 43, 46, 43, 33, 21, 11, 5, 1, 2, 6, 12, 23, 36, 47, 51, 47, 36, 23, 12, 6, 2, 1, 4, 7, 13, 23, 34, 44, 48, 44, 34, 23, 13, 7, 4, 5, 10, 23, 57, 123, 228, 355, 465, 508, 465, 355, 228, 123, 57, 23, 10, 5],
					G: [1, 1, 3, 6, 11, 16, 21, 23, 21, 16, 11, 6, 3, 1, 1, 1, 1, 1, 3, 6, 11, 17, 22, 25, 22, 17, 11, 6, 3, 1, 1, 1, 4, 4, 4, 6, 9, 14, 20, 25, 27, 25, 20, 14, 9, 6, 4, 4, 4, 5, 8, 14, 20, 26, 28, 26, 20, 14, 8, 5, 2, 4, 7, 12, 18, 23, 25, 23, 18, 12, 7, 4, 2, 1, 1, 3, 7, 12, 18, 24, 26, 24, 18, 12, 7, 3, 1, 1, 58, 129, 242, 379, 497, 543, 497, 379, 242, 129, 58, 21, 55, 122, 228, 356, 466, 510, 466, 356, 228, 122, 55, 21, 51, 114, 214, 335, 438, 480, 438, 335, 214, 114, 51, 1, 1, 3, 6, 11, 17, 22, 24, 22, 17, 11, 6, 3, 1, 1, 1, 1, 3, 6, 11, 18, 23, 25, 23, 18, 11, 6, 3, 1, 1, 1, 1, 2, 3, 7, 12, 19, 25, 27, 25, 19, 12, 7, 3, 2, 1, 1, 2, 2, 2, 4, 7, 12, 18, 23, 25, 23, 18, 12, 7, 4, 2, 2, 2, 7, 10, 15, 20, 25, 27, 25, 20, 15, 10, 7, 2, 6, 18, 49, 109, 204, 319, 418, 457, 418, 319, 204, 109, 49, 18, 6, 2, 3, 4, 8, 13, 20, 26, 28, 26, 20, 13, 8, 4, 3, 1, 1, 3, 6, 11, 16, 21, 23, 21, 16, 11, 6, 3, 1, 1, 3, 3, 5, 8, 13, 20, 25, 27, 25, 20, 13, 8, 5, 3, 3, 20, 53, 118, 222, 348, 456, 498, 456, 348, 222, 118, 53, 20, 1, 2, 3, 7, 12, 19, 24, 26, 24, 19, 12, 7, 3, 2, 1, 6, 7, 11, 16, 23, 29, 31, 29, 23, 16, 11, 7, 6, 5, 8, 13, 19, 24, 25, 24, 19, 13, 8, 5, 3, 3, 5, 8, 14, 20, 25, 27, 25, 20, 14, 8, 5, 3, 3, 2, 3, 7, 12, 19, 25, 27, 25, 19, 12, 7, 3, 2, 1, 3, 6, 11, 18, 23, 25, 23, 18, 11, 6, 3, 1, 6, 7, 11, 16, 23, 28, 31, 28, 23, 16, 11, 7, 6, 4, 9, 24, 59, 130, 242, 378, 494, 540, 494, 378, 242, 130, 59, 24, 9, 4, 2, 7, 22, 58, 130, 244, 382, 500, 547, 500, 382, 244, 130, 58, 22, 7, 2, 7, 20, 51, 113, 210, 329, 431, 471, 431, 329, 210, 113, 51, 20, 7, 4, 4, 4, 6, 9, 15, 21, 26, 29, 26, 21, 15, 9, 6, 4, 4, 4, 7, 11, 16, 23, 29, 31, 29, 23, 16, 11, 7, 7, 10, 15, 21, 26, 28, 26, 21, 15, 10, 7, 4, 4, 4, 6, 9, 14, 20, 26, 28, 26, 20, 14, 9, 6, 4, 4, 4, 3, 6, 11, 17, 22, 24, 22, 17, 11, 6, 3, 25, 61, 134, 248, 387, 506, 553, 506, 387, 248, 134, 61, 25, 2, 2, 2, 4, 7, 12, 19, 24, 26, 24, 19, 12, 7, 4, 2, 2, 2, 2, 4, 7, 12, 18, 24, 26, 24, 18, 12, 7, 4, 2, 4, 7, 12, 18, 23, 26, 23, 18, 12, 7, 4, 24, 60, 132, 246, 384, 502, 549, 502, 384, 246, 132, 60, 24, 1, 1, 2, 3, 7, 12, 19, 25, 27, 25, 19, 12, 7, 3, 2, 1, 1, 3, 6, 12, 18, 23, 26, 23, 18, 12, 6, 3, 1, 1, 1, 3, 6, 11, 18, 23, 25, 23, 18, 11, 6, 3, 1, 1, 1, 1, 2, 3, 7, 12, 19, 25, 27, 25, 19, 12, 7, 3, 2, 1, 6, 7, 11, 16, 23, 29, 31, 29, 23, 16, 11, 7, 6, 7, 11, 17, 23, 29, 31, 29, 23, 17, 11, 7, 6, 9, 15, 21, 27, 29, 27, 21, 15, 9, 6, 21, 52, 114, 211, 330, 431, 471, 431, 330, 211, 114, 52, 21, 6, 18, 49, 109, 205, 321, 420, 459, 420, 321, 205, 109, 49, 18, 6, 7, 21, 55, 124, 232, 363, 476, 521, 476, 363, 232, 124, 55, 21, 7, 4, 4, 6, 9, 14, 19, 24, 26, 24, 19, 14, 9, 6, 4, 4, 4, 4, 4, 6, 9, 14, 21, 26, 28, 26, 21, 14, 9, 6, 4, 4, 4, 7, 10, 16, 22, 27, 29, 27, 22, 16, 10, 7, 1, 2, 3, 7, 13, 19, 25, 28, 25, 19, 13, 7, 3, 2, 1, 3, 5, 8, 14, 20, 25, 27, 25, 20, 14, 8, 5, 3, 3, 7, 20, 52, 114, 213, 333, 436, 477, 436, 333, 213, 114, 52, 20, 7, 3, 1, 1, 3, 6, 11, 18, 23, 25, 23, 18, 11, 6, 3, 1, 1, 3, 3, 4, 5, 9, 14, 21, 26, 28, 26, 21, 14, 9, 5, 4, 3, 3, 6, 9, 14, 21, 26, 28, 26, 21, 14, 9, 6, 5, 10, 24, 58, 126, 234, 365, 477, 521, 477, 365, 234, 126, 58, 24, 10, 5, 2, 2, 2, 4, 7, 12, 18, 23, 25, 23, 18, 12, 7, 4, 2, 2, 2, 4, 4, 6, 9, 15, 21, 26, 28, 26, 21, 15, 9, 6, 4, 4, 6, 9, 14, 19, 24, 26, 24, 19, 14, 9, 6, 5, 5, 7, 10, 15, 21, 26, 28, 26, 21, 15, 10, 7, 5, 5, 1, 2, 3, 7, 12, 18, 24, 26, 24, 18, 12, 7, 3, 2, 1, 1, 3, 6, 12, 18, 23, 26, 23, 18, 12, 6, 3, 1, 5, 7, 10, 16, 22, 27, 29, 27, 22, 16, 10, 7, 5, 56, 124, 232, 364, 476, 521, 476, 364, 232, 124, 56, 6, 11, 25, 60, 129, 239, 372, 486, 531, 486, 372, 239, 129, 60, 25, 11, 6, 8, 22, 56, 123, 230, 360, 471, 515, 471, 360, 230, 123, 56, 22, 8, 4, 4, 4, 6, 9, 14, 20, 25, 27, 25, 20, 14, 9, 6, 4, 4, 4, 4, 4, 6, 9, 14, 20, 25, 27, 25, 20, 14, 9, 6, 4, 4, 5, 5, 5, 7, 10, 15, 22, 27, 29, 27, 22, 15, 10, 7, 5, 5, 5, 3, 5, 8, 13, 19, 24, 27, 24, 19, 13, 8, 5, 3, 3, 6, 11, 17, 23, 25, 23, 17, 11, 6, 3, 4, 8, 21, 52, 114, 212, 331, 433, 474, 433, 331, 212, 114, 52, 21, 8, 4, 4, 7, 13, 19, 25, 27, 25, 19, 13, 7, 4, 5, 9, 14, 20, 26, 28, 26, 20, 14, 9, 5, 4, 7, 12, 18, 23, 25, 23, 18, 12, 7, 4, 56, 126, 236, 370, 485, 530, 485, 370, 236, 126, 56, 3, 4, 5, 9, 14, 21, 27, 29, 27, 21, 14, 9, 5, 4, 3, 3, 7, 12, 19, 25, 27, 25, 19, 12, 7, 3, 1, 1, 3, 6, 12, 18, 23, 26, 23, 18, 12, 6, 3, 1, 1, 4, 5, 9, 15, 22, 27, 30, 27, 22, 15, 9, 5, 4, 4, 4, 5, 6, 10, 16, 22, 28, 31, 28, 22, 16, 10, 6, 5, 4, 4],
					T: [1, 1, 2, 3, 5, 8, 10, 11, 10, 8, 5, 3, 2, 1, 1, 1, 1, 1, 2, 3, 5, 8, 10, 11, 10, 8, 5, 3, 2, 1, 1, 1, 4, 4, 4, 5, 6, 8, 10, 13, 14, 13, 10, 8, 6, 5, 4, 4, 4, 3, 5, 7, 9, 11, 12, 11, 9, 7, 5, 3, 2, 3, 4, 6, 8, 10, 11, 10, 8, 6, 4, 3, 2, 1, 1, 2, 3, 5, 7, 10, 10, 10, 7, 5, 3, 2, 1, 1, 2, 3, 5, 8, 10, 11, 10, 8, 5, 3, 2, 2, 2, 4, 6, 8, 10, 11, 10, 8, 6, 4, 2, 2, 1, 3, 5, 7, 9, 10, 9, 7, 5, 3, 1, 6, 19, 51, 114, 213, 334, 438, 479, 438, 334, 213, 114, 51, 19, 6, 6, 19, 51, 115, 215, 336, 440, 482, 440, 336, 215, 115, 51, 19, 6, 2, 6, 19, 51, 115, 215, 337, 441, 482, 441, 337, 215, 115, 51, 19, 6, 2, 2, 2, 2, 3, 4, 6, 9, 11, 12, 11, 9, 6, 4, 3, 2, 2, 2, 6, 7, 9, 12, 14, 15, 14, 12, 9, 7, 6, 1, 1, 1, 2, 3, 5, 7, 10, 10, 10, 7, 5, 3, 2, 1, 1, 1, 21, 54, 120, 224, 351, 459, 503, 459, 351, 224, 120, 54, 21, 1, 1, 2, 3, 5, 8, 10, 11, 10, 8, 5, 3, 2, 1, 1, 3, 3, 3, 5, 7, 9, 11, 12, 11, 9, 7, 5, 3, 3, 3, 1, 2, 3, 5, 7, 9, 10, 9, 7, 5, 3, 2, 1, 6, 19, 50, 111, 209, 327, 429, 469, 429, 327, 209, 111, 50, 19, 6, 5, 6, 7, 9, 12, 15, 15, 15, 12, 9, 7, 6, 5, 4, 5, 7, 10, 12, 13, 12, 10, 7, 5, 4, 3, 3, 4, 5, 7, 10, 12, 13, 12, 10, 7, 5, 4, 3, 3, 1, 2, 3, 5, 8, 10, 11, 10, 8, 5, 3, 2, 1, 1, 1, 3, 5, 7, 9, 10, 9, 7, 5, 3, 1, 1, 5, 5, 7, 9, 11, 13, 14, 13, 11, 9, 7, 5, 5, 3, 3, 3, 4, 5, 7, 10, 12, 13, 12, 10, 7, 5, 4, 3, 3, 3, 1, 1, 1, 2, 3, 5, 7, 10, 10, 10, 7, 5, 3, 2, 1, 1, 1, 2, 2, 3, 4, 6, 8, 11, 11, 11, 8, 6, 4, 3, 2, 2, 5, 9, 22, 52, 113, 210, 327, 427, 467, 427, 327, 210, 113, 52, 22, 9, 5, 57, 123, 227, 354, 462, 505, 462, 354, 227, 123, 57, 58, 125, 230, 359, 469, 512, 469, 359, 230, 125, 58, 4, 4, 4, 5, 6, 8, 11, 13, 14, 13, 11, 8, 6, 5, 4, 4, 4, 1, 3, 5, 7, 9, 10, 9, 7, 5, 3, 1, 4, 4, 6, 8, 10, 12, 13, 12, 10, 8, 6, 4, 4, 3, 7, 20, 52, 114, 213, 333, 436, 477, 436, 333, 213, 114, 52, 20, 7, 3, 2, 3, 4, 6, 9, 11, 12, 11, 9, 6, 4, 3, 2, 3, 4, 6, 9, 11, 12, 11, 9, 6, 4, 3, 3, 4, 5, 7, 10, 12, 13, 12, 10, 7, 5, 4, 3, 2, 7, 21, 56, 125, 235, 368, 482, 527, 482, 368, 235, 125, 56, 21, 7, 2, 2, 3, 5, 8, 10, 11, 10, 8, 5, 3, 2, 1, 1, 1, 1, 3, 5, 7, 9, 10, 9, 7, 5, 3, 1, 1, 1, 1, 1, 1, 2, 3, 5, 7, 10, 10, 10, 7, 5, 3, 2, 1, 1, 5, 6, 7, 9, 12, 14, 15, 14, 12, 9, 7, 6, 5, 6, 7, 9, 11, 14, 14, 14, 11, 9, 7, 6, 5, 6, 8, 11, 13, 14, 13, 11, 8, 6, 5, 3, 4, 5, 7, 10, 13, 13, 13, 10, 7, 5, 4, 3, 1, 1, 2, 3, 5, 7, 10, 10, 10, 7, 5, 3, 2, 1, 1, 1, 1, 1, 3, 5, 7, 9, 10, 9, 7, 5, 3, 1, 1, 1, 9, 22, 53, 115, 214, 333, 435, 476, 435, 333, 214, 115, 53, 22, 9, 5, 10, 24, 59, 128, 238, 371, 485, 531, 485, 371, 238, 128, 59, 24, 10, 5, 56, 120, 221, 344, 450, 492, 450, 344, 221, 120, 56, 1, 1, 1, 3, 5, 7, 9, 10, 9, 7, 5, 3, 1, 1, 1, 3, 4, 5, 7, 9, 11, 12, 11, 9, 7, 5, 4, 3, 2, 2, 2, 3, 4, 6, 8, 10, 11, 10, 8, 6, 4, 3, 2, 2, 2, 7, 21, 55, 122, 229, 359, 470, 514, 470, 359, 229, 122, 55, 21, 7, 3, 3, 3, 4, 5, 7, 10, 12, 13, 12, 10, 7, 5, 4, 3, 3, 3, 5, 6, 8, 11, 13, 14, 13, 11, 8, 6, 5, 4, 4, 4, 5, 6, 8, 11, 13, 14, 13, 11, 8, 6, 5, 4, 4, 4, 3, 8, 22, 56, 125, 232, 364, 476, 521, 476, 364, 232, 125, 56, 22, 8, 3, 4, 4, 5, 6, 8, 10, 12, 13, 12, 10, 8, 6, 5, 4, 4, 5, 6, 8, 10, 12, 13, 12, 10, 8, 6, 5, 5, 5, 6, 7, 9, 11, 14, 14, 14, 11, 9, 7, 6, 5, 5, 1, 1, 1, 3, 5, 7, 9, 10, 9, 7, 5, 3, 1, 1, 1, 1, 2, 3, 5, 7, 10, 11, 10, 7, 5, 3, 2, 1, 5, 5, 7, 9, 11, 13, 14, 13, 11, 9, 7, 5, 5, 3, 4, 6, 8, 10, 11, 10, 8, 6, 4, 3, 5, 5, 5, 5, 7, 9, 11, 13, 14, 13, 11, 9, 7, 5, 5, 5, 5, 2, 2, 2, 4, 6, 8, 10, 11, 10, 8, 6, 4, 2, 2, 2, 5, 9, 21, 52, 112, 207, 323, 422, 461, 422, 323, 207, 112, 52, 21, 9, 5, 9, 22, 54, 118, 218, 340, 445, 486, 445, 340, 218, 118, 54, 22, 9, 6, 10, 23, 53, 113, 209, 325, 425, 464, 425, 325, 209, 113, 53, 23, 10, 6, 3, 4, 5, 7, 9, 11, 12, 11, 9, 7, 5, 4, 3, 2, 3, 5, 7, 10, 10, 10, 7, 5, 3, 2, 3, 3, 3, 4, 5, 7, 10, 12, 13, 12, 10, 7, 5, 4, 3, 3, 3, 51, 113, 212, 331, 433, 474, 433, 331, 212, 113, 51, 3, 5, 7, 9, 11, 12, 11, 9, 7, 5, 3, 3, 4, 6, 9, 11, 12, 11, 9, 6, 4, 3, 2, 3, 5, 8, 10, 11, 10, 8, 5, 3, 2, 8, 21, 53, 116, 216, 338, 441, 483, 441, 338, 216, 116, 53, 21, 8, 2, 3, 5, 7, 9, 10, 9, 7, 5, 3, 2, 1, 1, 1, 3, 5, 7, 9, 10, 9, 7, 5, 3, 1, 1, 1, 3, 4, 5, 7, 10, 13, 13, 13, 10, 7, 5, 4, 3, 4, 4, 4, 5, 6, 8, 11, 14, 14, 14, 11, 8, 6, 5, 4, 4, 4],
					peak: [7, 23, 40, 54, 66, 80, 93, 105, 117, 130, 145, 161, 178, 192, 206, 221, 235, 250, 264, 278, 292, 304, 317, 331, 344, 357, 372, 389, 405, 421, 435, 446, 460, 474, 486, 501, 516, 528, 540, 555, 569, 583, 599, 613, 625, 636, 648, 662, 677, 692, 708, 722, 735, 749, 764, 780, 796, 810, 824, 841, 857, 870, 883, 898, 912, 925, 937, 951, 967, 983, 999, 1015, 1030, 1042, 1056, 1070, 1081, 1092, 1103, 1116, 1129, 1142, 1156, 1171]
				},
				index: 3,
				counter: 6,
				offset: 51,
				measureText: 74
			}, {
				id: "R1-0000-4567",
				fill: "rgb(255,102,255)",
				outline: "rgb(0,0,0)",
				dir: "right",
				offset: 82,
				gaps: [
					[65, 1],
					[84, 1]
				],
				sequence: "TAAACCCGGGTTTACGTACGTAAACCCGGGTTTACGTACGTAAACCCGGGTTTACGTACGTAAACCGGGTTTACGTACGTAAACCG",
				coordinate: 80,
				trace: {
					A: [3, 5, 12, 25, 45, 70, 92, 100, 92, 70, 45, 25, 12, 5, 3, 4, 9, 23, 59, 129, 240, 374, 489, 535, 489, 374, 240, 129, 59, 23, 9, 4, 8, 21, 51, 112, 209, 326, 427, 467, 427, 326, 209, 112, 51, 21, 8, 21, 55, 123, 231, 363, 475, 519, 475, 363, 231, 123, 55, 21, 12, 26, 48, 74, 97, 106, 97, 74, 48, 26, 12, 1, 2, 5, 11, 25, 46, 73, 95, 104, 95, 73, 46, 25, 11, 5, 2, 1, 5, 12, 26, 49, 77, 100, 109, 100, 77, 49, 26, 12, 5, 12, 26, 48, 75, 98, 107, 98, 75, 48, 26, 12, 2, 4, 10, 22, 42, 65, 85, 93, 85, 65, 42, 22, 10, 4, 2, 14, 26, 45, 68, 87, 95, 87, 68, 45, 26, 14, 15, 28, 48, 73, 95, 103, 95, 73, 48, 28, 15, 1, 2, 5, 12, 26, 48, 75, 98, 107, 98, 75, 48, 26, 12, 5, 2, 1, 16, 29, 51, 78, 101, 110, 101, 78, 51, 29, 16, 2, 7, 20, 53, 119, 223, 349, 457, 500, 457, 349, 223, 119, 53, 20, 7, 2, 12, 25, 47, 74, 96, 105, 96, 74, 47, 25, 12, 6, 13, 25, 46, 70, 91, 99, 91, 70, 46, 25, 13, 6, 4, 7, 14, 28, 49, 76, 99, 108, 99, 76, 49, 28, 14, 7, 4, 20, 52, 117, 220, 345, 451, 494, 451, 345, 220, 117, 52, 20, 7, 14, 27, 48, 74, 95, 104, 95, 74, 48, 27, 14, 7, 8, 15, 29, 52, 79, 102, 112, 102, 79, 52, 29, 15, 8, 12, 25, 44, 68, 88, 96, 88, 68, 44, 25, 12, 7, 21, 54, 122, 228, 358, 469, 513, 469, 358, 228, 122, 54, 21, 7, 54, 117, 218, 340, 445, 487, 445, 340, 218, 117, 54, 49, 109, 204, 319, 417, 456, 417, 319, 204, 109, 49, 5, 7, 14, 27, 48, 73, 94, 103, 94, 73, 48, 27, 14, 7, 5, 15, 27, 47, 71, 92, 100, 92, 71, 47, 27, 15, 1, 2, 4, 10, 22, 41, 65, 85, 93, 85, 65, 41, 22, 10, 4, 2, 1, 6, 13, 27, 50, 78, 102, 111, 102, 78, 50, 27, 13, 6, 11, 24, 45, 70, 91, 100, 91, 70, 45, 24, 11, 5, 11, 24, 43, 67, 87, 95, 87, 67, 43, 24, 11, 5, 8, 14, 26, 45, 68, 88, 96, 88, 68, 45, 26, 14, 8, 12, 26, 47, 72, 94, 103, 94, 72, 47, 26, 12, 7, 13, 26, 45, 69, 89, 97, 89, 69, 45, 26, 13, 7, 4, 9, 24, 59, 130, 243, 379, 496, 543, 496, 379, 243, 130, 59, 24, 9, 4, 15, 29, 52, 80, 103, 113, 103, 80, 52, 29, 15, 4, 7, 14, 28, 51, 78, 102, 111, 102, 78, 51, 28, 14, 7, 4, 12, 26, 48, 75, 98, 107, 98, 75, 48, 26, 12, 23, 57, 123, 228, 356, 466, 509, 466, 356, 228, 123, 57, 23, 12, 26, 48, 74, 97, 105, 97, 74, 48, 26, 12, 8, 15, 27, 47, 71, 92, 100, 92, 71, 47, 27, 15, 8, 14, 28, 49, 75, 98, 106, 98, 75, 49, 28, 14, 56, 121, 224, 350, 458, 500, 458, 350, 224, 121, 56, 9, 21, 52, 112, 208, 324, 423, 463, 423, 324, 208, 112, 52, 21, 9, 2, 7, 20, 54, 120, 225, 353, 463, 506, 463, 353, 225, 120, 54, 20, 7, 2, 3, 4, 6, 13, 26, 46, 71, 92, 100, 92, 71, 46, 26, 13, 6, 4, 3, 4, 5, 7, 13, 25, 44, 68, 88, 95, 88, 68, 44, 25, 13, 7, 5, 4, 4, 6, 12, 25, 45, 69, 89, 97, 89, 69, 45, 25, 12, 6, 4, 1, 2, 4, 10, 22, 42, 65, 85, 93, 85, 65, 42, 22, 10, 4, 2, 1, 11, 24, 43, 67, 87, 95, 87, 67, 43, 24, 11, 4, 11, 23, 43, 68, 89, 97, 89, 68, 43, 23, 11, 4, 5, 6, 9, 16, 30, 53, 81, 104, 114, 104, 81, 53, 30, 16, 9, 6, 5, 12, 25, 44, 68, 88, 97, 88, 68, 44, 25, 12, 14, 29, 51, 79, 103, 112, 103, 79, 51, 29, 14, 10, 24, 59, 128, 237, 370, 483, 528, 483, 370, 237, 128, 59, 24, 10, 8, 15, 29, 51, 77, 100, 109, 100, 77, 51, 29, 15, 8, 15, 29, 51, 77, 99, 108, 99, 77, 51, 29, 15, 4, 6, 12, 24, 43, 66, 85, 93, 85, 66, 43, 24, 12, 6, 4, 23, 56, 119, 220, 343, 447, 489, 447, 343, 220, 119, 56, 23, 7, 13, 25, 45, 68, 88, 96, 88, 68, 45, 25, 13, 7, 8, 15, 28, 48, 73, 94, 102, 94, 73, 48, 28, 15, 8, 8, 14, 26, 45, 68, 87, 95, 87, 68, 45, 26, 14, 8, 4, 8, 21, 52, 114, 211, 330, 431, 472, 431, 330, 211, 114, 52, 21, 8, 4, 23, 58, 128, 239, 373, 488, 534, 488, 373, 239, 128, 58, 23, 11, 25, 59, 127, 234, 365, 476, 521, 476, 365, 234, 127, 59, 25, 11, 3, 6, 13, 27, 50, 78, 101, 111, 101, 78, 50, 27, 13, 6, 3, 5, 7, 14, 28, 49, 74, 96, 105, 96, 74, 49, 28, 14, 7, 5, 11, 23, 42, 65, 84, 92, 84, 65, 42, 23, 11, 6, 13, 27, 48, 75, 98, 107, 98, 75, 48, 27, 13, 6, 4, 5, 7, 14, 27, 48, 74, 96, 104, 96, 74, 48, 27, 14, 7, 5, 4, 5, 7, 13, 25, 44, 68, 87, 95, 87, 68, 44, 25, 13, 7, 5, 6, 8, 15, 28, 49, 75, 96, 105, 96, 75, 49, 28, 15, 8, 6, 1, 2, 4, 11, 23, 44, 68, 89, 97, 89, 68, 44, 23, 11, 4, 2, 1, 5, 10, 25, 61, 133, 246, 384, 502, 548, 502, 384, 246, 133, 61, 25, 10, 5, 2, 3, 5, 11, 24, 43, 67, 87, 95, 87, 67, 43, 24, 11, 5, 3, 2, 4, 5, 7, 13, 25, 44, 68, 88, 95, 88, 68, 44, 25, 13, 7, 5, 4, 4, 11, 24, 45, 71, 93, 101, 93, 71, 45, 24, 11, 4, 57, 124, 231, 361, 472, 517, 472, 361, 231, 124, 57, 3, 4, 7, 13, 27, 49, 75, 97, 106, 97, 75, 49, 27, 13, 7, 4, 3, 1, 2, 5, 11, 25, 46, 72, 94, 103, 94, 72, 46, 25, 11, 5, 2, 1, 5, 12, 25, 46, 72, 94, 102, 94, 72, 46, 25, 12, 5, 51, 112, 208, 326, 427, 467, 427, 326, 208, 112, 51, 58, 126, 233, 363, 475, 519, 475, 363, 233, 126, 58, 53, 113, 208, 324, 423, 462, 423, 324, 208, 113, 53, 11, 25, 46, 73, 95, 104, 95, 73, 46, 25, 11, 2, 4, 10, 22, 42, 65, 85, 93, 85, 65, 42, 22, 10, 4, 2, 12, 25, 46, 71, 93, 101, 93, 71, 46, 25, 12],
					C: [2, 4, 7, 14, 26, 39, 51, 56, 51, 39, 26, 14, 7, 4, 2, 3, 3, 5, 8, 15, 27, 41, 52, 57, 52, 41, 27, 15, 8, 5, 3, 3, 3, 5, 8, 15, 26, 39, 51, 55, 51, 39, 26, 15, 8, 5, 3, 2, 5, 11, 21, 33, 43, 47, 43, 33, 21, 11, 5, 2, 51, 112, 209, 326, 427, 467, 427, 326, 209, 112, 51, 2, 7, 22, 57, 129, 241, 378, 495, 541, 495, 378, 241, 129, 57, 22, 7, 2, 22, 58, 129, 242, 380, 497, 544, 497, 380, 242, 129, 58, 22, 6, 12, 22, 34, 44, 48, 44, 34, 22, 12, 6, 1, 2, 6, 12, 23, 35, 46, 50, 46, 35, 23, 12, 6, 2, 1, 10, 17, 28, 42, 53, 58, 53, 42, 28, 17, 10, 9, 15, 25, 36, 46, 50, 46, 36, 25, 15, 9, 1, 1, 3, 6, 13, 23, 36, 48, 52, 48, 36, 23, 13, 6, 3, 1, 1, 10, 16, 26, 38, 48, 52, 48, 38, 26, 16, 10, 1, 1, 3, 6, 13, 24, 38, 50, 54, 50, 38, 24, 13, 6, 3, 1, 1, 54, 121, 226, 355, 464, 508, 464, 355, 226, 121, 54, 5, 8, 15, 27, 41, 53, 57, 53, 41, 27, 15, 8, 5, 3, 4, 8, 14, 24, 36, 46, 50, 46, 36, 24, 14, 8, 4, 3, 2, 5, 12, 21, 33, 44, 48, 44, 33, 21, 12, 5, 2, 23, 57, 124, 230, 358, 468, 512, 468, 358, 230, 124, 57, 23, 5, 9, 15, 25, 38, 48, 52, 48, 38, 25, 15, 9, 5, 7, 13, 23, 35, 45, 49, 45, 35, 23, 13, 7, 1, 2, 6, 12, 22, 34, 45, 49, 45, 34, 22, 12, 6, 2, 1, 8, 15, 26, 40, 52, 56, 52, 40, 26, 15, 8, 7, 15, 26, 40, 52, 56, 52, 40, 26, 15, 7, 9, 22, 53, 116, 214, 334, 436, 477, 436, 334, 214, 116, 53, 22, 9, 53, 114, 210, 327, 427, 467, 427, 327, 210, 114, 53, 2, 7, 21, 57, 127, 238, 373, 488, 534, 488, 373, 238, 127, 57, 21, 7, 2, 4, 7, 14, 24, 37, 48, 53, 48, 37, 24, 14, 7, 4, 6, 13, 24, 37, 49, 53, 49, 37, 24, 13, 6, 3, 7, 13, 23, 35, 46, 50, 46, 35, 23, 13, 7, 3, 6, 10, 17, 27, 40, 51, 55, 51, 40, 27, 17, 10, 6, 7, 14, 26, 39, 51, 56, 51, 39, 26, 14, 7, 5, 8, 14, 24, 35, 45, 49, 45, 35, 24, 14, 8, 5, 3, 3, 4, 8, 15, 25, 38, 49, 53, 49, 38, 25, 15, 8, 4, 3, 3, 52, 112, 207, 323, 422, 462, 422, 323, 207, 112, 52, 3, 4, 8, 14, 25, 37, 48, 52, 48, 37, 25, 14, 8, 4, 3, 6, 13, 23, 36, 47, 52, 47, 36, 23, 13, 6, 5, 9, 15, 26, 39, 50, 54, 50, 39, 26, 15, 9, 5, 56, 123, 230, 359, 470, 515, 470, 359, 230, 123, 56, 6, 10, 16, 26, 38, 49, 53, 49, 38, 26, 16, 10, 6, 9, 16, 28, 42, 54, 58, 54, 42, 28, 16, 9, 8, 14, 24, 36, 46, 50, 46, 36, 24, 14, 8, 4, 5, 8, 14, 24, 35, 45, 49, 45, 35, 24, 14, 8, 5, 4, 1, 1, 3, 6, 13, 24, 37, 49, 53, 49, 37, 24, 13, 6, 3, 1, 1, 4, 9, 22, 56, 123, 229, 358, 468, 512, 468, 358, 229, 123, 56, 22, 9, 4, 5, 10, 23, 56, 121, 224, 350, 457, 500, 457, 350, 224, 121, 56, 23, 10, 5, 8, 21, 51, 112, 208, 325, 425, 465, 425, 325, 208, 112, 51, 21, 8, 1, 1, 3, 6, 13, 25, 38, 50, 55, 50, 38, 25, 13, 6, 3, 1, 1, 6, 13, 23, 35, 45, 49, 45, 35, 23, 13, 6, 2, 5, 12, 21, 33, 43, 47, 43, 33, 21, 12, 5, 2, 5, 5, 6, 10, 16, 27, 40, 50, 55, 50, 40, 27, 16, 10, 6, 5, 5, 7, 14, 23, 35, 46, 50, 46, 35, 23, 14, 7, 8, 15, 25, 38, 49, 54, 49, 38, 25, 15, 8, 4, 5, 8, 15, 24, 36, 46, 50, 46, 36, 24, 15, 8, 5, 4, 22, 52, 113, 210, 327, 428, 468, 428, 327, 210, 113, 52, 22, 10, 16, 27, 39, 50, 55, 50, 39, 27, 16, 10, 3, 4, 8, 14, 25, 38, 49, 53, 49, 38, 25, 14, 8, 4, 3, 7, 10, 18, 29, 43, 55, 59, 55, 43, 29, 18, 10, 7, 25, 61, 133, 246, 384, 502, 549, 502, 384, 246, 133, 61, 25, 7, 10, 17, 28, 41, 53, 57, 53, 41, 28, 17, 10, 7, 6, 9, 16, 25, 37, 47, 52, 47, 37, 25, 16, 9, 6, 3, 3, 4, 8, 14, 25, 37, 48, 52, 48, 37, 25, 14, 8, 4, 3, 3, 4, 7, 13, 23, 34, 44, 48, 44, 34, 23, 13, 7, 4, 5, 7, 10, 17, 28, 41, 53, 57, 53, 41, 28, 17, 10, 7, 5, 8, 23, 59, 131, 244, 382, 500, 547, 500, 382, 244, 131, 59, 23, 8, 10, 24, 60, 130, 241, 376, 492, 538, 492, 376, 241, 130, 60, 24, 10, 7, 13, 23, 35, 45, 49, 45, 35, 23, 13, 7, 3, 6, 13, 23, 35, 45, 49, 45, 35, 23, 13, 6, 3, 4, 4, 5, 9, 15, 25, 38, 48, 52, 48, 38, 25, 15, 9, 5, 4, 4, 4, 6, 9, 16, 27, 40, 52, 56, 52, 40, 27, 16, 9, 6, 4, 5, 7, 10, 17, 28, 42, 53, 58, 53, 42, 28, 17, 10, 7, 5, 1, 1, 3, 6, 13, 25, 39, 51, 55, 51, 39, 25, 13, 6, 3, 1, 1, 4, 4, 6, 9, 16, 27, 41, 52, 57, 52, 41, 27, 16, 9, 6, 4, 4, 3, 7, 20, 50, 111, 207, 324, 424, 463, 424, 324, 207, 111, 50, 20, 7, 3, 4, 4, 6, 9, 16, 28, 41, 53, 58, 53, 41, 28, 16, 9, 6, 4, 4, 2, 6, 12, 22, 34, 45, 49, 45, 34, 22, 12, 6, 2, 8, 15, 27, 40, 52, 57, 52, 40, 27, 15, 8, 4, 9, 24, 59, 130, 242, 378, 495, 541, 495, 378, 242, 130, 59, 24, 9, 4, 1, 1, 2, 5, 12, 22, 33, 44, 48, 44, 33, 22, 12, 5, 2, 1, 1, 4, 7, 14, 26, 39, 51, 56, 51, 39, 26, 14, 7, 4, 6, 12, 22, 34, 44, 48, 44, 34, 22, 12, 6, 8, 14, 24, 35, 45, 49, 45, 35, 24, 14, 8, 10, 16, 26, 38, 49, 53, 49, 38, 26, 16, 10, 54, 120, 225, 353, 462, 506, 462, 353, 225, 120, 54, 7, 21, 56, 125, 234, 367, 481, 526, 481, 367, 234, 125, 56, 21, 7, 7, 13, 24, 36, 47, 51, 47, 36, 24, 13, 7],
					G: [2, 2, 4, 7, 12, 18, 24, 26, 24, 18, 12, 7, 4, 2, 2, 3, 3, 3, 5, 8, 13, 19, 24, 26, 24, 19, 13, 8, 5, 3, 3, 3, 3, 3, 5, 8, 13, 19, 24, 26, 24, 19, 13, 8, 5, 3, 3, 1, 3, 6, 12, 18, 23, 26, 23, 18, 12, 6, 3, 1, 4, 8, 14, 20, 26, 29, 26, 20, 14, 8, 4, 1, 1, 2, 3, 7, 12, 19, 24, 27, 24, 19, 12, 7, 3, 2, 1, 1, 1, 3, 6, 11, 16, 21, 23, 21, 16, 11, 6, 3, 1, 49, 109, 203, 319, 417, 456, 417, 319, 203, 109, 49, 6, 19, 50, 113, 211, 330, 433, 473, 433, 330, 211, 113, 50, 19, 6, 56, 120, 221, 344, 449, 491, 449, 344, 221, 120, 56, 7, 11, 16, 22, 28, 30, 28, 22, 16, 11, 7, 1, 1, 1, 3, 6, 12, 18, 23, 25, 23, 18, 12, 6, 3, 1, 1, 1, 7, 10, 15, 21, 27, 29, 27, 21, 15, 10, 7, 1, 1, 2, 3, 7, 13, 20, 25, 28, 25, 20, 13, 7, 3, 2, 1, 1, 3, 6, 11, 18, 23, 25, 23, 18, 11, 6, 3, 21, 53, 117, 218, 340, 444, 486, 444, 340, 218, 117, 53, 21, 3, 4, 5, 9, 14, 21, 27, 29, 27, 21, 14, 9, 5, 4, 3, 1, 3, 6, 12, 18, 24, 26, 24, 18, 12, 6, 3, 1, 4, 6, 9, 14, 20, 25, 27, 25, 20, 14, 9, 6, 4, 21, 52, 112, 207, 323, 422, 461, 422, 323, 207, 112, 52, 21, 5, 9, 15, 22, 27, 30, 27, 22, 15, 9, 5, 1, 2, 3, 7, 12, 18, 24, 26, 24, 18, 12, 7, 3, 2, 1, 5, 8, 13, 19, 24, 26, 24, 19, 13, 8, 5, 4, 8, 13, 20, 26, 28, 26, 20, 13, 8, 4, 4, 4, 6, 9, 15, 21, 27, 29, 27, 21, 15, 9, 6, 4, 4, 7, 10, 15, 20, 25, 27, 25, 20, 15, 10, 7, 1, 1, 2, 3, 7, 13, 20, 26, 28, 26, 20, 13, 7, 3, 2, 1, 1, 19, 50, 110, 205, 321, 420, 460, 420, 321, 205, 110, 50, 19, 49, 109, 204, 320, 420, 459, 420, 320, 204, 109, 49, 20, 50, 111, 208, 325, 425, 465, 425, 325, 208, 111, 50, 20, 5, 7, 10, 15, 21, 26, 28, 26, 21, 15, 10, 7, 5, 4, 7, 12, 18, 23, 25, 23, 18, 12, 7, 4, 4, 6, 9, 15, 21, 27, 29, 27, 21, 15, 9, 6, 4, 3, 3, 3, 5, 8, 13, 18, 23, 25, 23, 18, 13, 8, 5, 3, 3, 3, 6, 10, 15, 22, 28, 30, 28, 22, 15, 10, 6, 8, 21, 52, 114, 211, 330, 432, 472, 432, 330, 211, 114, 52, 21, 8, 3, 7, 12, 19, 25, 27, 25, 19, 12, 7, 3, 4, 6, 10, 15, 21, 27, 29, 27, 21, 15, 10, 6, 4, 4, 8, 14, 20, 26, 29, 26, 20, 14, 8, 4, 24, 57, 122, 225, 350, 457, 499, 457, 350, 225, 122, 57, 24, 6, 10, 16, 22, 28, 30, 28, 22, 16, 10, 6, 6, 9, 15, 21, 27, 29, 27, 21, 15, 9, 6, 4, 4, 6, 9, 14, 20, 25, 27, 25, 20, 14, 9, 6, 4, 4, 1, 1, 2, 3, 7, 12, 19, 24, 27, 24, 19, 12, 7, 3, 2, 1, 1, 3, 3, 3, 5, 8, 14, 20, 25, 28, 25, 20, 14, 8, 5, 3, 3, 3, 4, 4, 5, 6, 10, 15, 22, 28, 30, 28, 22, 15, 10, 6, 5, 4, 4, 3, 3, 5, 8, 13, 19, 24, 26, 24, 19, 13, 8, 5, 3, 3, 2, 7, 22, 58, 129, 242, 379, 496, 543, 496, 379, 242, 129, 58, 22, 7, 2, 53, 117, 219, 342, 448, 490, 448, 342, 219, 117, 53, 20, 54, 121, 226, 355, 465, 508, 465, 355, 226, 121, 54, 20, 5, 5, 5, 7, 10, 15, 21, 26, 28, 26, 21, 15, 10, 7, 5, 5, 5, 5, 8, 14, 20, 25, 27, 25, 20, 14, 8, 5, 5, 9, 15, 21, 27, 30, 27, 21, 15, 9, 5, 4, 4, 6, 10, 15, 21, 27, 29, 27, 21, 15, 10, 6, 4, 4, 4, 6, 9, 14, 20, 25, 27, 25, 20, 14, 9, 6, 4, 53, 114, 210, 327, 426, 466, 426, 327, 210, 114, 53, 3, 4, 5, 9, 14, 21, 26, 29, 26, 21, 14, 9, 5, 4, 3, 5, 7, 10, 15, 21, 26, 28, 26, 21, 15, 10, 7, 5, 4, 6, 9, 15, 21, 26, 29, 26, 21, 15, 9, 6, 4, 26, 62, 134, 248, 386, 505, 552, 505, 386, 248, 134, 62, 26, 5, 7, 10, 15, 22, 27, 29, 27, 22, 15, 10, 7, 5, 3, 3, 3, 5, 8, 13, 19, 24, 26, 24, 19, 13, 8, 5, 3, 3, 3, 3, 5, 8, 13, 19, 24, 26, 24, 19, 13, 8, 5, 3, 5, 6, 7, 11, 16, 23, 29, 31, 29, 23, 16, 11, 7, 6, 5, 2, 3, 4, 8, 14, 20, 26, 29, 26, 20, 14, 8, 4, 3, 2, 4, 5, 6, 10, 16, 22, 28, 31, 28, 22, 16, 10, 6, 5, 4, 51, 112, 210, 328, 429, 469, 429, 328, 210, 112, 51, 23, 59, 130, 243, 380, 498, 545, 498, 380, 243, 130, 59, 23, 5, 9, 21, 51, 111, 206, 321, 419, 458, 419, 321, 206, 111, 51, 21, 9, 5, 4, 5, 6, 10, 16, 22, 28, 31, 28, 22, 16, 10, 6, 5, 4, 5, 5, 7, 10, 15, 20, 25, 27, 25, 20, 15, 10, 7, 5, 5, 1, 1, 1, 3, 6, 11, 18, 23, 25, 23, 18, 11, 6, 3, 1, 1, 1, 4, 4, 4, 6, 9, 14, 20, 26, 28, 26, 20, 14, 9, 6, 4, 4, 4, 2, 2, 2, 4, 7, 12, 18, 24, 26, 24, 18, 12, 7, 4, 2, 2, 2, 5, 9, 22, 54, 117, 217, 339, 443, 485, 443, 339, 217, 117, 54, 22, 9, 5, 2, 3, 7, 12, 19, 25, 27, 25, 19, 12, 7, 3, 2, 5, 9, 14, 21, 26, 29, 26, 21, 14, 9, 5, 3, 3, 3, 5, 8, 14, 20, 26, 28, 26, 20, 14, 8, 5, 3, 3, 3, 2, 7, 20, 54, 121, 226, 354, 464, 507, 464, 354, 226, 121, 54, 20, 7, 2, 2, 4, 7, 13, 19, 24, 27, 24, 19, 13, 7, 4, 2, 4, 7, 12, 18, 23, 25, 23, 18, 12, 7, 4, 6, 9, 15, 21, 26, 29, 26, 21, 15, 9, 6, 7, 11, 16, 22, 28, 30, 28, 22, 16, 11, 7, 3, 6, 11, 16, 21, 23, 21, 16, 11, 6, 3, 1, 2, 3, 7, 12, 19, 25, 27, 25, 19, 12, 7, 3, 2, 1, 50, 110, 206, 322, 422, 461, 422, 322, 206, 110, 50],
					T: [7, 20, 51, 113, 212, 331, 433, 474, 433, 331, 212, 113, 51, 20, 7, 3, 3, 3, 4, 5, 7, 9, 12, 12, 12, 9, 7, 5, 4, 3, 3, 3, 3, 3, 3, 5, 7, 9, 11, 12, 11, 9, 7, 5, 3, 3, 3, 1, 2, 3, 5, 8, 10, 11, 10, 8, 5, 3, 2, 1, 3, 4, 6, 9, 11, 12, 11, 9, 6, 4, 3, 1, 1, 1, 2, 3, 5, 8, 11, 11, 11, 8, 5, 3, 2, 1, 1, 1, 1, 1, 3, 5, 7, 9, 10, 9, 7, 5, 3, 1, 1, 2, 3, 5, 7, 10, 11, 10, 7, 5, 3, 2, 1, 1, 1, 3, 5, 7, 9, 10, 9, 7, 5, 3, 1, 1, 1, 5, 7, 9, 11, 13, 14, 13, 11, 9, 7, 5, 56, 120, 221, 343, 448, 490, 448, 343, 221, 120, 56, 2, 7, 21, 57, 127, 239, 374, 490, 536, 490, 374, 239, 127, 57, 21, 7, 2, 58, 125, 231, 360, 470, 514, 470, 360, 231, 125, 58, 1, 1, 1, 2, 3, 5, 7, 9, 10, 9, 7, 5, 3, 2, 1, 1, 1, 2, 3, 5, 7, 9, 10, 9, 7, 5, 3, 2, 3, 4, 5, 7, 10, 12, 13, 12, 10, 7, 5, 4, 3, 8, 21, 52, 113, 211, 329, 431, 471, 431, 329, 211, 113, 52, 21, 8, 1, 1, 3, 5, 7, 9, 10, 9, 7, 5, 3, 1, 1, 4, 5, 6, 8, 10, 13, 13, 13, 10, 8, 6, 5, 4, 4, 5, 6, 8, 11, 13, 14, 13, 11, 8, 6, 5, 4, 60, 131, 244, 381, 499, 545, 499, 381, 244, 131, 60, 1, 1, 1, 3, 5, 7, 9, 10, 9, 7, 5, 3, 1, 1, 1, 4, 5, 7, 9, 12, 13, 12, 9, 7, 5, 4, 3, 4, 6, 8, 11, 11, 11, 8, 6, 4, 3, 4, 4, 4, 6, 8, 10, 12, 13, 12, 10, 8, 6, 4, 4, 4, 5, 7, 9, 11, 13, 14, 13, 11, 9, 7, 5, 1, 1, 1, 2, 3, 5, 8, 10, 11, 10, 8, 5, 3, 2, 1, 1, 1, 2, 3, 4, 6, 9, 11, 12, 11, 9, 6, 4, 3, 2, 2, 3, 5, 8, 10, 11, 10, 8, 5, 3, 2, 2, 2, 4, 6, 8, 10, 11, 10, 8, 6, 4, 2, 2, 24, 57, 123, 228, 355, 463, 506, 463, 355, 228, 123, 57, 24, 57, 126, 236, 369, 483, 528, 483, 369, 236, 126, 57, 24, 60, 130, 242, 377, 493, 539, 493, 377, 242, 130, 60, 24, 3, 3, 3, 4, 5, 7, 9, 12, 13, 12, 9, 7, 5, 4, 3, 3, 3, 5, 6, 8, 10, 12, 13, 12, 10, 8, 6, 5, 3, 3, 4, 5, 7, 10, 12, 13, 12, 10, 7, 5, 4, 3, 3, 53, 119, 222, 348, 456, 499, 456, 348, 222, 119, 53, 4, 5, 6, 8, 10, 13, 13, 13, 10, 8, 6, 5, 4, 2, 4, 6, 8, 10, 11, 10, 8, 6, 4, 2, 5, 6, 7, 9, 11, 14, 14, 14, 11, 9, 7, 6, 5, 56, 121, 224, 350, 457, 500, 457, 350, 224, 121, 56, 5, 6, 8, 10, 12, 13, 12, 10, 8, 6, 5, 4, 4, 5, 6, 8, 11, 13, 14, 13, 11, 8, 6, 5, 4, 4, 1, 1, 1, 2, 3, 5, 8, 10, 11, 10, 8, 5, 3, 2, 1, 1, 1, 3, 3, 3, 4, 5, 7, 10, 12, 13, 12, 10, 7, 5, 4, 3, 3, 3, 4, 4, 4, 5, 6, 8, 11, 13, 14, 13, 11, 8, 6, 5, 4, 4, 4, 3, 3, 3, 5, 7, 9, 11, 12, 11, 9, 7, 5, 3, 3, 3, 1, 1, 1, 2, 3, 5, 7, 10, 10, 10, 7, 5, 3, 2, 1, 1, 1, 3, 4, 6, 8, 10, 11, 10, 8, 6, 4, 3, 1, 2, 3, 5, 8, 10, 11, 10, 8, 5, 3, 2, 1, 6, 11, 25, 59, 127, 235, 366, 478, 522, 478, 366, 235, 127, 59, 25, 11, 6, 59, 128, 239, 373, 488, 534, 488, 373, 239, 128, 59, 55, 121, 225, 351, 459, 502, 459, 351, 225, 121, 55, 4, 4, 5, 6, 8, 11, 13, 14, 13, 11, 8, 6, 5, 4, 4, 4, 5, 6, 8, 11, 13, 14, 13, 11, 8, 6, 5, 4, 6, 7, 9, 11, 14, 14, 14, 11, 9, 7, 6, 9, 22, 56, 123, 229, 358, 468, 512, 468, 358, 229, 123, 56, 22, 9, 5, 5, 7, 9, 11, 13, 14, 13, 11, 9, 7, 5, 5, 4, 5, 6, 8, 10, 13, 13, 13, 10, 8, 6, 5, 4, 5, 6, 7, 9, 11, 14, 14, 14, 11, 9, 7, 6, 5, 22, 53, 113, 208, 323, 422, 461, 422, 323, 208, 113, 53, 22, 3, 3, 3, 4, 5, 7, 10, 12, 13, 12, 10, 7, 5, 4, 3, 3, 3, 3, 4, 5, 7, 10, 12, 13, 12, 10, 7, 5, 4, 3, 5, 5, 6, 7, 9, 12, 14, 15, 14, 12, 9, 7, 6, 5, 5, 2, 2, 3, 4, 6, 8, 11, 11, 11, 8, 6, 4, 3, 2, 2, 4, 4, 5, 6, 8, 10, 12, 13, 12, 10, 8, 6, 5, 4, 4, 3, 4, 6, 9, 11, 12, 11, 9, 6, 4, 3, 2, 3, 4, 6, 9, 11, 12, 11, 9, 6, 4, 3, 2, 4, 4, 4, 4, 6, 8, 10, 12, 13, 12, 10, 8, 6, 4, 4, 4, 4, 10, 25, 61, 133, 247, 385, 504, 551, 504, 385, 247, 133, 61, 25, 10, 11, 24, 57, 123, 228, 354, 463, 506, 463, 354, 228, 123, 57, 24, 11, 2, 6, 20, 52, 116, 218, 341, 447, 489, 447, 341, 218, 116, 52, 20, 6, 2, 4, 4, 4, 5, 6, 8, 11, 13, 14, 13, 11, 8, 6, 5, 4, 4, 4, 2, 2, 2, 3, 4, 6, 9, 11, 12, 11, 9, 6, 4, 3, 2, 2, 2, 4, 4, 4, 5, 6, 8, 11, 14, 14, 14, 11, 8, 6, 5, 4, 4, 4, 21, 54, 122, 228, 358, 469, 513, 469, 358, 228, 122, 54, 21, 4, 5, 7, 9, 12, 12, 12, 9, 7, 5, 4, 3, 3, 3, 4, 5, 7, 9, 12, 12, 12, 9, 7, 5, 4, 3, 3, 3, 1, 1, 1, 1, 3, 5, 7, 9, 10, 9, 7, 5, 3, 1, 1, 1, 1, 19, 49, 108, 202, 316, 414, 453, 414, 316, 202, 108, 49, 19, 3, 4, 6, 8, 11, 11, 11, 8, 6, 4, 3, 5, 6, 8, 11, 13, 14, 13, 11, 8, 6, 5, 6, 7, 9, 12, 14, 15, 14, 12, 9, 7, 6, 2, 3, 5, 7, 9, 10, 9, 7, 5, 3, 2, 1, 1, 2, 3, 5, 7, 9, 10, 9, 7, 5, 3, 2, 1, 1, 3, 4, 6, 8, 11, 11, 11, 8, 6, 4, 3],
					peak: [7, 23, 39, 53, 65, 79, 94, 106, 119, 132, 143, 157, 171, 185, 199, 211, 225, 239, 252, 265, 277, 290, 303, 314, 327, 340, 354, 369, 381, 393, 406, 418, 430, 445, 459, 472, 485, 497, 509, 521, 533, 544, 557, 573, 590, 607, 623, 639, 653, 665, 680, 694, 705, 718, 732, 744, 757, 771, 784, 797, 810, 825, 840, 854, 869, 884, 897, 909, 924, 940, 955, 971, 988, 1005, 1022, 1037, 1049, 1063, 1080, 1095, 1107, 1118, 1129, 1140, 1153, 1166]
				},
				index: 4,
				counter: 7,
				measureText: 74
			}, {
				id: "R1-0000-5678",
				fill: "rgb(51,255,255)",
				outline: "rgb(0,0,0)",
				dir: "right",
				offset: 126,
				gaps: [
					[5, 1],
					[58, 1]
				],
				sequence: "CCCGGTTTACGTACGTAAACCCGGGTTTACGTACGTAAACCCGGGTTTACGTACGTAACCCGGGTTTAAACC",
				coordinate: 150,
				trace: {
					A: [14, 26, 46, 70, 91, 99, 91, 70, 46, 26, 14, 6, 12, 26, 47, 74, 96, 105, 96, 74, 47, 26, 12, 6, 4, 10, 23, 43, 67, 87, 95, 87, 67, 43, 23, 10, 4, 4, 10, 22, 42, 65, 85, 93, 85, 65, 42, 22, 10, 4, 13, 26, 48, 73, 95, 104, 95, 73, 48, 26, 13, 6, 9, 16, 30, 52, 78, 101, 111, 101, 78, 52, 30, 16, 9, 6, 13, 26, 46, 71, 92, 101, 92, 71, 46, 26, 13, 1, 2, 4, 11, 24, 45, 70, 92, 100, 92, 70, 45, 24, 11, 4, 2, 1, 52, 115, 213, 332, 435, 475, 435, 332, 213, 115, 52, 4, 5, 7, 13, 25, 44, 67, 87, 95, 87, 67, 44, 25, 13, 7, 5, 4, 13, 27, 49, 77, 100, 109, 100, 77, 49, 27, 13, 6, 12, 25, 44, 68, 88, 96, 88, 68, 44, 25, 12, 6, 24, 60, 130, 242, 377, 493, 539, 493, 377, 242, 130, 60, 24, 12, 25, 44, 68, 89, 97, 89, 68, 44, 25, 12, 4, 7, 13, 27, 48, 74, 96, 105, 96, 74, 48, 27, 13, 7, 4, 4, 6, 13, 25, 45, 69, 90, 98, 90, 69, 45, 25, 13, 6, 4, 3, 7, 21, 53, 117, 218, 341, 446, 488, 446, 341, 218, 117, 53, 21, 7, 3, 9, 23, 58, 127, 237, 370, 483, 529, 483, 370, 237, 127, 58, 23, 9, 57, 123, 228, 355, 464, 508, 464, 355, 228, 123, 57, 3, 5, 12, 26, 47, 73, 95, 103, 95, 73, 47, 26, 12, 5, 3, 4, 10, 22, 41, 64, 84, 92, 84, 64, 41, 22, 10, 4, 10, 22, 41, 63, 83, 91, 83, 63, 41, 22, 10, 1, 2, 4, 10, 22, 41, 64, 83, 91, 83, 64, 41, 22, 10, 4, 2, 1, 4, 5, 8, 14, 28, 50, 76, 99, 108, 99, 76, 50, 28, 14, 8, 5, 4, 4, 6, 13, 25, 45, 70, 90, 99, 90, 70, 45, 25, 13, 6, 4, 10, 22, 41, 64, 84, 92, 84, 64, 41, 22, 10, 4, 11, 24, 44, 69, 90, 99, 90, 69, 44, 24, 11, 4, 3, 6, 12, 26, 48, 74, 97, 105, 97, 74, 48, 26, 12, 6, 3, 52, 116, 216, 338, 443, 484, 443, 338, 216, 116, 52, 5, 6, 8, 15, 29, 50, 76, 98, 107, 98, 76, 50, 29, 15, 8, 6, 5, 5, 11, 25, 46, 72, 94, 103, 94, 72, 46, 25, 11, 5, 11, 25, 46, 72, 94, 103, 94, 72, 46, 25, 11, 10, 23, 56, 121, 223, 348, 455, 498, 455, 348, 223, 121, 56, 23, 10, 2, 3, 6, 13, 27, 50, 77, 100, 109, 100, 77, 50, 27, 13, 6, 3, 2, 3, 6, 13, 26, 48, 75, 98, 107, 98, 75, 48, 26, 13, 6, 3, 1, 2, 5, 11, 25, 46, 72, 95, 104, 95, 72, 46, 25, 11, 5, 2, 1, 11, 24, 58, 124, 229, 357, 466, 509, 466, 357, 229, 124, 58, 24, 11, 21, 54, 119, 223, 349, 457, 500, 457, 349, 223, 119, 54, 21, 19, 49, 109, 202, 317, 414, 453, 414, 317, 202, 109, 49, 19, 2, 3, 6, 13, 27, 50, 78, 101, 110, 101, 78, 50, 27, 13, 6, 3, 2, 1, 2, 4, 10, 22, 41, 64, 84, 92, 84, 64, 41, 22, 10, 4, 2, 1, 4, 5, 7, 13, 25, 44, 67, 87, 95, 87, 67, 44, 25, 13, 7, 5, 4, 6, 8, 15, 28, 48, 73, 94, 102, 94, 73, 48, 28, 15, 8, 6, 10, 23, 42, 66, 86, 94, 86, 66, 42, 23, 10, 5, 11, 23, 42, 65, 85, 93, 85, 65, 42, 23, 11, 5, 4, 6, 12, 25, 44, 68, 88, 96, 88, 68, 44, 25, 12, 6, 4, 7, 13, 27, 48, 75, 97, 106, 97, 75, 48, 27, 13, 7, 3, 6, 13, 27, 50, 77, 101, 110, 101, 77, 50, 27, 13, 6, 3, 58, 129, 241, 377, 494, 540, 494, 377, 241, 129, 58, 5, 12, 26, 48, 75, 99, 108, 99, 75, 48, 26, 12, 5, 5, 12, 25, 45, 70, 92, 100, 92, 70, 45, 25, 12, 5, 5, 6, 8, 15, 28, 49, 74, 96, 104, 96, 74, 49, 28, 15, 8, 6, 5, 59, 129, 241, 376, 492, 538, 492, 376, 241, 129, 59, 1, 2, 4, 11, 24, 44, 69, 91, 99, 91, 69, 44, 24, 11, 4, 2, 1, 6, 8, 14, 27, 46, 69, 90, 98, 90, 69, 46, 27, 14, 8, 6, 16, 29, 51, 78, 100, 109, 100, 78, 51, 29, 16, 5, 10, 24, 58, 126, 233, 363, 475, 519, 475, 363, 233, 126, 58, 24, 10, 5, 58, 129, 243, 380, 498, 545, 498, 380, 243, 129, 58, 12, 24, 45, 69, 90, 98, 90, 69, 45, 24, 12, 8, 15, 28, 48, 73, 94, 102, 94, 73, 48, 28, 15, 8, 2, 5, 12, 25, 47, 73, 96, 105, 96, 73, 47, 25, 12, 5, 2, 15, 29, 51, 78, 101, 110, 101, 78, 51, 29, 15, 8, 15, 29, 51, 78, 102, 111, 102, 78, 51, 29, 15, 8, 11, 24, 44, 67, 88, 96, 88, 67, 44, 24, 11, 10, 23, 42, 66, 86, 94, 86, 66, 42, 23, 10, 5, 6, 8, 15, 28, 48, 73, 94, 103, 94, 73, 48, 28, 15, 8, 6, 5, 8, 14, 27, 46, 70, 90, 98, 90, 70, 46, 27, 14, 8, 25, 60, 129, 239, 372, 486, 532, 486, 372, 239, 129, 60, 25, 9, 21, 51, 110, 204, 319, 416, 455, 416, 319, 204, 110, 51, 21, 9, 56, 119, 220, 343, 448, 489, 448, 343, 220, 119, 56, 3, 4, 7, 14, 28, 50, 78, 101, 110, 101, 78, 50, 28, 14, 7, 4, 3, 14, 28, 51, 79, 103, 112, 103, 79, 51, 28, 14],
					C: [53, 114, 212, 330, 431, 472, 431, 330, 212, 114, 53, 20, 52, 115, 215, 336, 440, 481, 440, 336, 215, 115, 52, 20, 19, 49, 110, 206, 323, 423, 463, 423, 323, 206, 110, 49, 19, 2, 6, 12, 23, 35, 46, 51, 46, 35, 23, 12, 6, 2, 8, 14, 25, 37, 48, 52, 48, 37, 25, 14, 8, 5, 7, 10, 17, 28, 42, 53, 58, 53, 42, 28, 17, 10, 7, 5, 8, 14, 25, 38, 49, 53, 49, 38, 25, 14, 8, 1, 1, 2, 5, 11, 21, 32, 42, 46, 42, 32, 21, 11, 5, 2, 1, 1, 8, 14, 25, 37, 48, 52, 48, 37, 25, 14, 8, 5, 9, 22, 52, 113, 209, 326, 426, 465, 426, 326, 209, 113, 52, 22, 9, 5, 6, 12, 22, 33, 43, 47, 43, 33, 22, 12, 6, 4, 7, 13, 23, 35, 44, 48, 44, 35, 23, 13, 7, 4, 6, 9, 16, 27, 40, 52, 56, 52, 40, 27, 16, 9, 6, 50, 110, 204, 319, 417, 455, 417, 319, 204, 110, 50, 3, 5, 8, 15, 26, 40, 51, 56, 51, 40, 26, 15, 8, 5, 3, 3, 4, 8, 14, 24, 37, 48, 52, 48, 37, 24, 14, 8, 4, 3, 2, 2, 3, 6, 12, 22, 33, 43, 47, 43, 33, 22, 12, 6, 3, 2, 2, 3, 4, 8, 14, 25, 38, 49, 53, 49, 38, 25, 14, 8, 4, 3, 8, 14, 24, 35, 45, 49, 45, 35, 24, 14, 8, 7, 21, 53, 118, 221, 345, 452, 494, 452, 345, 221, 118, 53, 21, 7, 19, 49, 110, 205, 322, 421, 461, 421, 322, 205, 110, 49, 19, 57, 127, 238, 373, 489, 535, 489, 373, 238, 127, 57, 1, 1, 3, 6, 13, 24, 38, 49, 54, 49, 38, 24, 13, 6, 3, 1, 1, 4, 4, 6, 9, 16, 27, 40, 51, 56, 51, 40, 27, 16, 9, 6, 4, 4, 3, 5, 8, 15, 26, 40, 51, 56, 51, 40, 26, 15, 8, 5, 3, 6, 13, 24, 38, 50, 54, 50, 38, 24, 13, 6, 3, 6, 13, 24, 37, 48, 53, 48, 37, 24, 13, 6, 3, 2, 4, 7, 14, 25, 38, 50, 54, 50, 38, 25, 14, 7, 4, 2, 7, 13, 23, 36, 46, 50, 46, 36, 23, 13, 7, 6, 11, 26, 62, 134, 248, 387, 505, 553, 505, 387, 248, 134, 62, 26, 11, 6, 2, 6, 12, 22, 34, 45, 49, 45, 34, 22, 12, 6, 2, 6, 12, 23, 35, 46, 50, 46, 35, 23, 12, 6, 4, 5, 9, 15, 26, 38, 49, 54, 49, 38, 26, 15, 9, 5, 4, 3, 8, 22, 58, 128, 239, 374, 489, 535, 489, 374, 239, 128, 58, 22, 8, 3, 2, 3, 7, 14, 24, 37, 48, 52, 48, 37, 24, 14, 7, 3, 2, 1, 1, 3, 6, 13, 24, 38, 49, 54, 49, 38, 24, 13, 6, 3, 1, 1, 5, 7, 10, 17, 28, 41, 53, 57, 53, 41, 28, 17, 10, 7, 5, 3, 7, 13, 24, 37, 48, 52, 48, 37, 24, 13, 7, 3, 3, 6, 12, 22, 33, 43, 47, 43, 33, 22, 12, 6, 3, 3, 7, 21, 53, 118, 221, 345, 452, 494, 452, 345, 221, 118, 53, 21, 7, 3, 2, 6, 18, 49, 109, 204, 320, 419, 458, 419, 320, 204, 109, 49, 18, 6, 2, 5, 9, 21, 52, 111, 206, 321, 420, 459, 420, 321, 206, 111, 52, 21, 9, 5, 5, 7, 10, 17, 28, 41, 52, 57, 52, 41, 28, 17, 10, 7, 5, 6, 13, 25, 38, 50, 55, 50, 38, 25, 13, 6, 3, 6, 12, 22, 34, 44, 48, 44, 34, 22, 12, 6, 3, 3, 5, 8, 15, 25, 38, 50, 54, 50, 38, 25, 15, 8, 5, 3, 4, 8, 14, 25, 37, 48, 52, 48, 37, 25, 14, 8, 4, 2, 4, 7, 14, 24, 37, 48, 53, 48, 37, 24, 14, 7, 4, 2, 6, 12, 22, 33, 43, 47, 43, 33, 22, 12, 6, 22, 57, 128, 240, 376, 492, 538, 492, 376, 240, 128, 57, 22, 3, 6, 12, 22, 33, 43, 47, 43, 33, 22, 12, 6, 3, 5, 5, 6, 9, 15, 25, 36, 46, 50, 46, 36, 25, 15, 9, 6, 5, 5, 8, 14, 24, 36, 47, 51, 47, 36, 24, 14, 8, 2, 6, 20, 52, 116, 217, 341, 446, 488, 446, 341, 217, 116, 52, 20, 6, 2, 5, 6, 10, 16, 26, 39, 49, 53, 49, 39, 26, 16, 10, 6, 5, 9, 15, 25, 37, 47, 51, 47, 37, 25, 15, 9, 4, 4, 5, 9, 15, 25, 38, 49, 53, 49, 38, 25, 15, 9, 5, 4, 4, 6, 12, 22, 34, 45, 49, 45, 34, 22, 12, 6, 54, 119, 221, 346, 453, 496, 453, 346, 221, 119, 54, 25, 61, 131, 242, 376, 492, 538, 492, 376, 242, 131, 61, 25, 7, 21, 55, 123, 230, 361, 473, 517, 473, 361, 230, 123, 55, 21, 7, 9, 16, 27, 41, 52, 57, 52, 41, 27, 16, 9, 5, 8, 14, 24, 35, 45, 49, 45, 35, 24, 14, 8, 5, 7, 13, 24, 36, 47, 51, 47, 36, 24, 13, 7, 6, 12, 23, 35, 46, 50, 46, 35, 23, 12, 6, 5, 5, 6, 10, 16, 27, 39, 50, 54, 50, 39, 27, 16, 10, 6, 5, 5, 6, 10, 16, 26, 39, 49, 53, 49, 39, 26, 16, 10, 6, 6, 9, 15, 25, 37, 46, 50, 46, 37, 25, 15, 9, 6, 4, 5, 9, 15, 25, 37, 47, 51, 47, 37, 25, 15, 9, 5, 4, 10, 16, 27, 40, 50, 55, 50, 40, 27, 16, 10, 4, 9, 23, 58, 128, 238, 371, 485, 531, 485, 371, 238, 128, 58, 23, 9, 4, 58, 128, 237, 371, 485, 530, 485, 371, 237, 128, 58],
					G: [6, 9, 14, 21, 26, 28, 26, 21, 14, 9, 6, 2, 4, 7, 12, 18, 23, 25, 23, 18, 12, 7, 4, 2, 2, 3, 7, 13, 20, 26, 28, 26, 20, 13, 7, 3, 2, 20, 53, 119, 222, 349, 457, 499, 457, 349, 222, 119, 53, 20, 58, 126, 235, 367, 480, 525, 480, 367, 235, 126, 58, 5, 6, 7, 11, 16, 23, 28, 30, 28, 23, 16, 11, 7, 6, 5, 5, 8, 13, 20, 25, 27, 25, 20, 13, 8, 5, 1, 1, 2, 3, 7, 12, 18, 24, 26, 24, 18, 12, 7, 3, 2, 1, 1, 5, 8, 14, 20, 25, 27, 25, 20, 14, 8, 5, 4, 4, 5, 6, 10, 15, 22, 27, 29, 27, 22, 15, 10, 6, 5, 4, 4, 51, 113, 211, 331, 433, 473, 433, 331, 211, 113, 51, 3, 5, 8, 14, 20, 25, 27, 25, 20, 14, 8, 5, 3, 4, 6, 9, 14, 20, 25, 27, 25, 20, 14, 9, 6, 4, 5, 8, 13, 20, 25, 27, 25, 20, 13, 8, 5, 9, 22, 56, 123, 228, 356, 466, 510, 466, 356, 228, 123, 56, 22, 9, 3, 4, 5, 9, 14, 21, 27, 29, 27, 21, 14, 9, 5, 4, 3, 2, 2, 2, 4, 7, 12, 19, 24, 26, 24, 19, 12, 7, 4, 2, 2, 2, 3, 4, 5, 9, 14, 21, 27, 29, 27, 21, 14, 9, 5, 4, 3, 6, 10, 15, 22, 27, 29, 27, 22, 15, 10, 6, 2, 2, 4, 7, 12, 18, 23, 25, 23, 18, 12, 7, 4, 2, 2, 2, 3, 7, 12, 19, 24, 26, 24, 19, 12, 7, 3, 2, 3, 7, 13, 20, 25, 28, 25, 20, 13, 7, 3, 2, 7, 20, 53, 119, 223, 350, 459, 502, 459, 350, 223, 119, 53, 20, 7, 2, 5, 9, 21, 51, 111, 205, 319, 417, 456, 417, 319, 205, 111, 51, 21, 9, 5, 8, 21, 53, 116, 215, 336, 439, 480, 439, 336, 215, 116, 53, 21, 8, 3, 6, 11, 17, 23, 25, 23, 17, 11, 6, 3, 2, 3, 7, 12, 18, 24, 26, 24, 18, 12, 7, 3, 2, 2, 2, 4, 7, 13, 19, 25, 27, 25, 19, 13, 7, 4, 2, 2, 4, 7, 12, 19, 24, 26, 24, 19, 12, 7, 4, 5, 5, 6, 7, 11, 17, 24, 30, 32, 30, 24, 17, 11, 7, 6, 5, 5, 21, 56, 124, 233, 365, 478, 523, 478, 365, 233, 124, 56, 21, 3, 7, 12, 19, 24, 26, 24, 19, 12, 7, 3, 4, 4, 6, 9, 14, 20, 25, 27, 25, 20, 14, 9, 6, 4, 4, 2, 2, 2, 4, 7, 13, 19, 24, 27, 24, 19, 13, 7, 4, 2, 2, 2, 7, 19, 50, 110, 205, 321, 420, 459, 420, 321, 205, 110, 50, 19, 7, 1, 1, 1, 3, 6, 11, 18, 23, 25, 23, 18, 11, 6, 3, 1, 1, 1, 5, 6, 7, 11, 16, 23, 28, 30, 28, 23, 16, 11, 7, 6, 5, 2, 4, 7, 12, 19, 24, 26, 24, 19, 12, 7, 4, 2, 3, 4, 8, 14, 21, 27, 29, 27, 21, 14, 8, 4, 3, 2, 2, 2, 4, 7, 13, 19, 24, 26, 24, 19, 13, 7, 4, 2, 2, 2, 1, 1, 2, 3, 7, 13, 19, 25, 28, 25, 19, 13, 7, 3, 2, 1, 1, 4, 4, 5, 6, 10, 15, 21, 27, 29, 27, 21, 15, 10, 6, 5, 4, 4, 10, 22, 52, 112, 206, 321, 419, 458, 419, 321, 206, 112, 52, 22, 10, 57, 127, 238, 373, 488, 534, 488, 373, 238, 127, 57, 20, 51, 112, 209, 327, 428, 468, 428, 327, 209, 112, 51, 20, 3, 4, 5, 9, 14, 21, 26, 28, 26, 21, 14, 9, 5, 4, 3, 3, 5, 8, 13, 19, 25, 27, 25, 19, 13, 8, 5, 3, 2, 2, 4, 7, 12, 19, 24, 26, 24, 19, 12, 7, 4, 2, 2, 4, 8, 13, 20, 25, 28, 25, 20, 13, 8, 4, 2, 3, 7, 12, 18, 24, 26, 24, 18, 12, 7, 3, 2, 21, 54, 119, 222, 347, 454, 496, 454, 347, 222, 119, 54, 21, 5, 5, 5, 7, 10, 15, 22, 27, 29, 27, 22, 15, 10, 7, 5, 5, 5, 5, 9, 15, 21, 27, 30, 27, 21, 15, 9, 5, 1, 1, 2, 3, 7, 12, 18, 24, 26, 24, 18, 12, 7, 3, 2, 1, 1, 11, 24, 57, 123, 227, 354, 463, 506, 463, 354, 227, 123, 57, 24, 11, 7, 10, 16, 22, 27, 30, 27, 22, 16, 10, 7, 4, 4, 4, 6, 9, 15, 21, 26, 29, 26, 21, 15, 9, 6, 4, 4, 4, 3, 7, 12, 19, 24, 26, 24, 19, 12, 7, 3, 4, 7, 12, 17, 22, 24, 22, 17, 12, 7, 4, 6, 7, 11, 17, 23, 29, 32, 29, 23, 17, 11, 7, 6, 1, 2, 3, 7, 12, 19, 25, 27, 25, 19, 12, 7, 3, 2, 1, 55, 120, 222, 346, 452, 494, 452, 346, 222, 120, 55, 23, 57, 123, 229, 357, 466, 510, 466, 357, 229, 123, 57, 23, 53, 118, 220, 344, 450, 492, 450, 344, 220, 118, 53, 3, 6, 12, 18, 24, 26, 24, 18, 12, 6, 3, 5, 5, 5, 7, 11, 16, 22, 28, 30, 28, 22, 16, 11, 7, 5, 5, 5, 5, 7, 10, 16, 22, 27, 30, 27, 22, 16, 10, 7, 5, 6, 7, 11, 17, 24, 30, 32, 30, 24, 17, 11, 7, 6, 4, 4, 6, 9, 14, 19, 24, 26, 24, 19, 14, 9, 6, 4, 4, 7, 10, 15, 22, 27, 29, 27, 22, 15, 10, 7, 3, 3, 3, 5, 9, 14, 20, 26, 28, 26, 20, 14, 9, 5, 3, 3, 3, 5, 8, 14, 20, 25, 28, 25, 20, 14, 8, 5],
					T: [5, 6, 8, 11, 13, 14, 13, 11, 8, 6, 5, 2, 2, 4, 6, 8, 10, 11, 10, 8, 6, 4, 2, 2, 1, 2, 3, 5, 8, 10, 11, 10, 8, 5, 3, 2, 1, 1, 1, 3, 5, 7, 9, 10, 9, 7, 5, 3, 1, 1, 4, 5, 7, 10, 12, 13, 12, 10, 7, 5, 4, 10, 24, 56, 121, 223, 347, 453, 495, 453, 347, 223, 121, 56, 24, 10, 51, 112, 208, 324, 424, 463, 424, 324, 208, 112, 51, 2, 6, 19, 49, 109, 205, 321, 421, 460, 421, 321, 205, 109, 49, 19, 6, 2, 4, 5, 7, 9, 11, 12, 11, 9, 7, 5, 4, 4, 4, 4, 4, 6, 8, 10, 12, 13, 12, 10, 8, 6, 4, 4, 4, 4, 3, 4, 6, 9, 11, 12, 11, 9, 6, 4, 3, 22, 56, 122, 227, 355, 464, 508, 464, 355, 227, 122, 56, 22, 4, 5, 6, 8, 11, 13, 14, 13, 11, 8, 6, 5, 4, 4, 5, 7, 9, 11, 12, 11, 9, 7, 5, 4, 3, 3, 4, 5, 7, 10, 12, 13, 12, 10, 7, 5, 4, 3, 3, 8, 21, 52, 113, 210, 328, 429, 469, 429, 328, 210, 113, 52, 21, 8, 2, 2, 2, 3, 4, 6, 8, 10, 11, 10, 8, 6, 4, 3, 2, 2, 2, 3, 3, 4, 5, 7, 10, 12, 13, 12, 10, 7, 5, 4, 3, 3, 5, 6, 8, 11, 13, 14, 13, 11, 8, 6, 5, 2, 2, 3, 4, 6, 9, 11, 12, 11, 9, 6, 4, 3, 2, 2, 1, 1, 3, 5, 7, 9, 10, 9, 7, 5, 3, 1, 1, 1, 3, 5, 7, 9, 10, 9, 7, 5, 3, 1, 1, 1, 1, 2, 3, 5, 8, 10, 11, 10, 8, 5, 3, 2, 1, 1, 1, 4, 4, 4, 4, 6, 8, 10, 12, 13, 12, 10, 8, 6, 4, 4, 4, 4, 3, 3, 4, 5, 7, 10, 12, 13, 12, 10, 7, 5, 4, 3, 3, 48, 108, 202, 316, 414, 453, 414, 316, 202, 108, 48, 20, 52, 116, 218, 341, 446, 488, 446, 341, 218, 116, 52, 20, 7, 20, 51, 112, 209, 327, 428, 468, 428, 327, 209, 112, 51, 20, 7, 3, 4, 6, 9, 12, 12, 12, 9, 6, 4, 3, 5, 5, 5, 6, 7, 9, 12, 14, 15, 14, 12, 9, 7, 6, 5, 5, 5, 1, 2, 3, 5, 8, 10, 11, 10, 8, 5, 3, 2, 1, 56, 126, 237, 371, 486, 531, 486, 371, 237, 126, 56, 4, 4, 5, 6, 8, 11, 13, 14, 13, 11, 8, 6, 5, 4, 4, 2, 2, 2, 2, 4, 6, 8, 10, 11, 10, 8, 6, 4, 2, 2, 2, 2, 2, 2, 3, 4, 6, 9, 11, 12, 11, 9, 6, 4, 3, 2, 2, 2, 6, 19, 49, 110, 205, 322, 422, 461, 422, 322, 205, 110, 49, 19, 6, 2, 5, 5, 6, 7, 9, 12, 14, 15, 14, 12, 9, 7, 6, 5, 5, 2, 3, 4, 6, 8, 10, 11, 10, 8, 6, 4, 3, 2, 2, 2, 4, 6, 8, 10, 11, 10, 8, 6, 4, 2, 2, 2, 2, 2, 3, 4, 6, 9, 11, 12, 11, 9, 6, 4, 3, 2, 2, 2, 1, 1, 1, 1, 3, 5, 7, 9, 10, 9, 7, 5, 3, 1, 1, 1, 1, 4, 4, 4, 5, 6, 8, 11, 13, 14, 13, 11, 8, 6, 5, 4, 4, 4, 5, 5, 6, 7, 9, 12, 14, 15, 14, 12, 9, 7, 6, 5, 5, 2, 3, 5, 8, 10, 11, 10, 8, 5, 3, 2, 2, 3, 4, 6, 9, 11, 12, 11, 9, 6, 4, 3, 2, 9, 22, 55, 120, 223, 348, 455, 497, 455, 348, 223, 120, 55, 22, 9, 23, 57, 126, 234, 365, 477, 522, 477, 365, 234, 126, 57, 23, 8, 22, 58, 128, 239, 374, 490, 536, 490, 374, 239, 128, 58, 22, 8, 3, 4, 6, 9, 11, 12, 11, 9, 6, 4, 3, 1, 2, 3, 5, 8, 10, 11, 10, 8, 5, 3, 2, 1, 2, 3, 4, 6, 9, 11, 12, 11, 9, 6, 4, 3, 2, 6, 10, 22, 52, 111, 205, 320, 417, 456, 417, 320, 205, 111, 52, 22, 10, 6, 4, 5, 7, 9, 12, 12, 12, 9, 7, 5, 4, 1, 1, 1, 1, 3, 5, 7, 9, 10, 9, 7, 5, 3, 1, 1, 1, 1, 5, 5, 6, 7, 9, 12, 14, 15, 14, 12, 9, 7, 6, 5, 5, 54, 117, 215, 335, 437, 478, 437, 335, 215, 117, 54, 4, 4, 4, 4, 6, 8, 10, 12, 13, 12, 10, 8, 6, 4, 4, 4, 4, 2, 3, 5, 8, 11, 11, 11, 8, 5, 3, 2, 3, 4, 6, 9, 11, 12, 11, 9, 6, 4, 3, 5, 5, 7, 9, 11, 13, 14, 13, 11, 9, 7, 5, 5, 1, 1, 2, 3, 5, 7, 10, 10, 10, 7, 5, 3, 2, 1, 1, 5, 6, 8, 11, 13, 14, 13, 11, 8, 6, 5, 4, 4, 6, 8, 10, 12, 13, 12, 10, 8, 6, 4, 4, 3, 4, 6, 9, 11, 12, 11, 9, 6, 4, 3, 55, 123, 231, 363, 475, 520, 475, 363, 231, 123, 55, 6, 10, 24, 56, 121, 223, 347, 453, 495, 453, 347, 223, 121, 56, 24, 10, 6, 23, 54, 115, 213, 331, 432, 472, 432, 331, 213, 115, 54, 23, 5, 6, 7, 9, 11, 14, 14, 14, 11, 9, 7, 6, 5, 4, 4, 5, 6, 8, 10, 12, 13, 12, 10, 8, 6, 5, 4, 4, 6, 7, 9, 12, 14, 15, 14, 12, 9, 7, 6, 3, 3, 3, 4, 5, 7, 10, 12, 13, 12, 10, 7, 5, 4, 3, 3, 3, 4, 5, 7, 10, 12, 13, 12, 10, 7, 5, 4],
					peak: [5, 17, 30, 43, 55, 68, 81, 95, 109, 123, 137, 149, 162, 174, 187, 202, 218, 234, 247, 260, 274, 286, 300, 317, 333, 346, 358, 372, 385, 399, 414, 426, 439, 455, 471, 487, 503, 517, 530, 545, 562, 579, 595, 608, 620, 634, 648, 662, 675, 687, 700, 715, 729, 743, 759, 772, 786, 800, 811, 823, 837, 850, 862, 874, 885, 899, 914, 927, 941, 954, 968, 982]
				},
				index: 5,
				counter: 8,
				measureText: 74
			}],
			startY: 137,
			endY: 226,
			displayedFeatures: 6,
			totalFeatures: 6
		}, {
			name: "Copy Number Variation",
			type: "heatmap",
			autowidth: true,
			height: 20,
			data: [{
				id: "Cell Line-123",
				offset: 10,
				data: [7, 5, 5, 5, 6, 7, 9, 8, 8, 8, 8, 5, 7, 9, 15, 15, 16, 9, 9, 7, 8, 10, 9, 21, 22, 22, 24, 20, 24, 26, 24, 25, 24, 31, 29, 33, 33, 33, 33, 33, 20, 17, 19, 18, 18, 18, 27, 23, 31, 26, 31, 31, 31, 34, 32, 31, 30, 30, 30, 30, 30, 24, 24, 20, 21, 17, 17, 27, 29, 25, 31, 31, 31],
				index: 0,
				counter: 9,
				measureText: 67
			}],
			startY: 281,
			endY: 281,
			displayedFeatures: 1,
			totalFeatures: 1
		}, {
			name: "Tissue Distribution (Heart, Liver, Kidney)",
			type: "heatmap",
			height: 20,
			data: [{
				id: "123456_at",
				offset: 100,
				data: [25, 35, 46],
				index: 0,
				counter: 10,
				measureText: 56
			}, {
				id: "234567_at",
				offset: 151,
				data: [80, 45, 10],
				index: 1,
				counter: 11,
				measureText: 56
			}, {
				id: "345678_at",
				offset: 181,
				data: [65, 46, 29],
				index: 2,
				counter: 12,
				measureText: 56
			}],
			startY: 336,
			endY: 386,
			displayedFeatures: 3,
			totalFeatures: 3
		}, {
			name: "Another CNV",
			type: "line",
			autowidth: true,
			height: 20,
			fill: ["rgb(255,0,0)", "rgb(0,255,0)"],
			outline: ["rgb(255,0,0)", "rgb(0,255,0)"],
			data: [{
				id: "Cell Line-124",
				offset: 10,
				data: [30, 31, 31, 33, 29, 29, 30, 31, 32, 33, 33, 31, 31, 29, 30, 30, 27, 32, 31, 31, 28, 31, 31, 29, 31, 31, 31, 26, 25, 29, 26, 26, 21, 26, 21, 31, 31, 28, 28, 23, 25, 28, 28, 31, 33, 33, 32, 31, 31, 31, 24, 28, 28, 28, 31, 32, 32, 31, 31, 28, 24, 28, 24, 29, 31, 29, 31],
				index: 0,
				counter: 13,
				measureText: 67
			}, {
				id: "Cell Line-125",
				offset: 10,
				data: [29, 31, 31, 31, 26, 25, 29, 26, 26, 21, 26, 21, 31, 31, 28, 28, 23, 25, 28, 28, 31, 33, 33, 32, 31, 31, 31, 24, 28, 28, 28, 31, 32, 32, 31, 31, 28, 24, 28, 24, 29, 31, 29, 31, 30, 31, 31, 33, 29, 29, 30, 31, 32, 33, 33, 31, 31, 29, 30, 30, 27, 32, 31, 31, 28, 31, 31],
				index: 1,
				counter: 14,
				measureText: 67
			}],
			startY: 441,
			endY: 466,
			displayedFeatures: 2,
			totalFeatures: 2
		}, {
			type: "bar",
			height: 20,
			fill: ["rgb(255,0,0)", "rgb(0,0,255)", "rgb(255,255,0)"],
			outline: ["rgb(255,0,0)", "rgb(0,0,255)", "rgb(255,255,0)"],
			data: [{
				id: "123456_at",
				offset: 100,
				data: [25, 35, 46],
				index: 0,
				counter: 15,
				measureText: 56
			}, {
				id: "234567_at",
				offset: 151,
				data: [80, 45, 10],
				index: 1,
				counter: 16,
				measureText: 56
			}, {
				id: "345678_at",
				offset: 181,
				data: [65, 46, 29],
				index: 2,
				counter: 17,
				measureText: 56
			}],
			startY: 501,
			endY: 551,
			displayedFeatures: 3,
			totalFeatures: 3
		}, {
			name: "Clones",
			type: "box",
			data: [{
				id: "clone-1234567",
				fill: "rgb(255,255,51)",
				outline: "rgb(0,0,0)",
				dir: "left",
				data: [
					[121, 196]
				],
				index: 0,
				counter: 18,
				start: 121,
				end: 196,
				measureText: 77
			}, {
				id: "clone-2345678",
				fill: "rgb(255,255,51)",
				outline: "rgb(0,0,0)",
				dir: "right",
				data: [
					[371, 400]
				],
				landmarks: [{
					offset: 157,
					text: "Gap "
				}, {
					offset: 137,
					text: "Insertion "
				}],
				index: 1,
				counter: 19,
				start: 371,
				end: 400,
				measureText: 77
			}],
			startY: 606,
			endY: 619,
			displayedFeatures: 2,
			totalFeatures: 2
		}, {
			name: "SNP Location",
			type: "triangle",
			data: [{
				id: "SNP123",
				fill: "rgb(100,0,0)",
				outline: "rgb(0,0,0)",
				offset: 23,
				index: 0,
				counter: 20,
				measureText: 43
			}, {
				id: "SNP234",
				fill: "rgb(100,0,0)",
				outline: "rgb(0,0,0)",
				offset: 45,
				index: 1,
				counter: 21,
				measureText: 43
			}, {
				id: "SNP345",
				fill: "rgb(100,0,0)",
				outline: "rgb(0,0,0)",
				offset: 135,
				index: 2,
				counter: 22,
				measureText: 43
			}, {
				id: "SNP456",
				fill: "rgb(100,0,0)",
				outline: "rgb(0,0,0)",
				offset: 172,
				index: 3,
				counter: 23,
				measureText: 43
			}, {
				id: "SNP567",
				fill: "rgb(100,0,0)",
				outline: "rgb(0,0,0)",
				offset: 180,
				index: 4,
				counter: 24,
				measureText: 43
			}, {
				id: "SNP678",
				fill: "rgb(100,0,0)",
				outline: "rgb(0,0,0)",
				offset: 190,
				index: 5,
				counter: 25,
				measureText: 43
			}, {
				id: "SNP789",
				fill: "rgb(100,0,0)",
				outline: "rgb(0,0,0)",
				offset: 195,
				index: 6,
				counter: 26,
				measureText: 43
			}],
			startY: 674,
			endY: 782,
			displayedFeatures: 7,
			totalFeatures: 7
		}, {
			name: "SNP Sequences",
			type: "sequence",
			subtype: "DNA",
			data: [{
				id: "SNP123",
				offset: 19,
				sequence: "CACA[AT]GCACCTTGTA",
				index: 0,
				counter: 27,
				measureText: 43
			}, {
				id: "SNP234",
				offset: 41,
				sequence: "ATCG[TG]AATA",
				index: 1,
				counter: 28,
				measureText: 43
			}, {
				id: "SNP789",
				offset: 116,
				sequence: "GCCC[CT]AGGG",
				index: 2,
				counter: 29,
				measureText: 43
			}]
		}]
	};
	this.dataSetIris = {
		x: {
			Species: ["setosa", "setosa", "setosa", "setosa", "setosa", "setosa", "setosa", "setosa", "setosa", "setosa", "setosa", "setosa", "setosa", "setosa", "setosa", "setosa", "setosa", "setosa", "setosa", "setosa", "setosa", "setosa", "setosa", "setosa", "setosa", "setosa", "setosa", "setosa", "setosa", "setosa", "setosa", "setosa", "setosa", "setosa", "setosa", "setosa", "setosa", "setosa", "setosa", "setosa", "setosa", "setosa", "setosa", "setosa", "setosa", "setosa", "setosa", "setosa", "setosa", "setosa", "versicolor", "versicolor", "versicolor", "versicolor", "versicolor", "versicolor", "versicolor", "versicolor", "versicolor", "versicolor", "versicolor", "versicolor", "versicolor", "versicolor", "versicolor", "versicolor", "versicolor", "versicolor", "versicolor", "versicolor", "versicolor", "versicolor", "versicolor", "versicolor", "versicolor", "versicolor", "versicolor", "versicolor", "versicolor", "versicolor", "versicolor", "versicolor", "versicolor", "versicolor", "versicolor", "versicolor", "versicolor", "versicolor", "versicolor", "versicolor", "versicolor", "versicolor", "versicolor", "versicolor", "versicolor", "versicolor", "versicolor", "versicolor", "versicolor", "versicolor", "virginica", "virginica", "virginica", "virginica", "virginica", "virginica", "virginica", "virginica", "virginica", "virginica", "virginica", "virginica", "virginica", "virginica", "virginica", "virginica", "virginica", "virginica", "virginica", "virginica", "virginica", "virginica", "virginica", "virginica", "virginica", "virginica", "virginica", "virginica", "virginica", "virginica", "virginica", "virginica", "virginica", "virginica", "virginica", "virginica", "virginica", "virginica", "virginica", "virginica", "virginica", "virginica", "virginica", "virginica", "virginica", "virginica", "virginica", "virginica", "virginica", "virginica"]
		},
		y: {
			vars: ["Sepal.Length", "Sepal.Width", "Petal.Length", "Petal.Width"],
			smps: ["s1", "s2", "s3", "s4", "s5", "s6", "s7", "s8", "s9", "s10", "s11", "s12", "s13", "s14", "s15", "s16", "s17", "s18", "s19", "s20", "s21", "s22", "s23", "s24", "s25", "s26", "s27", "s28", "s29", "s30", "s31", "s32", "s33", "s34", "s35", "s36", "s37", "s38", "s39", "s40", "s41", "s42", "s43", "s44", "s45", "s46", "s47", "s48", "s49", "s50", "s51", "s52", "s53", "s54", "s55", "s56", "s57", "s58", "s59", "s60", "s61", "s62", "s63", "s64", "s65", "s66", "s67", "s68", "s69", "s70", "s71", "s72", "s73", "s74", "s75", "s76", "s77", "s78", "s79", "s80", "s81", "s82", "s83", "s84", "s85", "s86", "s87", "s88", "s89", "s90", "s91", "s92", "s93", "s94", "s95", "s96", "s97", "s98", "s99", "s100", "s101", "s102", "s103", "s104", "s105", "s106", "s107", "s108", "s109", "s110", "s111", "s112", "s113", "s114", "s115", "s116", "s117", "s118", "s119", "s120", "s121", "s122", "s123", "s124", "s125", "s126", "s127", "s128", "s129", "s130", "s131", "s132", "s133", "s134", "s135", "s136", "s137", "s138", "s139", "s140", "s141", "s142", "s143", "s144", "s145", "s146", "s147", "s148", "s149", "s150"],
			data: [
				[5.1, 4.9, 4.7, 4.6, 5, 5.4, 4.6, 5, 4.4, 4.9, 5.4, 4.8, 4.8, 4.3, 5.8, 5.7, 5.4, 5.1, 5.7, 5.1, 5.4, 5.1, 4.6, 5.1, 4.8, 5, 5, 5.2, 5.2, 4.7, 4.8, 5.4, 5.2, 5.5, 4.9, 5, 5.5, 4.9, 4.4, 5.1, 5, 4.5, 4.4, 5, 5.1, 4.8, 5.1, 4.6, 5.3, 5, 7, 6.4, 6.9, 5.5, 6.5, 5.7, 6.3, 4.9, 6.6, 5.2, 5, 5.9, 6, 6.1, 5.6, 6.7, 5.6, 5.8, 6.2, 5.6, 5.9, 6.1, 6.3, 6.1, 6.4, 6.6, 6.8, 6.7, 6, 5.7, 5.5, 5.5, 5.8, 6, 5.4, 6, 6.7, 6.3, 5.6, 5.5, 5.5, 6.1, 5.8, 5, 5.6, 5.7, 5.7, 6.2, 5.1, 5.7, 6.3, 5.8, 7.1, 6.3, 6.5, 7.6, 4.9, 7.3, 6.7, 7.2, 6.5, 6.4, 6.8, 5.7, 5.8, 6.4, 6.5, 7.7, 7.7, 6, 6.9, 5.6, 7.7, 6.3, 6.7, 7.2, 6.2, 6.1, 6.4, 7.2, 7.4, 7.9, 6.4, 6.3, 6.1, 7.7, 6.3, 6.4, 6, 6.9, 6.7, 6.9, 5.8, 6.8, 6.7, 6.7, 6.3, 6.5, 6.2, 5.9],
				[3.5, 3, 3.2, 3.1, 3.6, 3.9, 3.4, 3.4, 2.9, 3.1, 3.7, 3.4, 3, 3, 4, 4.4, 3.9, 3.5, 3.8, 3.8, 3.4, 3.7, 3.6, 3.3, 3.4, 3, 3.4, 3.5, 3.4, 3.2, 3.1, 3.4, 4.1, 4.2, 3.1, 3.2, 3.5, 3.6, 3, 3.4, 3.5, 2.3, 3.2, 3.5, 3.8, 3, 3.8, 3.2, 3.7, 3.3, 3.2, 3.2, 3.1, 2.3, 2.8, 2.8, 3.3, 2.4, 2.9, 2.7, 2, 3, 2.2, 2.9, 2.9, 3.1, 3, 2.7, 2.2, 2.5, 3.2, 2.8, 2.5, 2.8, 2.9, 3, 2.8, 3, 2.9, 2.6, 2.4, 2.4, 2.7, 2.7, 3, 3.4, 3.1, 2.3, 3, 2.5, 2.6, 3, 2.6, 2.3, 2.7, 3, 2.9, 2.9, 2.5, 2.8, 3.3, 2.7, 3, 2.9, 3, 3, 2.5, 2.9, 2.5, 3.6, 3.2, 2.7, 3, 2.5, 2.8, 3.2, 3, 3.8, 2.6, 2.2, 3.2, 2.8, 2.8, 2.7, 3.3, 3.2, 2.8, 3, 2.8, 3, 2.8, 3.8, 2.8, 2.8, 2.6, 3, 3.4, 3.1, 3, 3.1, 3.1, 3.1, 2.7, 3.2, 3.3, 3, 2.5, 3, 3.4, 3],
				[1.4, 1.4, 1.3, 1.5, 1.4, 1.7, 1.4, 1.5, 1.4, 1.5, 1.5, 1.6, 1.4, 1.1, 1.2, 1.5, 1.3, 1.4, 1.7, 1.5, 1.7, 1.5, 1, 1.7, 1.9, 1.6, 1.6, 1.5, 1.4, 1.6, 1.6, 1.5, 1.5, 1.4, 1.5, 1.2, 1.3, 1.4, 1.3, 1.5, 1.3, 1.3, 1.3, 1.6, 1.9, 1.4, 1.6, 1.4, 1.5, 1.4, 4.7, 4.5, 4.9, 4, 4.6, 4.5, 4.7, 3.3, 4.6, 3.9, 3.5, 4.2, 4, 4.7, 3.6, 4.4, 4.5, 4.1, 4.5, 3.9, 4.8, 4, 4.9, 4.7, 4.3, 4.4, 4.8, 5, 4.5, 3.5, 3.8, 3.7, 3.9, 5.1, 4.5, 4.5, 4.7, 4.4, 4.1, 4, 4.4, 4.6, 4, 3.3, 4.2, 4.2, 4.2, 4.3, 3, 4.1, 6, 5.1, 5.9, 5.6, 5.8, 6.6, 4.5, 6.3, 5.8, 6.1, 5.1, 5.3, 5.5, 5, 5.1, 5.3, 5.5, 6.7, 6.9, 5, 5.7, 4.9, 6.7, 4.9, 5.7, 6, 4.8, 4.9, 5.6, 5.8, 6.1, 6.4, 5.6, 5.1, 5.6, 6.1, 5.6, 5.5, 4.8, 5.4, 5.6, 5.1, 5.1, 5.9, 5.7, 5.2, 5, 5.2, 5.4, 5.1],
				[0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.3, 0.2, 0.2, 0.1, 0.2, 0.2, 0.1, 0.1, 0.2, 0.4, 0.4, 0.3, 0.3, 0.3, 0.2, 0.4, 0.2, 0.5, 0.2, 0.2, 0.4, 0.2, 0.2, 0.2, 0.2, 0.4, 0.1, 0.2, 0.2, 0.2, 0.2, 0.1, 0.2, 0.2, 0.3, 0.3, 0.2, 0.6, 0.4, 0.3, 0.2, 0.2, 0.2, 0.2, 1.4, 1.5, 1.5, 1.3, 1.5, 1.3, 1.6, 1, 1.3, 1.4, 1, 1.5, 1, 1.4, 1.3, 1.4, 1.5, 1, 1.5, 1.1, 1.8, 1.3, 1.5, 1.2, 1.3, 1.4, 1.4, 1.7, 1.5, 1, 1.1, 1, 1.2, 1.6, 1.5, 1.6, 1.5, 1.3, 1.3, 1.3, 1.2, 1.4, 1.2, 1, 1.3, 1.2, 1.3, 1.3, 1.1, 1.3, 2.5, 1.9, 2.1, 1.8, 2.2, 2.1, 1.7, 1.8, 1.8, 2.5, 2, 1.9, 2.1, 2, 2.4, 2.3, 1.8, 2.2, 2.3, 1.5, 2.3, 2, 2, 1.8, 2.1, 1.8, 1.8, 1.8, 2.1, 1.6, 1.9, 2, 2.2, 1.5, 1.4, 2.3, 2.4, 1.8, 1.8, 2.1, 2.4, 2.3, 1.9, 2.3, 2.5, 2.3, 1.9, 2, 2.3, 1.8]
			]
		},
		m: {
			Name: "Anderson's Iris data set",
			Description: "The data set consists of 50 samples from each of three species of Iris (Iris setosa, Iris virginica and Iris versicolor). Four features were measured from each sample: the length and the width of the sepals and petals, in centimetres.",
			Reference: "R. A. Fisher (1936). The use of multiple measurements in taxonomic problems. Annals of Eugenics 7 (2): 179–188."
		}
	};
	this.dataSetScents = {
		x: {
			Sex: ["M", "F", "M", "M", "M", "F", "F", "F", "M", "F", "F", "F", "F", "M", "M", "M", "M", "M", "F", "F", "M"],
			Smoker: ["N", "Y", "N", "N", "N", "Y", "N", "N", "N", "N", "Y", "Y", "Y", "Y", "N", "N", "Y", "N", "Y", "N", "N"],
			Opinion: ["pos", "neg", "pos", "neg", "neg", "pos", "pos", "pos", "pos", "indiff", "pos", "indiff", "pos", "indiff", "indiff", "pos", "neg", "neg", "pos", "neg", "neg"],
			Age: [23, 43, 43, 32, 15, 37, 26, 35, 26, 31, 35, 55, 25, 39, 25, 26, 33, 62, 54, 38, 65],
			Order: ["1", "2", "1", "2", "1", "2", "1", "2", "1", "2", "1", "2", "1", "2", "1", "2", "1", "2", "1", "2", "1"]
		},
		y: {
			vars: ["U-Trial 1", "U-Trial 2", "U-Trial 3", "S-Trial 1", "S-Trial 2", "S-Trial 3"],
			smps: ["s1", "s2", "s3", "s4", "s5", "s6", "s7", "s8", "s9", "s10", "s11", "s12", "s13", "s14", "s15", "s16", "s17", "s18", "s19", "s20", "s21"],
			data: [
				[38.4, 46.2, 72.5, 38, 82.8, 33.9, 50.4, 35, 32.8, 60.1, 75.1, 57.6, 55.5, 49.5, 40.9, 44.3, 93.8, 47.9, 75.2, 46.2, 56.3],
				[27.7, 57.2, 57.9, 38, 57.9, 32, 40.6, 33.1, 26.8, 53.2, 63.1, 57.7, 63.3, 45.8, 35.7, 46.8, 91.9, 59.9, 54.1, 39.3, 45.8],
				[25.7, 41.9, 51.9, 32.2, 64.7, 31.4, 40.1, 43.2, 33.9, 40.4, 58, 61.5, 44.6, 35.3, 37.2, 39.4, 77.4, 52.8, 63.6, 56.6, 58.9],
				[53.1, 54.7, 74.2, 49.6, 53.6, 51.3, 44.1, 34, 34.5, 59.1, 67.3, 75.5, 41.1, 52.2, 28.3, 74.9, 77.5, 50.9, 70.1, 60.3, 59.9],
				[30.6, 43.3, 53.4, 37.4, 48.6, 35.5, 46.9, 26.4, 25.1, 87.1, 43.8, 126.6, 41.8, 53.8, 26, 45.3, 55.8, 58.6, 44, 47.8, 36.8],
				[30.2, 56.7, 42.4, 34.4, 44.8, 42.9, 42.7, 24.8, 25.1, 59.2, 42.2, 48.4, 32, 48.1, 33.7, 42.6, 54.9, 64.5, 43.1, 52.8, 44.3]
			]
		},
		m: {
			Name: "Scents",
			Description: "Data on the time subjects required to complete a pencil and paper maze when they were smelling a floral scent and when they were not.",
			Reference: "Hirsch, A. R., and Johnston, L. H. Odors and Learning, Smell & Taste Treatment and Research Foundation, Chicago."
		}
	};
	this.dataSetCancerSurvival = {
		z: {
			Description: ["Survival time in days"]
		},
		x: {
			Organ: ["Stomach", "Stomach", "Stomach", "Stomach", "Stomach", "Stomach", "Stomach", "Stomach", "Stomach", "Stomach", "Stomach", "Stomach", "Stomach", "Bronchus", "Bronchus", "Bronchus", "Bronchus", "Bronchus", "Bronchus", "Bronchus", "Bronchus", "Bronchus", "Bronchus", "Bronchus", "Bronchus", "Bronchus", "Bronchus", "Bronchus", "Bronchus", "Bronchus", "Colon", "Colon", "Colon", "Colon", "Colon", "Colon", "Colon", "Colon", "Colon", "Colon", "Colon", "Colon", "Colon", "Colon", "Colon", "Colon", "Colon", "Ovary", "Ovary", "Ovary", "Ovary", "Ovary", "Ovary", "Breast", "Breast", "Breast", "Breast", "Breast", "Breast", "Breast", "Breast", "Breast", "Breast", "Breast"]
		},
		y: {
			vars: ["Survival"],
			smps: ["s1", "s2", "s3", "s4", "s5", "s6", "s7", "s8", "s9", "s10", "s11", "s12", "s13", "s14", "s15", "s16", "s17", "s18", "s19", "s20", "s21", "s22", "s23", "s24", "s25", "s26", "s27", "s28", "s29", "s30", "s31", "s32", "s33", "s34", "s35", "s36", "s37", "s38", "s39", "s40", "s41", "s42", "s43", "s44", "s45", "s46", "s47", "s48", "s49", "s50", "s51", "s52", "s53", "s54", "s55", "s56", "s57", "s58", "s59", "s60", "s61", "s62", "s63", "s64"],
			data: [
				[124, 42, 25, 45, 412, 51, 1112, 46, 103, 876, 146, 340, 396, 81, 461, 20, 450, 246, 166, 63, 64, 155, 859, 151, 166, 37, 223, 138, 72, 245, 248, 377, 189, 1843, 180, 537, 519, 455, 406, 365, 942, 776, 372, 163, 101, 20, 283, 1234, 89, 201, 356, 2970, 456, 1235, 24, 1581, 1166, 40, 727, 3808, 791, 1804, 3460, 719]
			]
		},
		m: {
			Name: "Cancer Survival",
			Description: "Patients with advanced cancers of the stomach, bronchus, colon, ovary or breast were treated with ascorbate. The purpose of the study was to determine if the survival times differ with respect to the organ affected by the cancer.",
			Reference: "Cameron, E. and Pauling, L. (1978) Supplemental ascorbate in the supportive treatment of cancer: re-evaluation of prolongation of survival times in terminal human cancer. Proceedings of the National Academy of Science USA, 75. Also found in: Manly, B.F.J. (1986) Multivariate Statistical Methods: A Primer, New York: Chapman & Hall, 11. Also found in: Hand, D.J., et al. (1994) A Handbook of Small Data Sets, London: Chapman & Hall, 255."
		}
	};
	this.dataSetAgeHeight = {
		z: {
			Description: ["Age in months", "Mean height in centimeters for children at this age"]
		},
		y: {
			smps: ["s1", "s2", "s3", "s4", "s5", "s6", "s7", "s8", "s9", "s10", "s11", "s12"],
			vars: ["Age", "Height"],
			data: [
				[18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29],
				[76.1, 77, 78.1, 78.2, 78.8, 79.7, 79.9, 81.1, 81.2, 81.8, 82.8, 83.5]
			]
		},
		m: {
			Name: "Age Height",
			Description: "Mean heights of a group of children in Kalama, an Egyptian village that is the site of a study of nutrition in developing countries. The data were obtained by measuring the heights of all 161 children in the village each month over several years.",
			Reference: "Moore, David S., and George P. McCabe (1989). Introduction to the Practice of Statistics, p. 118"
		}
	};
	this.dataSetAlcoholTobacco = {
		z: {
			Description: ["Average weekly household spending on alcoholic beverages in pounds", "Average weekly household spending on tobacco products in pounds"]
		},
		y: {
			smps: ["North", "Yorkshire", "Northeast", "East Midlands", "West Midlands", "East Anglia", "Southeast", "Southwest", "Wales", "Scotland", "Northern Ireland"],
			vars: ["Alcohol", "Tobacco"],
			data: [
				[6.47, 6.13, 6.19, 4.89, 5.63, 4.52, 5.89, 4.79, 3.53, 6.08, 4.02],
				[4.03, 3.76, 3.77, 3.34, 3.47, 2.92, 3.2, 2.71, 3.53, 4.51, 4.56]
			]
		},
		m: {
			Name: "Alcohol Tobacco",
			Description: "Average weekly household spending, in British pounds, on tobacco products and alcoholic beverages for each of the 11 regions of Great Britain.",
			Reference: "Moore, David S., and George P. McCabe (1989). Introduction to the Practice of Statistics, p. 179. Original source: Family Expenditure Survey, Department of Employment, 1981 (British official statistics)"
		}
	};
	this.dataSetBreastCancer = {
		z: {
			Description: ["Mortality index for neoplasms of the female breast", "Mean annual temperature (in degrees F)"]
		},
		y: {
			smps: ["s1", "s2", "s3", "s4", "s5", "s6", "s7", "s8", "s9", "s10", "s11", "s12", "s13", "s14", "s15", "s16"],
			vars: ["Mortality", "Temperature"],
			data: [
				[102.5, 104.5, 100.4, 95.9, 87, 95, 88.6, 89.2, 78.9, 84.6, 81.7, 72.2, 65.1, 68.1, 67.3, 52.5],
				[51.3, 49.9, 50, 49.2, 48.5, 47.8, 47.3, 45.1, 46.3, 42.1, 44.2, 43.5, 42.3, 40.2, 31.8, 34]
			]
		},
		m: {
			Name: "Breast Cancer",
			Description: "Data contains the mean annual temperature (in degrees F) and Mortality Index for neoplasms of the female breast. Data were taken from certain regions of Great Britain, Norway, and Sweden.",
			Reference: "Velleman, P. F. and Hoaglin, D. C. (1981). Applications, Basics, and Computing of Exploratory Data Analysis. Belmont. CA: Wadsworth, Inc., pp. 127-134."
		}
	};
	this.dataSetCars = {
		z: {
			Description: ["Miles per gallon, a measure of gas mileage", "Weight of vehicle", "Drive ratio of the automobile", "Horsepower", "Displacement of the car (in cubic inches)", "Number of cylinders"]
		},
		x: {
			Country: ["U.S.", "U.S.", "U.S.", "U.S.", "U.S.", "Japan", "Japan", "U.S.", "Germany", "Sweden", "Sweden", "France", "U.S.", "U.S.", "U.S.", "U.S.", "U.S.", "U.S.", "U.S.", "U.S.", "U.S.", "U.S.", "Japan", "Japan", "U.S.", "Germany", "Japan", "U.S.", "U.S.", "U.S.", "U.S.", "U.S.", "Japan", "Italy", "Germany", "Japan", "Germany", "Germany"]
		},
		y: {
			smps: ["Buick Estate Wagon", "Ford Country Squire Wagon", "Chevy Malibu Wagon", "Chrysler LeBaron Wagon", "Chevette", "Toyota Corona", "Datsun 510", "Dodge Omni", "Audi 5000", "Volvo 240 GL", "Saab 99 GLE", "Peugeot 694 SL", "Buick Century Special", "Mercury Zephyr", "Dodge Aspen", "AMC Concord D/L", "Chevy Caprice Classic", "Ford LTD", "Mercury Grand Marquis", "Dodge St Regis", "Ford Mustang 4", "Ford Mustang Ghia", "Mazda GLC", "Dodge Colt", "AMC Spirit", "VW Scirocco", "Honda Accord LX", "Buick Skylark", "Chevy Citation", "Olds Omega", "Pontiac Phoenix", "Plymouth Horizon", "Datsun 210", "Fiat Strada", "VW Dasher", "Datsun 810", "BMW 320i", "VW Rabbit"],
			vars: ["MPG", "Weight", "Drive_Ratio", "Horsepower", "Displacement", "Cylinders"],
			data: [
				[16.9, 15.5, 19.2, 18.5, 30, 27.5, 27.2, 30.9, 20.3, 17, 21.6, 16.2, 20.6, 20.8, 18.6, 18.1, 17, 17.6, 16.5, 18.2, 26.5, 21.9, 34.1, 35.1, 27.4, 31.5, 29.5, 28.4, 28.8, 26.8, 33.5, 34.2, 31.8, 37.3, 30.5, 22, 21.5, 31.9],
				[4.36, 4.054, 3.605, 3.94, 2.155, 2.56, 2.3, 2.23, 2.83, 3.14, 2.795, 3.41, 3.38, 3.07, 3.62, 3.41, 3.84, 3.725, 3.955, 3.83, 2.585, 2.91, 1.975, 1.915, 2.67, 1.99, 2.135, 2.67, 2.595, 2.7, 2.556, 2.2, 2.02, 2.13, 2.19, 2.815, 2.6, 1.925],
				[2.73, 2.26, 2.56, 2.45, 3.7, 3.05, 3.54, 3.37, 3.9, 3.5, 3.77, 3.58, 2.73, 3.08, 2.71, 2.73, 2.41, 2.26, 2.26, 2.45, 3.08, 3.08, 3.73, 2.97, 3.08, 3.78, 3.05, 2.53, 2.69, 2.84, 2.69, 3.37, 3.7, 3.1, 3.7, 3.7, 3.64, 3.78],
				[155, 142, 125, 150, 68, 95, 97, 75, 103, 125, 115, 133, 105, 85, 110, 120, 130, 129, 138, 135, 88, 109, 65, 80, 80, 71, 68, 90, 115, 115, 90, 70, 65, 69, 78, 97, 110, 71],
				[350, 351, 267, 360, 98, 134, 119, 105, 131, 163, 121, 163, 231, 200, 225, 258, 305, 302, 351, 318, 140, 171, 86, 98, 121, 89, 98, 151, 173, 173, 151, 105, 85, 91, 97, 146, 121, 89],
				[8, 8, 8, 8, 4, 4, 4, 4, 5, 6, 4, 6, 6, 6, 6, 6, 8, 8, 8, 8, 4, 6, 4, 4, 4, 4, 4, 4, 6, 6, 4, 4, 4, 4, 4, 6, 4, 4]
			]
		},
		m: {
			Name: "Cars",
			Description: "Measurements on 38 1978-79 model automobiles. The gas mileage in miles per gallon as measured by Consumers Union on a test track. Other values as reported by automobile manufacturer.",
			Reference: "Henderson, H. V. and Velleman, P. F. (1981), Building Regression Models Interactively. Biometrics, 37, 391-411. Data originally collected from Consumer Reports."
		}
	};
	this.dataSetPopularKids = {
		z: {
			Description: ["Rank of make good grades (1=most important for popularity, 4=least important)", "Rank of being good at sports (1=most important for popularity, 4=least important)", "Rank of being handsome or pretty (1=most important for popularity, 4=least important)", "Rank of having lots of money (1=most important for popularity, 4=least important)"]
		},
		x: {
			Gender: ["boy", "boy", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "boy", "boy", "boy", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "boy", "boy", "boy", "boy", "boy", "boy", "boy", "boy", "boy", "boy", "boy", "boy", "boy", "boy", "boy", "boy", "boy", "boy", "boy", "boy", "boy", "boy", "boy", "boy", "boy", "boy", "boy", "boy", "boy", "boy", "boy", "boy", "boy", "boy", "boy", "boy", "boy", "boy", "boy", "boy", "boy", "boy", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "boy", "boy", "boy", "boy", "boy", "boy", "boy", "boy", "boy", "boy", "boy", "boy", "boy", "boy", "boy", "boy", "boy", "boy", "boy", "boy", "boy", "boy", "boy", "boy", "boy", "boy", "boy", "boy", "boy", "boy", "boy", "boy", "boy", "boy", "boy", "boy", "boy", "boy", "boy", "boy", "boy", "boy", "boy", "boy", "boy", "boy", "boy", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "boy", "boy", "boy", "boy", "boy", "boy", "boy", "boy", "boy", "boy", "boy", "boy", "boy", "boy", "boy", "boy", "boy", "boy", "boy", "boy", "boy", "boy", "boy", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "boy", "boy", "boy", "boy", "boy", "boy", "boy", "boy", "boy", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "boy", "boy", "boy", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "boy", "boy", "boy", "boy", "boy", "boy", "boy", "boy", "boy", "boy", "boy", "boy", "boy", "boy", "boy", "boy", "boy", "boy", "boy", "boy", "boy", "boy", "boy", "boy", "boy", "boy", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "boy", "boy", "boy", "boy", "boy", "boy", "boy", "boy", "boy", "boy", "boy", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "boy", "boy", "boy", "boy", "boy", "boy", "boy", "boy", "boy", "boy", "boy", "boy", "boy", "boy", "boy", "boy", "boy", "boy", "boy", "boy", "girl", "girl", "boy", "boy", "boy", "girl", "girl", "girl", "girl", "boy", "boy", "boy", "boy", "boy", "boy", "boy", "boy", "boy", "boy", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "boy", "boy", "boy", "boy", "boy", "boy", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "boy", "boy", "boy", "boy", "girl", "girl", "girl", "girl", "girl", "boy", "boy", "boy", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "girl", "boy", "boy", "boy", "boy", "boy", "boy", "boy", "boy", "boy", "boy", "boy", "boy", "boy", "boy", "boy"],
			Grade: ["5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "5", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "5", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "5", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6", "6"],
			Age: ["11", "10", "11", "11", "10", "11", "10", "10", "10", "10", "11", "10", "9", "9", "9", "9", "9", "9", "9", "9", "9", "9", "9", "9", "7", "9", "10", "9", "10", "10", "10", "9", "9", "10", "11", "9", "10", "10", "10", "9", "9", "10", "9", "11", "11", "11", "11", "11", "11", "11", "10", "11", "11", "10", "10", "10", "11", "11", "10", "11", "10", "10", "11", "10", "10", "10", "10", "11", "10", "10", "10", "9", "11", "12", "10", "11", "11", "10", "10", "12", "11", "11", "10", "10", "10", "10", "10", "11", "11", "11", "11", "11", "11", "11", "11", "13", "11", "11", "11", "12", "11", "11", "11", "11", "11", "11", "11", "11", "12", "11", "12", "11", "11", "11", "11", "11", "11", "11", "12", "11", "11", "11", "12", "12", "11", "11", "12", "11", "11", "12", "12", "11", "12", "12", "12", "12", "11", "11", "11", "12", "11", "11", "12", "11", "11", "11", "12", "12", "11", "12", "11", "12", "11", "12", "11", "11", "11", "11", "11", "11", "12", "11", "12", "11", "12", "12", "12", "12", "13", "11", "12", "12", "9", "9", "9", "9", "9", "9", "9", "9", "9", "9", "9", "9", "10", "9", "10", "9", "9", "10", "9", "9", "9", "9", "9", "10", "10", "10", "11", "10", "11", "11", "10", "10", "10", "11", "10", "10", "10", "10", "10", "10", "11", "10", "11", "11", "10", "10", "11", "10", "12", "10", "10", "10", "10", "10", "11", "10", "10", "10", "10", "10", "11", "10", "10", "10", "10", "9", "10", "10", "9", "9", "9", "10", "9", "9", "9", "9", "12", "11", "11", "11", "11", "12", "12", "11", "11", "12", "11", "11", "11", "11", "11", "11", "12", "11", "11", "11", "11", "12", "11", "12", "11", "11", "12", "13", "11", "11", "12", "11", "12", "11", "12", "11", "12", "11", "11", "12", "11", "11", "12", "12", "11", "12", "11", "13", "11", "11", "11", "11", "9", "9", "9", "9", "9", "9", "10", "10", "9", "9", "9", "9", "9", "9", "9", "9", "9", "9", "9", "9", "9", "9", "9", "9", "10", "9", "10", "10", "11", "10", "10", "10", "11", "10", "10", "11", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "10", "11", "10", "11", "10", "10", "10", "10", "11", "9", "10", "10", "10", "10", "11", "11", "11", "9", "11", "10", "10", "9", "9", "9", "9", "9", "10", "9", "9", "9", "9", "9", "10", "11", "10", "11", "10", "10", "11", "10", "10", "10", "10", "10", "10", "11", "10", "10", "10", "10", "10", "11", "10", "10", "11", "10", "10", "11", "10", "11", "11", "11", "10", "10", "11", "10", "9", "9", "9", "9", "9", "9", "9", "9", "9", "9", "9", "9", "9", "9", "9", "9", "11", "11", "11", "11", "11", "11", "11", "11", "11", "11", "11", "11", "11", "11", "12", "11", "11", "11", "11", "12", "11", "11", "11", "11", "11", "11", "11", "11", "11", "11", "11", "11", "11", "11", "12", "11", "11", "11", "12", "11", "11", "12", "11", "11", "11", "11", "11", "11", "11"],
			Race: ["White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "Other", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "Other", "White", "White", "White", "Other", "White", "White", "White", "White", "White", "Other", "White", "White", "White", "White", "White", "White", "White", "White", "Other", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "Other", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "Other", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "Other", "White", "White", "White", "Other", "Other", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "Other", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "Other", "White", "White", "White", "White", "White", "Other", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "Other", "White", "White", "White", "White", "White", "White", "White", "White", "White", "Other", "White", "White", "Other", "White", "Other", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "Other", "White", "White", "White", "White", "White", "White", "White", "Other", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "Other", "Other", "White", "White", "White", "White", "White", "Other", "White", "Other", "White", "White", "White", "White", "White", "Other", "White", "White", "White", "White", "White", "Other", "White", "White", "White", "White", "Other", "White", "White", "White", "White", "White", "Other", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "Other", "White", "White", "White", "White", "Other", "White", "Other", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "Other", "White", "White", "White", "White", "White", "White", "White", "White", "White", "Other", "White", "White", "White", "Other", "White", "White", "White", "White", "Other", "White", "White", "White", "White", "White", "White", "Other", "White", "White", "White", "White", "Other", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White", "White"],
			"Urban/Rural": ["Rural", "Rural", "Rural", "Rural", "Rural", "Rural", "Rural", "Rural", "Rural", "Rural", "Rural", "Rural", "Rural", "Rural", "Rural", "Rural", "Rural", "Rural", "Rural", "Rural", "Rural", "Suburban", "Suburban", "Suburban", "Suburban", "Suburban", "Suburban", "Suburban", "Suburban", "Suburban", "Suburban", "Suburban", "Suburban", "Suburban", "Suburban", "Suburban", "Suburban", "Suburban", "Suburban", "Suburban", "Suburban", "Suburban", "Suburban", "Suburban", "Suburban", "Suburban", "Suburban", "Suburban", "Suburban", "Suburban", "Suburban", "Suburban", "Suburban", "Suburban", "Suburban", "Suburban", "Suburban", "Suburban", "Suburban", "Suburban", "Suburban", "Suburban", "Suburban", "Suburban", "Suburban", "Suburban", "Suburban", "Suburban", "Suburban", "Suburban", "Suburban", "Suburban", "Suburban", "Suburban", "Suburban", "Suburban", "Suburban", "Suburban", "Suburban", "Suburban", "Suburban", "Suburban", "Suburban", "Suburban", "Suburban", "Suburban", "Suburban", "Suburban", "Suburban", "Suburban", "Suburban", "Suburban", "Suburban", "Suburban", "Suburban", "Suburban", "Suburban", "Suburban", "Suburban", "Suburban", "Suburban", "Suburban", "Suburban", "Suburban", "Suburban", "Suburban", "Suburban", "Suburban", "Suburban", "Suburban", "Suburban", "Suburban", "Suburban", "Suburban", "Suburban", "Suburban", "Suburban", "Suburban", "Suburban", "Suburban", "Suburban", "Suburban", "Suburban", "Suburban", "Suburban", "Suburban", "Suburban", "Suburban", "Suburban", "Suburban", "Suburban", "Suburban", "Suburban", "Suburban", "Suburban", "Suburban", "Suburban", "Suburban", "Suburban", "Suburban", "Suburban", "Suburban", "Suburban", "Suburban", "Suburban", "Suburban", "Suburban", "Suburban", "Suburban", "Suburban", "Suburban", "Suburban", "Suburban", "Suburban", "Suburban", "Suburban", "Suburban", "Suburban", "Suburban", "Suburban", "Suburban", "Suburban", "Suburban", "Suburban", "Suburban", "Suburban", "Suburban", "Suburban", "Suburban", "Suburban", "Suburban", "Suburban", "Rural", "Rural", "Rural", "Rural", "Rural", "Rural", "Rural", "Rural", "Rural", "Rural", "Rural", "Rural", "Rural", "Rural", "Rural", "Rural", "Rural", "Rural", "Rural", "Rural", "Rural", "Rural", "Rural", "Rural", "Rural", "Rural", "Rural", "Rural", "Rural", "Rural", "Rural", "Rural", "Rural", "Rural", "Rural", "Rural", "Rural", "Rural", "Rural", "Rural", "Rural", "Rural", "Rural", "Rural", "Rural", "Rural", "Rural", "Rural", "Rural", "Rural", "Rural", "Rural", "Rural", "Rural", "Rural", "Rural", "Rural", "Rural", "Rural", "Rural", "Rural", "Rural", "Rural", "Rural", "Rural", "Rural", "Rural", "Rural", "Rural", "Rural", "Rural", "Rural", "Rural", "Rural", "Rural", "Rural", "Rural", "Rural", "Rural", "Rural", "Rural", "Rural", "Rural", "Rural", "Rural", "Rural", "Rural", "Rural", "Rural", "Rural", "Rural", "Rural", "Rural", "Rural", "Rural", "Rural", "Rural", "Rural", "Rural", "Rural", "Rural", "Rural", "Rural", "Rural", "Rural", "Rural", "Rural", "Rural", "Rural", "Rural", "Rural", "Rural", "Rural", "Rural", "Rural", "Rural", "Rural", "Rural", "Rural", "Rural", "Rural", "Rural", "Rural", "Rural", "Rural", "Rural", "Rural", "Rural", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban", "Urban"],
			School: ["Elm", "Elm", "Elm", "Elm", "Elm", "Elm", "Elm", "Elm", "Elm", "Elm", "Elm", "Elm", "Elm", "Elm", "Elm", "Elm", "Elm", "Elm", "Elm", "Elm", "Elm", "Brentwood Elementary", "Brentwood Elementary", "Brentwood Elementary", "Brentwood Elementary", "Brentwood Elementary", "Brentwood Elementary", "Brentwood Elementary", "Brentwood Elementary", "Brentwood Elementary", "Brentwood Elementary", "Brentwood Elementary", "Brentwood Elementary", "Brentwood Elementary", "Brentwood Elementary", "Brentwood Elementary", "Brentwood Elementary", "Brentwood Elementary", "Brentwood Elementary", "Brentwood Elementary", "Brentwood Elementary", "Brentwood Elementary", "Brentwood Elementary", "Brentwood Elementary", "Brentwood Elementary", "Brentwood Elementary", "Brentwood Elementary", "Brentwood Elementary", "Brentwood Elementary", "Brentwood Elementary", "Brentwood Elementary", "Brentwood Elementary", "Brentwood Elementary", "Brentwood Elementary", "Brentwood Elementary", "Brentwood Elementary", "Brentwood Elementary", "Brentwood Elementary", "Brentwood Elementary", "Brentwood Elementary", "Brentwood Elementary", "Brentwood Elementary", "Brentwood Elementary", "Brentwood Elementary", "Brentwood Elementary", "Brentwood Elementary", "Brentwood Elementary", "Brentwood Elementary", "Brentwood Elementary", "Brentwood Elementary", "Brentwood Elementary", "Brentwood Elementary", "Brentwood Elementary", "Brentwood Elementary", "Brentwood Elementary", "Brentwood Elementary", "Brentwood Elementary", "Brentwood Elementary", "Brentwood Elementary", "Brentwood Elementary", "Brentwood Elementary", "Brentwood Elementary", "Brentwood Elementary", "Brentwood Elementary", "Brentwood Elementary", "Brentwood Elementary", "Brentwood Elementary", "Brentwood Elementary", "Brentwood Middle", "Brentwood Middle", "Brentwood Middle", "Brentwood Middle", "Brentwood Middle", "Brentwood Middle", "Brentwood Middle", "Brentwood Middle", "Brentwood Middle", "Brentwood Middle", "Brentwood Middle", "Brentwood Middle", "Brentwood Middle", "Brentwood Middle", "Brentwood Middle", "Brentwood Middle", "Brentwood Middle", "Brentwood Middle", "Brentwood Middle", "Brentwood Middle", "Brentwood Middle", "Brentwood Middle", "Brentwood Middle", "Brentwood Middle", "Brentwood Middle", "Brentwood Middle", "Brentwood Middle", "Brentwood Middle", "Brentwood Middle", "Brentwood Middle", "Brentwood Middle", "Brentwood Middle", "Brentwood Middle", "Brentwood Middle", "Brentwood Middle", "Brentwood Middle", "Brentwood Middle", "Brentwood Middle", "Brentwood Middle", "Brentwood Middle", "Brentwood Middle", "Brentwood Middle", "Brentwood Middle", "Brentwood Middle", "Brentwood Middle", "Brentwood Middle", "Brentwood Middle", "Brentwood Middle", "Brentwood Middle", "Brentwood Middle", "Brentwood Middle", "Brentwood Middle", "Brentwood Middle", "Brentwood Middle", "Brentwood Middle", "Brentwood Middle", "Brentwood Middle", "Brentwood Middle", "Brentwood Middle", "Brentwood Middle", "Brentwood Middle", "Brentwood Middle", "Brentwood Middle", "Brentwood Middle", "Brentwood Middle", "Brentwood Middle", "Brentwood Middle", "Brentwood Middle", "Brentwood Middle", "Brentwood Middle", "Brentwood Middle", "Brentwood Middle", "Brentwood Middle", "Brentwood Middle", "Brentwood Middle", "Brentwood Middle", "Brentwood Middle", "Brentwood Middle", "Brentwood Middle", "Brentwood Middle", "Brentwood Middle", "Brentwood Middle", "Brentwood Middle", "Brentwood Middle", "Ridge", "Ridge", "Ridge", "Ridge", "Ridge", "Ridge", "Ridge", "Ridge", "Ridge", "Ridge", "Ridge", "Ridge", "Ridge", "Ridge", "Ridge", "Ridge", "Ridge", "Ridge", "Ridge", "Ridge", "Ridge", "Ridge", "Ridge", "Ridge", "Ridge", "Ridge", "Ridge", "Ridge", "Ridge", "Ridge", "Ridge", "Ridge", "Ridge", "Ridge", "Ridge", "Ridge", "Ridge", "Ridge", "Ridge", "Ridge", "Ridge", "Ridge", "Ridge", "Ridge", "Ridge", "Ridge", "Ridge", "Ridge", "Sand", "Sand", "Sand", "Sand", "Sand", "Sand", "Sand", "Sand", "Sand", "Sand", "Sand", "Sand", "Sand", "Sand", "Sand", "Sand", "Sand", "Sand", "Sand", "Sand", "Sand", "Sand", "Sand", "Sand", "Sand", "Sand", "Sand", "Sand", "Brown Middle", "Brown Middle", "Brown Middle", "Brown Middle", "Brown Middle", "Brown Middle", "Brown Middle", "Brown Middle", "Brown Middle", "Brown Middle", "Brown Middle", "Brown Middle", "Brown Middle", "Brown Middle", "Brown Middle", "Brown Middle", "Brown Middle", "Brown Middle", "Brown Middle", "Brown Middle", "Brown Middle", "Brown Middle", "Brown Middle", "Brown Middle", "Brown Middle", "Brown Middle", "Brown Middle", "Brown Middle", "Brown Middle", "Brown Middle", "Brown Middle", "Brown Middle", "Brown Middle", "Brown Middle", "Brown Middle", "Brown Middle", "Brown Middle", "Brown Middle", "Brown Middle", "Brown Middle", "Brown Middle", "Brown Middle", "Brown Middle", "Brown Middle", "Brown Middle", "Brown Middle", "Brown Middle", "Brown Middle", "Brown Middle", "Brown Middle", "Brown Middle", "Brown Middle", "Main", "Main", "Main", "Main", "Main", "Main", "Main", "Main", "Main", "Main", "Main", "Main", "Main", "Main", "Main", "Main", "Main", "Main", "Main", "Main", "Main", "Main", "Main", "Main", "Main", "Main", "Main", "Main", "Main", "Main", "Main", "Main", "Main", "Main", "Main", "Main", "Main", "Main", "Main", "Main", "Main", "Main", "Main", "Main", "Main", "Main", "Main", "Main", "Main", "Main", "Main", "Main", "Main", "Main", "Main", "Main", "Main", "Main", "Main", "Main", "Main", "Main", "Main", "Main", "Main", "Main", "Main", "Main", "Portage", "Portage", "Portage", "Portage", "Portage", "Portage", "Portage", "Portage", "Portage", "Portage", "Portage", "Portage", "Portage", "Portage", "Portage", "Portage", "Portage", "Portage", "Portage", "Portage", "Portage", "Portage", "Portage", "Portage", "Portage", "Portage", "Portage", "Portage", "Portage", "Portage", "Portage", "Portage", "Portage", "Portage", "Portage", "Portage", "Portage", "Portage", "Portage", "Portage", "Portage", "Portage", "Portage", "Portage", "Portage", "Portage", "Portage", "Portage", "Portage", "Portage", "Portage", "Portage", "Portage", "Portage", "Portage", "Portage", "Portage", "Portage", "Portage", "Portage", "Portage", "Westdale Middle", "Westdale Middle", "Westdale Middle", "Westdale Middle", "Westdale Middle", "Westdale Middle", "Westdale Middle", "Westdale Middle", "Westdale Middle", "Westdale Middle", "Westdale Middle", "Westdale Middle", "Westdale Middle", "Westdale Middle", "Westdale Middle", "Westdale Middle", "Westdale Middle", "Westdale Middle", "Westdale Middle", "Westdale Middle", "Westdale Middle", "Westdale Middle", "Westdale Middle", "Westdale Middle", "Westdale Middle", "Westdale Middle", "Westdale Middle", "Westdale Middle", "Westdale Middle", "Westdale Middle", "Westdale Middle", "Westdale Middle", "Westdale Middle", "Westdale Middle", "Westdale Middle", "Westdale Middle", "Westdale Middle", "Westdale Middle", "Westdale Middle", "Westdale Middle", "Westdale Middle", "Westdale Middle", "Westdale Middle", "Westdale Middle", "Westdale Middle", "Westdale Middle", "Westdale Middle", "Westdale Middle", "Westdale Middle"],
			Goals: ["Sports", "Popular", "Popular", "Popular", "Popular", "Popular", "Popular", "Grades", "Sports", "Sports", "Sports", "Grades", "Popular", "Popular", "Popular", "Grades", "Sports", "Popular", "Grades", "Sports", "Popular", "Grades", "Popular", "Grades", "Grades", "Popular", "Popular", "Grades", "Popular", "Grades", "Grades", "Grades", "Grades", "Grades", "Sports", "Sports", "Popular", "Sports", "Grades", "Sports", "Grades", "Grades", "Popular", "Grades", "Popular", "Grades", "Popular", "Sports", "Grades", "Popular", "Grades", "Sports", "Sports", "Popular", "Sports", "Sports", "Grades", "Grades", "Grades", "Grades", "Grades", "Popular", "Grades", "Grades", "Grades", "Grades", "Grades", "Popular", "Grades", "Grades", "Popular", "Popular", "Grades", "Grades", "Grades", "Grades", "Grades", "Grades", "Grades", "Popular", "Grades", "Grades", "Grades", "Grades", "Popular", "Popular", "Grades", "Sports", "Popular", "Popular", "Popular", "Grades", "Sports", "Grades", "Popular", "Grades", "Popular", "Popular", "Popular", "Grades", "Grades", "Popular", "Grades", "Grades", "Grades", "Sports", "Grades", "Popular", "Grades", "Popular", "Popular", "Popular", "Grades", "Popular", "Grades", "Grades", "Grades", "Grades", "Sports", "Popular", "Grades", "Grades", "Grades", "Grades", "Grades", "Popular", "Grades", "Popular", "Popular", "Grades", "Grades", "Popular", "Grades", "Grades", "Popular", "Grades", "Sports", "Grades", "Sports", "Grades", "Grades", "Grades", "Grades", "Grades", "Sports", "Popular", "Grades", "Popular", "Grades", "Popular", "Grades", "Grades", "Grades", "Sports", "Sports", "Grades", "Popular", "Grades", "Popular", "Grades", "Sports", "Grades", "Grades", "Grades", "Popular", "Grades", "Grades", "Sports", "Sports", "Grades", "Sports", "Grades", "Grades", "Grades", "Popular", "Popular", "Sports", "Popular", "Sports", "Grades", "Sports", "Sports", "Popular", "Popular", "Grades", "Grades", "Grades", "Grades", "Popular", "Sports", "Popular", "Sports", "Popular", "Popular", "Grades", "Grades", "Sports", "Sports", "Sports", "Popular", "Grades", "Popular", "Sports", "Sports", "Sports", "Popular", "Grades", "Popular", "Sports", "Grades", "Popular", "Popular", "Sports", "Grades", "Popular", "Grades", "Popular", "Popular", "Grades", "Grades", "Sports", "Popular", "Popular", "Sports", "Sports", "Sports", "Grades", "Grades", "Grades", "Popular", "Popular", "Popular", "Grades", "Grades", "Grades", "Popular", "Grades", "Grades", "Grades", "Grades", "Grades", "Grades", "Grades", "Popular", "Grades", "Sports", "Sports", "Grades", "Popular", "Popular", "Grades", "Grades", "Grades", "Grades", "Grades", "Popular", "Sports", "Grades", "Popular", "Popular", "Grades", "Popular", "Popular", "Popular", "Grades", "Grades", "Grades", "Grades", "Popular", "Grades", "Grades", "Sports", "Sports", "Grades", "Sports", "Sports", "Sports", "Sports", "Popular", "Sports", "Sports", "Grades", "Grades", "Sports", "Popular", "Grades", "Grades", "Sports", "Grades", "Grades", "Popular", "Sports", "Grades", "Sports", "Popular", "Sports", "Grades", "Sports", "Popular", "Sports", "Grades", "Popular", "Grades", "Sports", "Grades", "Grades", "Grades", "Grades", "Grades", "Popular", "Sports", "Grades", "Grades", "Grades", "Grades", "Grades", "Popular", "Grades", "Sports", "Grades", "Sports", "Sports", "Grades", "Grades", "Grades", "Grades", "Grades", "Grades", "Grades", "Grades", "Popular", "Popular", "Grades", "Grades", "Popular", "Sports", "Grades", "Grades", "Popular", "Grades", "Popular", "Popular", "Popular", "Grades", "Grades", "Grades", "Grades", "Grades", "Sports", "Grades", "Grades", "Grades", "Grades", "Grades", "Sports", "Grades", "Grades", "Grades", "Grades", "Grades", "Sports", "Popular", "Grades", "Popular", "Grades", "Sports", "Sports", "Grades", "Sports", "Sports", "Grades", "Grades", "Grades", "Grades", "Grades", "Popular", "Popular", "Popular", "Grades", "Grades", "Grades", "Grades", "Popular", "Grades", "Grades", "Grades", "Grades", "Popular", "Grades", "Popular", "Popular", "Grades", "Popular", "Popular", "Grades", "Grades", "Grades", "Sports", "Sports", "Grades", "Sports", "Grades", "Popular", "Grades", "Popular", "Popular", "Sports", "Popular", "Grades", "Popular", "Sports", "Popular", "Popular", "Sports", "Sports", "Grades", "Grades", "Sports", "Grades", "Sports", "Popular", "Grades", "Grades", "Grades", "Popular", "Grades", "Popular", "Grades", "Popular", "Popular", "Popular", "Popular", "Popular", "Grades", "Popular", "Popular", "Grades", "Grades", "Grades", "Grades", "Popular", "Grades", "Popular", "Popular", "Grades", "Grades", "Popular", "Popular", "Grades", "Grades", "Grades", "Grades", "Sports", "Grades", "Grades", "Popular", "Popular", "Grades", "Grades", "Grades", "Popular", "Sports", "Grades", "Grades", "Sports", "Grades", "Grades", "Grades", "Grades", "Popular", "Grades", "Grades", "Grades", "Grades", "Sports", "Grades", "Popular", "Popular"]
		},
		y: {
			smps: ["s1", "s2", "s3", "s4", "s5", "s6", "s7", "s8", "s9", "s10", "s11", "s12", "s13", "s14", "s15", "s16", "s17", "s18", "s19", "s20", "s21", "s22", "s23", "s24", "s25", "s26", "s27", "s28", "s29", "s30", "s31", "s32", "s33", "s34", "s35", "s36", "s37", "s38", "s39", "s40", "s41", "s42", "s43", "s44", "s45", "s46", "s47", "s48", "s49", "s50", "s51", "s52", "s53", "s54", "s55", "s56", "s57", "s58", "s59", "s60", "s61", "s62", "s63", "s64", "s65", "s66", "s67", "s68", "s69", "s70", "s71", "s72", "s73", "s74", "s75", "s76", "s77", "s78", "s79", "s80", "s81", "s82", "s83", "s84", "s85", "s86", "s87", "s88", "s89", "s90", "s91", "s92", "s93", "s94", "s95", "s96", "s97", "s98", "s99", "s100", "s101", "s102", "s103", "s104", "s105", "s106", "s107", "s108", "s109", "s110", "s111", "s112", "s113", "s114", "s115", "s116", "s117", "s118", "s119", "s120", "s121", "s122", "s123", "s124", "s125", "s126", "s127", "s128", "s129", "s130", "s131", "s132", "s133", "s134", "s135", "s136", "s137", "s138", "s139", "s140", "s141", "s142", "s143", "s144", "s145", "s146", "s147", "s148", "s149", "s150", "s151", "s152", "s153", "s154", "s155", "s156", "s157", "s158", "s159", "s160", "s161", "s162", "s163", "s164", "s165", "s166", "s167", "s168", "s169", "s170", "s171", "s172", "s173", "s174", "s175", "s176", "s177", "s178", "s179", "s180", "s181", "s182", "s183", "s184", "s185", "s186", "s187", "s188", "s189", "s190", "s191", "s192", "s193", "s194", "s195", "s196", "s197", "s198", "s199", "s200", "s201", "s202", "s203", "s204", "s205", "s206", "s207", "s208", "s209", "s210", "s211", "s212", "s213", "s214", "s215", "s216", "s217", "s218", "s219", "s220", "s221", "s222", "s223", "s224", "s225", "s226", "s227", "s228", "s229", "s230", "s231", "s232", "s233", "s234", "s235", "s236", "s237", "s238", "s239", "s240", "s241", "s242", "s243", "s244", "s245", "s246", "s247", "s248", "s249", "s250", "s251", "s252", "s253", "s254", "s255", "s256", "s257", "s258", "s259", "s260", "s261", "s262", "s263", "s264", "s265", "s266", "s267", "s268", "s269", "s270", "s271", "s272", "s273", "s274", "s275", "s276", "s277", "s278", "s279", "s280", "s281", "s282", "s283", "s284", "s285", "s286", "s287", "s288", "s289", "s290", "s291", "s292", "s293", "s294", "s295", "s296", "s297", "s298", "s299", "s300", "s301", "s302", "s303", "s304", "s305", "s306", "s307", "s308", "s309", "s310", "s311", "s312", "s313", "s314", "s315", "s316", "s317", "s318", "s319", "s320", "s321", "s322", "s323", "s324", "s325", "s326", "s327", "s328", "s329", "s330", "s331", "s332", "s333", "s334", "s335", "s336", "s337", "s338", "s339", "s340", "s341", "s342", "s343", "s344", "s345", "s346", "s347", "s348", "s349", "s350", "s351", "s352", "s353", "s354", "s355", "s356", "s357", "s358", "s359", "s360", "s361", "s362", "s363", "s364", "s365", "s366", "s367", "s368", "s369", "s370", "s371", "s372", "s373", "s374", "s375", "s376", "s377", "s378", "s379", "s380", "s381", "s382", "s383", "s384", "s385", "s386", "s387", "s388", "s389", "s390", "s391", "s392", "s393", "s394", "s395", "s396", "s397", "s398", "s399", "s400", "s401", "s402", "s403", "s404", "s405", "s406", "s407", "s408", "s409", "s410", "s411", "s412", "s413", "s414", "s415", "s416", "s417", "s418", "s419", "s420", "s421", "s422", "s423", "s424", "s425", "s426", "s427", "s428", "s429", "s430", "s431", "s432", "s433", "s434", "s435", "s436", "s437", "s438", "s439", "s440", "s441", "s442", "s443", "s444", "s445", "s446", "s447", "s448", "s449", "s450", "s451", "s452", "s453", "s454", "s455", "s456", "s457", "s458", "s459", "s460", "s461", "s462", "s463", "s464", "s465", "s466", "s467", "s468", "s469", "s470", "s471", "s472", "s473", "s474", "s475", "s476", "s477", "s478"],
			vars: ["Grades", "Sports", "Looks", "Money"],
			data: [
				[1, 2, 4, 2, 4, 4, 3, 3, 3, 4, 2, 2, 2, 4, 4, 1, 3, 3, 2, 3, 4, 1, 4, 4, 1, 2, 2, 4, 2, 1, 2, 1, 3, 2, 3, 4, 3, 3, 2, 4, 2, 2, 3, 2, 2, 4, 4, 4, 2, 3, 2, 4, 3, 3, 4, 4, 2, 1, 2, 2, 2, 4, 3, 3, 2, 2, 3, 4, 1, 2, 4, 2, 3, 2, 3, 2, 2, 2, 1, 3, 1, 3, 3, 2, 2, 3, 1, 1, 2, 1, 1, 4, 1, 3, 1, 2, 4, 4, 3, 2, 4, 4, 3, 4, 4, 3, 4, 1, 3, 4, 2, 2, 2, 4, 3, 4, 3, 4, 4, 1, 4, 4, 3, 4, 4, 3, 3, 3, 4, 4, 1, 3, 1, 2, 4, 4, 3, 4, 2, 2, 2, 4, 4, 4, 2, 3, 3, 3, 3, 2, 1, 2, 1, 2, 2, 4, 3, 3, 3, 1, 2, 1, 2, 4, 4, 4, 4, 1, 1, 2, 3, 1, 1, 1, 1, 2, 1, 3, 2, 1, 3, 2, 2, 4, 1, 3, 2, 1, 2, 4, 1, 2, 4, 3, 1, 1, 3, 4, 2, 1, 1, 3, 1, 2, 3, 4, 3, 4, 3, 3, 2, 3, 4, 1, 4, 1, 4, 1, 1, 1, 2, 4, 2, 4, 2, 3, 4, 2, 1, 2, 3, 1, 2, 1, 2, 3, 2, 3, 3, 1, 2, 1, 3, 2, 1, 3, 3, 2, 4, 3, 4, 4, 1, 4, 3, 1, 4, 4, 2, 3, 1, 3, 1, 4, 4, 2, 2, 1, 4, 3, 4, 2, 2, 4, 4, 4, 3, 4, 4, 2, 3, 4, 4, 4, 2, 3, 2, 3, 3, 4, 4, 3, 1, 4, 4, 4, 4, 3, 4, 3, 1, 4, 1, 4, 2, 2, 3, 3, 1, 2, 1, 1, 1, 4, 1, 3, 1, 3, 1, 3, 2, 2, 2, 4, 2, 2, 4, 1, 2, 4, 3, 2, 1, 1, 4, 2, 1, 4, 1, 4, 2, 4, 2, 1, 1, 2, 1, 1, 3, 2, 1, 2, 1, 2, 2, 2, 2, 3, 1, 2, 2, 3, 1, 3, 3, 2, 2, 3, 4, 3, 4, 1, 1, 3, 1, 2, 4, 3, 1, 1, 1, 2, 3, 2, 3, 1, 1, 3, 1, 2, 3, 1, 3, 2, 3, 1, 2, 3, 3, 3, 3, 4, 4, 2, 2, 3, 3, 2, 2, 3, 3, 4, 3, 3, 3, 4, 1, 2, 2, 1, 4, 3, 2, 1, 3, 4, 4, 3, 3, 3, 4, 3, 4, 4, 4, 4, 3, 2, 4, 3, 3, 4, 3, 2, 4, 2, 3, 2, 2, 4, 3, 2, 4, 4, 3, 4, 3, 3, 3, 3, 4, 3, 4, 3, 3, 3, 1, 3, 2, 3, 3, 4, 3, 4, 4, 4, 4, 4],
				[2, 1, 3, 3, 2, 2, 4, 4, 2, 3, 3, 3, 3, 2, 3, 3, 1, 4, 3, 2, 3, 4, 2, 3, 2, 3, 3, 2, 3, 2, 4, 2, 1, 1, 1, 3, 2, 1, 3, 1, 1, 1, 2, 1, 1, 1, 3, 2, 1, 2, 1, 1, 1, 2, 1, 1, 1, 2, 3, 1, 1, 1, 1, 4, 1, 1, 1, 2, 3, 1, 2, 3, 2, 3, 4, 4, 1, 3, 2, 4, 4, 4, 1, 1, 3, 2, 3, 3, 3, 3, 3, 1, 2, 4, 2, 4, 2, 3, 4, 3, 3, 3, 2, 3, 1, 1, 3, 2, 1, 3, 3, 1, 3, 3, 2, 2, 4, 3, 3, 3, 2, 3, 2, 2, 2, 1, 1, 2, 2, 1, 3, 1, 2, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 2, 2, 1, 2, 3, 2, 1, 3, 1, 1, 3, 2, 2, 1, 1, 2, 3, 3, 4, 4, 2, 4, 3, 4, 2, 1, 3, 2, 2, 4, 1, 2, 3, 1, 2, 1, 3, 4, 3, 3, 1, 2, 3, 4, 2, 2, 2, 1, 1, 1, 1, 2, 1, 2, 3, 2, 2, 2, 2, 3, 3, 2, 3, 2, 1, 3, 1, 1, 1, 1, 2, 1, 2, 3, 2, 3, 4, 2, 4, 2, 4, 1, 1, 3, 1, 3, 4, 1, 3, 2, 2, 1, 2, 4, 2, 2, 3, 3, 2, 2, 1, 3, 1, 2, 3, 1, 2, 2, 2, 3, 3, 4, 2, 1, 2, 1, 4, 2, 3, 1, 1, 2, 2, 1, 1, 1, 2, 1, 3, 2, 1, 1, 1, 1, 3, 1, 2, 1, 2, 2, 3, 1, 2, 1, 2, 3, 3, 1, 1, 4, 2, 2, 2, 1, 3, 2, 2, 3, 2, 1, 3, 1, 2, 1, 1, 3, 1, 1, 1, 1, 2, 2, 1, 3, 2, 4, 2, 2, 1, 1, 2, 3, 4, 1, 3, 3, 1, 2, 3, 4, 2, 2, 1, 1, 4, 1, 2, 1, 1, 1, 1, 4, 2, 1, 1, 1, 2, 1, 1, 1, 1, 2, 3, 2, 3, 2, 2, 1, 3, 3, 1, 1, 3, 2, 3, 1, 2, 4, 1, 2, 3, 2, 2, 4, 1, 2, 1, 3, 1, 3, 1, 1, 1, 2, 1, 1, 3, 1, 4, 2, 2, 4, 4, 2, 2, 3, 2, 2, 2, 3, 4, 4, 4, 3, 3, 2, 1, 2, 1, 3, 2, 2, 2, 2, 3, 1, 2, 2, 2, 1, 2, 3, 3, 2, 2, 2, 1, 4, 3, 3, 2, 3, 1, 2, 2, 3, 1, 3, 4, 2, 4, 4, 2, 2, 3, 2, 2, 1, 2, 1, 2, 1, 1, 1, 1, 2, 2, 1, 1, 2, 1, 1],
				[4, 4, 1, 4, 1, 1, 1, 2, 1, 2, 1, 4, 4, 3, 2, 2, 2, 1, 1, 1, 1, 2, 1, 2, 3, 1, 1, 1, 4, 4, 3, 4, 2, 3, 2, 2, 1, 4, 1, 3, 3, 4, 4, 3, 4, 2, 1, 1, 3, 1, 3, 2, 2, 1, 3, 3, 3, 4, 1, 3, 3, 2, 2, 1, 3, 4, 2, 1, 2, 4, 1, 1, 1, 1, 1, 1, 4, 1, 3, 1, 2, 1, 2, 4, 1, 1, 2, 2, 1, 2, 4, 2, 3, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 3, 2, 1, 1, 3, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 2, 2, 1, 1, 2, 4, 2, 3, 3, 1, 2, 2, 2, 4, 4, 4, 2, 2, 2, 1, 2, 2, 2, 2, 4, 3, 4, 3, 3, 3, 3, 1, 1, 4, 3, 1, 3, 3, 2, 2, 2, 1, 3, 4, 3, 2, 3, 2, 2, 3, 1, 3, 1, 1, 2, 1, 3, 1, 1, 3, 2, 3, 3, 1, 2, 4, 4, 1, 1, 2, 2, 2, 1, 4, 3, 4, 1, 4, 3, 2, 2, 2, 1, 2, 1, 1, 1, 1, 4, 1, 4, 1, 3, 2, 3, 3, 1, 3, 2, 4, 4, 3, 3, 4, 1, 1, 2, 1, 3, 3, 1, 1, 2, 4, 2, 3, 2, 1, 3, 2, 1, 1, 3, 1, 1, 1, 1, 2, 1, 1, 3, 3, 1, 3, 1, 4, 2, 3, 1, 1, 1, 1, 2, 1, 2, 1, 3, 1, 1, 1, 2, 2, 1, 3, 3, 2, 2, 1, 2, 4, 1, 3, 2, 4, 2, 2, 2, 3, 2, 1, 1, 1, 4, 1, 4, 3, 1, 2, 2, 3, 1, 1, 1, 3, 3, 2, 3, 3, 1, 4, 2, 2, 4, 4, 2, 4, 1, 4, 3, 4, 3, 1, 3, 4, 1, 1, 1, 3, 3, 2, 4, 4, 2, 2, 2, 1, 2, 3, 4, 2, 3, 3, 3, 2, 4, 2, 4, 4, 3, 3, 4, 3, 2, 3, 3, 4, 2, 3, 2, 4, 3, 3, 1, 1, 1, 1, 3, 3, 2, 2, 1, 2, 2, 2, 4, 2, 3, 1, 1, 4, 3, 2, 1, 3, 1, 2, 3, 2, 1, 2, 2, 3, 4, 2, 1, 2, 3, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 2, 3, 1, 1, 4, 1, 1, 4, 3, 2, 2, 3, 1, 1, 1, 2, 2, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 2, 3, 1, 1, 1, 4, 3, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 3, 2, 3, 2, 2, 1, 1, 2, 2, 1, 3, 2],
				[3, 3, 2, 1, 3, 3, 2, 1, 4, 1, 4, 1, 1, 1, 1, 4, 4, 2, 4, 4, 2, 3, 3, 1, 4, 4, 4, 3, 1, 3, 1, 3, 4, 4, 4, 1, 4, 2, 4, 2, 4, 3, 1, 4, 3, 3, 2, 3, 4, 4, 4, 3, 4, 4, 2, 2, 4, 3, 4, 4, 4, 3, 4, 2, 4, 3, 4, 3, 4, 3, 3, 4, 4, 4, 2, 3, 3, 4, 4, 2, 3, 2, 4, 3, 4, 4, 4, 4, 4, 4, 2, 3, 4, 2, 4, 3, 3, 2, 2, 4, 2, 2, 4, 2, 3, 4, 1, 4, 4, 2, 4, 4, 4, 2, 4, 3, 2, 2, 1, 4, 3, 2, 4, 3, 3, 4, 4, 4, 3, 3, 2, 4, 4, 4, 2, 3, 4, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 3, 4, 3, 4, 4, 4, 2, 4, 4, 2, 4, 4, 4, 4, 1, 3, 3, 2, 4, 3, 4, 4, 4, 4, 4, 2, 3, 4, 2, 4, 3, 4, 4, 4, 3, 4, 1, 4, 4, 4, 3, 3, 3, 2, 2, 4, 4, 4, 3, 1, 2, 3, 4, 3, 4, 4, 3, 4, 3, 4, 4, 4, 4, 3, 3, 3, 2, 2, 4, 4, 4, 4, 2, 4, 3, 3, 2, 1, 4, 3, 4, 4, 4, 3, 4, 1, 4, 3, 4, 2, 4, 4, 4, 2, 4, 4, 4, 4, 4, 3, 2, 3, 3, 4, 2, 4, 4, 2, 2, 4, 4, 2, 4, 4, 3, 3, 4, 4, 3, 3, 4, 3, 4, 3, 3, 2, 3, 4, 3, 1, 4, 4, 3, 3, 3, 1, 4, 4, 4, 2, 3, 1, 4, 4, 3, 3, 3, 2, 2, 3, 2, 4, 2, 4, 3, 4, 3, 4, 4, 4, 4, 4, 4, 4, 2, 3, 4, 4, 2, 3, 4, 3, 4, 3, 2, 3, 4, 3, 4, 3, 2, 4, 3, 4, 4, 3, 3, 3, 1, 3, 3, 4, 1, 4, 3, 4, 1, 4, 4, 4, 3, 3, 3, 3, 4, 4, 3, 4, 1, 4, 4, 3, 4, 4, 4, 2, 4, 4, 4, 2, 4, 2, 4, 4, 4, 4, 4, 3, 4, 4, 3, 4, 4, 4, 3, 2, 4, 4, 4, 4, 3, 4, 4, 4, 4, 4, 4, 4, 2, 4, 4, 4, 2, 2, 4, 3, 4, 4, 3, 3, 4, 4, 2, 4, 1, 1, 1, 2, 3, 3, 2, 2, 4, 3, 4, 4, 1, 1, 4, 4, 4, 1, 4, 3, 3, 3, 3, 4, 4, 2, 4, 4, 3, 4, 1, 2, 4, 4, 1, 4, 3, 4, 4, 3, 2, 2, 3, 2, 2, 4, 4, 2, 4, 3, 4, 4, 4, 4, 4, 4, 4, 4, 3, 4, 3, 3, 3, 2, 3]
			]
		},
		m: {
			Name: "Popular Kids",
			Description: "Subjects were students in grades 4-6 from three school districts in Ingham and Clinton Counties, Michigan. Chase and Dummer stratified their sample, selecting students from urban, suburban, and rural school districts with approximately 1/3 of their sample coming from each district. Students indicated whether good grades, athletic ability, or popularity was most important to them. They also ranked four factors: grades, sports, looks, and money, in order of their importance for popularity. The questionnaire also asked for gender, grade level, and other demographic information.",
			Reference: "Chase, M. A., and Dummer, G. M. (1992), The Role of Sports as a Social Determinant for Children, Research Quarterly for Exercise and Sport, 63, 418-424"
		}
	};
	this.dataSetLesMiserables = {
		nodes: [{
			id: "Id0",
			name: "Myriel",
			group: 1
		}, {
			id: "Id1",
			name: "Napoleon",
			group: 1
		}, {
			id: "Id2",
			name: "Mlle. Baptistine",
			group: 1
		}, {
			id: "Id3",
			name: "Mme. Magloire",
			group: 1
		}, {
			id: "Id4",
			name: "Countess de Lo",
			group: 1
		}, {
			id: "Id5",
			name: "Geborand",
			group: 1
		}, {
			id: "Id6",
			name: "Champtercier",
			group: 1
		}, {
			id: "Id7",
			name: "Cravatte",
			group: 1
		}, {
			id: "Id8",
			name: "Count",
			group: 1
		}, {
			id: "Id9",
			name: "Old Man",
			group: 1
		}, {
			id: "Id10",
			name: "Labarre",
			group: 2
		}, {
			id: "Id11",
			name: "Valjean",
			group: 2
		}, {
			id: "Id12",
			name: "Marguerite",
			group: 3
		}, {
			id: "Id13",
			name: "Mme. de R",
			group: 2
		}, {
			id: "Id14",
			name: "Isabeau",
			group: 2
		}, {
			id: "Id15",
			name: "Gervais",
			group: 2
		}, {
			id: "Id16",
			name: "Tholomyes",
			group: 3
		}, {
			id: "Id17",
			name: "Listolier",
			group: 3
		}, {
			id: "Id18",
			name: "Fameuil",
			group: 3
		}, {
			id: "Id19",
			name: "Blacheville",
			group: 3
		}, {
			id: "Id20",
			name: "Favourite",
			group: 3
		}, {
			id: "Id21",
			name: "Dahlia",
			group: 3
		}, {
			id: "Id22",
			name: "Zephine",
			group: 3
		}, {
			id: "Id23",
			name: "Fantine",
			group: 3
		}, {
			id: "Id24",
			name: "Mme. Thenardier",
			group: 4
		}, {
			id: "Id25",
			name: "Thenardier",
			group: 4
		}, {
			id: "Id26",
			name: "Cosette",
			group: 5
		}, {
			id: "Id27",
			name: "Javert",
			group: 4
		}, {
			id: "Id28",
			name: "Fauchelevent",
			group: 0
		}, {
			id: "Id29",
			name: "Bamatabois",
			group: 2
		}, {
			id: "Id30",
			name: "Perpetue",
			group: 3
		}, {
			id: "Id31",
			name: "Simplice",
			group: 2
		}, {
			id: "Id32",
			name: "Scaufflaire",
			group: 2
		}, {
			id: "Id33",
			name: "Woman 1",
			group: 2
		}, {
			id: "Id34",
			name: "Judge",
			group: 2
		}, {
			id: "Id35",
			name: "Champmathieu",
			group: 2
		}, {
			id: "Id36",
			name: "Brevet",
			group: 2
		}, {
			id: "Id37",
			name: "Chenildieu",
			group: 2
		}, {
			id: "Id38",
			name: "Cochepaille",
			group: 2
		}, {
			id: "Id39",
			name: "Pontmercy",
			group: 4
		}, {
			id: "Id40",
			name: "Boulatruelle",
			group: 6
		}, {
			id: "Id41",
			name: "Eponine",
			group: 4
		}, {
			id: "Id42",
			name: "Anzelma",
			group: 4
		}, {
			id: "Id43",
			name: "Woman 2",
			group: 5
		}, {
			id: "Id44",
			name: "Mother Innocent",
			group: 0
		}, {
			id: "Id45",
			name: "Gribier",
			group: 0
		}, {
			id: "Id46",
			name: "Jondrette",
			group: 7
		}, {
			id: "Id47",
			name: "Mme. Burgon",
			group: 7
		}, {
			id: "Id48",
			name: "Gavroche",
			group: 8
		}, {
			id: "Id49",
			name: "Gillenormand",
			group: 5
		}, {
			id: "Id50",
			name: "Magnon",
			group: 5
		}, {
			id: "Id51",
			name: "Mlle. Gillenormand",
			group: 5
		}, {
			id: "Id52",
			name: "Mme. Pontmercy",
			group: 5
		}, {
			id: "Id53",
			name: "Mlle. Vaubois",
			group: 5
		}, {
			id: "Id54",
			name: "Lt. Gillenormand",
			group: 5
		}, {
			id: "Id55",
			name: "Marius",
			group: 8
		}, {
			id: "Id56",
			name: "Baroness T",
			group: 5
		}, {
			id: "Id57",
			name: "Mabeuf",
			group: 8
		}, {
			id: "Id58",
			name: "Enjolras",
			group: 8
		}, {
			id: "Id59",
			name: "Combeferre",
			group: 8
		}, {
			id: "Id60",
			name: "Prouvaire",
			group: 8
		}, {
			id: "Id61",
			name: "Feuilly",
			group: 8
		}, {
			id: "Id62",
			name: "Courfeyrac",
			group: 8
		}, {
			id: "Id63",
			name: "Bahorel",
			group: 8
		}, {
			id: "Id64",
			name: "Bossuet",
			group: 8
		}, {
			id: "Id65",
			name: "Joly",
			group: 8
		}, {
			id: "Id66",
			name: "Grantaire",
			group: 8
		}, {
			id: "Id67",
			name: "Mother Plutarch",
			group: 9
		}, {
			id: "Id68",
			name: "Gueulemer",
			group: 4
		}, {
			id: "Id69",
			name: "Babet",
			group: 4
		}, {
			id: "Id70",
			name: "Claquesous",
			group: 4
		}, {
			id: "Id71",
			name: "Montparnasse",
			group: 4
		}, {
			id: "Id72",
			name: "Toussaint",
			group: 5
		}, {
			id: "Id73",
			name: "Child 1",
			group: 10
		}, {
			id: "Id74",
			name: "Child 2",
			group: 10
		}, {
			id: "Id75",
			name: "Brujon",
			group: 4
		}, {
			id: "Id76",
			name: "Mme. Hucheloup",
			group: 8
		}],
		edges: [{
			id1: "Id1",
			id2: "Id0",
			value: 1
		}, {
			id1: "Id2",
			id2: "Id0",
			value: 8
		}, {
			id1: "Id3",
			id2: "Id0",
			value: 10
		}, {
			id1: "Id3",
			id2: "Id2",
			value: 6
		}, {
			id1: "Id4",
			id2: "Id0",
			value: 1
		}, {
			id1: "Id5",
			id2: "Id0",
			value: 1
		}, {
			id1: "Id6",
			id2: "Id0",
			value: 1
		}, {
			id1: "Id7",
			id2: "Id0",
			value: 1
		}, {
			id1: "Id8",
			id2: "Id0",
			value: 2
		}, {
			id1: "Id9",
			id2: "Id0",
			value: 1
		}, {
			id1: "Id11",
			id2: "Id10",
			value: 1
		}, {
			id1: "Id11",
			id2: "Id3",
			value: 3
		}, {
			id1: "Id11",
			id2: "Id2",
			value: 3
		}, {
			id1: "Id11",
			id2: "Id0",
			value: 5
		}, {
			id1: "Id12",
			id2: "Id11",
			value: 1
		}, {
			id1: "Id13",
			id2: "Id11",
			value: 1
		}, {
			id1: "Id14",
			id2: "Id11",
			value: 1
		}, {
			id1: "Id15",
			id2: "Id11",
			value: 1
		}, {
			id1: "Id17",
			id2: "Id16",
			value: 4
		}, {
			id1: "Id18",
			id2: "Id16",
			value: 4
		}, {
			id1: "Id18",
			id2: "Id17",
			value: 4
		}, {
			id1: "Id19",
			id2: "Id16",
			value: 4
		}, {
			id1: "Id19",
			id2: "Id17",
			value: 4
		}, {
			id1: "Id19",
			id2: "Id18",
			value: 4
		}, {
			id1: "Id20",
			id2: "Id16",
			value: 3
		}, {
			id1: "Id20",
			id2: "Id17",
			value: 3
		}, {
			id1: "Id20",
			id2: "Id18",
			value: 3
		}, {
			id1: "Id20",
			id2: "Id19",
			value: 4
		}, {
			id1: "Id21",
			id2: "Id16",
			value: 3
		}, {
			id1: "Id21",
			id2: "Id17",
			value: 3
		}, {
			id1: "Id21",
			id2: "Id18",
			value: 3
		}, {
			id1: "Id21",
			id2: "Id19",
			value: 3
		}, {
			id1: "Id21",
			id2: "Id20",
			value: 5
		}, {
			id1: "Id22",
			id2: "Id16",
			value: 3
		}, {
			id1: "Id22",
			id2: "Id17",
			value: 3
		}, {
			id1: "Id22",
			id2: "Id18",
			value: 3
		}, {
			id1: "Id22",
			id2: "Id19",
			value: 3
		}, {
			id1: "Id22",
			id2: "Id20",
			value: 4
		}, {
			id1: "Id22",
			id2: "Id21",
			value: 4
		}, {
			id1: "Id23",
			id2: "Id16",
			value: 3
		}, {
			id1: "Id23",
			id2: "Id17",
			value: 3
		}, {
			id1: "Id23",
			id2: "Id18",
			value: 3
		}, {
			id1: "Id23",
			id2: "Id19",
			value: 3
		}, {
			id1: "Id23",
			id2: "Id20",
			value: 4
		}, {
			id1: "Id23",
			id2: "Id21",
			value: 4
		}, {
			id1: "Id23",
			id2: "Id22",
			value: 4
		}, {
			id1: "Id23",
			id2: "Id12",
			value: 2
		}, {
			id1: "Id23",
			id2: "Id11",
			value: 9
		}, {
			id1: "Id24",
			id2: "Id23",
			value: 2
		}, {
			id1: "Id24",
			id2: "Id11",
			value: 7
		}, {
			id1: "Id25",
			id2: "Id24",
			value: 13
		}, {
			id1: "Id25",
			id2: "Id23",
			value: 1
		}, {
			id1: "Id25",
			id2: "Id11",
			value: 12
		}, {
			id1: "Id26",
			id2: "Id24",
			value: 4
		}, {
			id1: "Id26",
			id2: "Id11",
			value: 31
		}, {
			id1: "Id26",
			id2: "Id16",
			value: 1
		}, {
			id1: "Id26",
			id2: "Id25",
			value: 1
		}, {
			id1: "Id27",
			id2: "Id11",
			value: 17
		}, {
			id1: "Id27",
			id2: "Id23",
			value: 5
		}, {
			id1: "Id27",
			id2: "Id25",
			value: 5
		}, {
			id1: "Id27",
			id2: "Id24",
			value: 1
		}, {
			id1: "Id27",
			id2: "Id26",
			value: 1
		}, {
			id1: "Id28",
			id2: "Id11",
			value: 8
		}, {
			id1: "Id28",
			id2: "Id27",
			value: 1
		}, {
			id1: "Id29",
			id2: "Id23",
			value: 1
		}, {
			id1: "Id29",
			id2: "Id27",
			value: 1
		}, {
			id1: "Id29",
			id2: "Id11",
			value: 2
		}, {
			id1: "Id30",
			id2: "Id23",
			value: 1
		}, {
			id1: "Id31",
			id2: "Id30",
			value: 2
		}, {
			id1: "Id31",
			id2: "Id11",
			value: 3
		}, {
			id1: "Id31",
			id2: "Id23",
			value: 2
		}, {
			id1: "Id31",
			id2: "Id27",
			value: 1
		}, {
			id1: "Id32",
			id2: "Id11",
			value: 1
		}, {
			id1: "Id33",
			id2: "Id11",
			value: 2
		}, {
			id1: "Id33",
			id2: "Id27",
			value: 1
		}, {
			id1: "Id34",
			id2: "Id11",
			value: 3
		}, {
			id1: "Id34",
			id2: "Id29",
			value: 2
		}, {
			id1: "Id35",
			id2: "Id11",
			value: 3
		}, {
			id1: "Id35",
			id2: "Id34",
			value: 3
		}, {
			id1: "Id35",
			id2: "Id29",
			value: 2
		}, {
			id1: "Id36",
			id2: "Id34",
			value: 2
		}, {
			id1: "Id36",
			id2: "Id35",
			value: 2
		}, {
			id1: "Id36",
			id2: "Id11",
			value: 2
		}, {
			id1: "Id36",
			id2: "Id29",
			value: 1
		}, {
			id1: "Id37",
			id2: "Id34",
			value: 2
		}, {
			id1: "Id37",
			id2: "Id35",
			value: 2
		}, {
			id1: "Id37",
			id2: "Id36",
			value: 2
		}, {
			id1: "Id37",
			id2: "Id11",
			value: 2
		}, {
			id1: "Id37",
			id2: "Id29",
			value: 1
		}, {
			id1: "Id38",
			id2: "Id34",
			value: 2
		}, {
			id1: "Id38",
			id2: "Id35",
			value: 2
		}, {
			id1: "Id38",
			id2: "Id36",
			value: 2
		}, {
			id1: "Id38",
			id2: "Id37",
			value: 2
		}, {
			id1: "Id38",
			id2: "Id11",
			value: 2
		}, {
			id1: "Id38",
			id2: "Id29",
			value: 1
		}, {
			id1: "Id39",
			id2: "Id25",
			value: 1
		}, {
			id1: "Id40",
			id2: "Id25",
			value: 1
		}, {
			id1: "Id41",
			id2: "Id24",
			value: 2
		}, {
			id1: "Id41",
			id2: "Id25",
			value: 3
		}, {
			id1: "Id42",
			id2: "Id41",
			value: 2
		}, {
			id1: "Id42",
			id2: "Id25",
			value: 2
		}, {
			id1: "Id42",
			id2: "Id24",
			value: 1
		}, {
			id1: "Id43",
			id2: "Id11",
			value: 3
		}, {
			id1: "Id43",
			id2: "Id26",
			value: 1
		}, {
			id1: "Id43",
			id2: "Id27",
			value: 1
		}, {
			id1: "Id44",
			id2: "Id28",
			value: 3
		}, {
			id1: "Id44",
			id2: "Id11",
			value: 1
		}, {
			id1: "Id45",
			id2: "Id28",
			value: 2
		}, {
			id1: "Id47",
			id2: "Id46",
			value: 1
		}, {
			id1: "Id48",
			id2: "Id47",
			value: 2
		}, {
			id1: "Id48",
			id2: "Id25",
			value: 1
		}, {
			id1: "Id48",
			id2: "Id27",
			value: 1
		}, {
			id1: "Id48",
			id2: "Id11",
			value: 1
		}, {
			id1: "Id49",
			id2: "Id26",
			value: 3
		}, {
			id1: "Id49",
			id2: "Id11",
			value: 2
		}, {
			id1: "Id50",
			id2: "Id49",
			value: 1
		}, {
			id1: "Id50",
			id2: "Id24",
			value: 1
		}, {
			id1: "Id51",
			id2: "Id49",
			value: 9
		}, {
			id1: "Id51",
			id2: "Id26",
			value: 2
		}, {
			id1: "Id51",
			id2: "Id11",
			value: 2
		}, {
			id1: "Id52",
			id2: "Id51",
			value: 1
		}, {
			id1: "Id52",
			id2: "Id39",
			value: 1
		}, {
			id1: "Id53",
			id2: "Id51",
			value: 1
		}, {
			id1: "Id54",
			id2: "Id51",
			value: 2
		}, {
			id1: "Id54",
			id2: "Id49",
			value: 1
		}, {
			id1: "Id54",
			id2: "Id26",
			value: 1
		}, {
			id1: "Id55",
			id2: "Id51",
			value: 6
		}, {
			id1: "Id55",
			id2: "Id49",
			value: 12
		}, {
			id1: "Id55",
			id2: "Id39",
			value: 1
		}, {
			id1: "Id55",
			id2: "Id54",
			value: 1
		}, {
			id1: "Id55",
			id2: "Id26",
			value: 21
		}, {
			id1: "Id55",
			id2: "Id11",
			value: 19
		}, {
			id1: "Id55",
			id2: "Id16",
			value: 1
		}, {
			id1: "Id55",
			id2: "Id25",
			value: 2
		}, {
			id1: "Id55",
			id2: "Id41",
			value: 5
		}, {
			id1: "Id55",
			id2: "Id48",
			value: 4
		}, {
			id1: "Id56",
			id2: "Id49",
			value: 1
		}, {
			id1: "Id56",
			id2: "Id55",
			value: 1
		}, {
			id1: "Id57",
			id2: "Id55",
			value: 1
		}, {
			id1: "Id57",
			id2: "Id41",
			value: 1
		}, {
			id1: "Id57",
			id2: "Id48",
			value: 1
		}, {
			id1: "Id58",
			id2: "Id55",
			value: 7
		}, {
			id1: "Id58",
			id2: "Id48",
			value: 7
		}, {
			id1: "Id58",
			id2: "Id27",
			value: 6
		}, {
			id1: "Id58",
			id2: "Id57",
			value: 1
		}, {
			id1: "Id58",
			id2: "Id11",
			value: 4
		}, {
			id1: "Id59",
			id2: "Id58",
			value: 15
		}, {
			id1: "Id59",
			id2: "Id55",
			value: 5
		}, {
			id1: "Id59",
			id2: "Id48",
			value: 6
		}, {
			id1: "Id59",
			id2: "Id57",
			value: 2
		}, {
			id1: "Id60",
			id2: "Id48",
			value: 1
		}, {
			id1: "Id60",
			id2: "Id58",
			value: 4
		}, {
			id1: "Id60",
			id2: "Id59",
			value: 2
		}, {
			id1: "Id61",
			id2: "Id48",
			value: 2
		}, {
			id1: "Id61",
			id2: "Id58",
			value: 6
		}, {
			id1: "Id61",
			id2: "Id60",
			value: 2
		}, {
			id1: "Id61",
			id2: "Id59",
			value: 5
		}, {
			id1: "Id61",
			id2: "Id57",
			value: 1
		}, {
			id1: "Id61",
			id2: "Id55",
			value: 1
		}, {
			id1: "Id62",
			id2: "Id55",
			value: 9
		}, {
			id1: "Id62",
			id2: "Id58",
			value: 17
		}, {
			id1: "Id62",
			id2: "Id59",
			value: 13
		}, {
			id1: "Id62",
			id2: "Id48",
			value: 7
		}, {
			id1: "Id62",
			id2: "Id57",
			value: 2
		}, {
			id1: "Id62",
			id2: "Id41",
			value: 1
		}, {
			id1: "Id62",
			id2: "Id61",
			value: 6
		}, {
			id1: "Id62",
			id2: "Id60",
			value: 3
		}, {
			id1: "Id63",
			id2: "Id59",
			value: 5
		}, {
			id1: "Id63",
			id2: "Id48",
			value: 5
		}, {
			id1: "Id63",
			id2: "Id62",
			value: 6
		}, {
			id1: "Id63",
			id2: "Id57",
			value: 2
		}, {
			id1: "Id63",
			id2: "Id58",
			value: 4
		}, {
			id1: "Id63",
			id2: "Id61",
			value: 3
		}, {
			id1: "Id63",
			id2: "Id60",
			value: 2
		}, {
			id1: "Id63",
			id2: "Id55",
			value: 1
		}, {
			id1: "Id64",
			id2: "Id55",
			value: 5
		}, {
			id1: "Id64",
			id2: "Id62",
			value: 12
		}, {
			id1: "Id64",
			id2: "Id48",
			value: 5
		}, {
			id1: "Id64",
			id2: "Id63",
			value: 4
		}, {
			id1: "Id64",
			id2: "Id58",
			value: 10
		}, {
			id1: "Id64",
			id2: "Id61",
			value: 6
		}, {
			id1: "Id64",
			id2: "Id60",
			value: 2
		}, {
			id1: "Id64",
			id2: "Id59",
			value: 9
		}, {
			id1: "Id64",
			id2: "Id57",
			value: 1
		}, {
			id1: "Id64",
			id2: "Id11",
			value: 1
		}, {
			id1: "Id65",
			id2: "Id63",
			value: 5
		}, {
			id1: "Id65",
			id2: "Id64",
			value: 7
		}, {
			id1: "Id65",
			id2: "Id48",
			value: 3
		}, {
			id1: "Id65",
			id2: "Id62",
			value: 5
		}, {
			id1: "Id65",
			id2: "Id58",
			value: 5
		}, {
			id1: "Id65",
			id2: "Id61",
			value: 5
		}, {
			id1: "Id65",
			id2: "Id60",
			value: 2
		}, {
			id1: "Id65",
			id2: "Id59",
			value: 5
		}, {
			id1: "Id65",
			id2: "Id57",
			value: 1
		}, {
			id1: "Id65",
			id2: "Id55",
			value: 2
		}, {
			id1: "Id66",
			id2: "Id64",
			value: 3
		}, {
			id1: "Id66",
			id2: "Id58",
			value: 3
		}, {
			id1: "Id66",
			id2: "Id59",
			value: 1
		}, {
			id1: "Id66",
			id2: "Id62",
			value: 2
		}, {
			id1: "Id66",
			id2: "Id65",
			value: 2
		}, {
			id1: "Id66",
			id2: "Id48",
			value: 1
		}, {
			id1: "Id66",
			id2: "Id63",
			value: 1
		}, {
			id1: "Id66",
			id2: "Id61",
			value: 1
		}, {
			id1: "Id66",
			id2: "Id60",
			value: 1
		}, {
			id1: "Id67",
			id2: "Id57",
			value: 3
		}, {
			id1: "Id68",
			id2: "Id25",
			value: 5
		}, {
			id1: "Id68",
			id2: "Id11",
			value: 1
		}, {
			id1: "Id68",
			id2: "Id24",
			value: 1
		}, {
			id1: "Id68",
			id2: "Id27",
			value: 1
		}, {
			id1: "Id68",
			id2: "Id48",
			value: 1
		}, {
			id1: "Id68",
			id2: "Id41",
			value: 1
		}, {
			id1: "Id69",
			id2: "Id25",
			value: 6
		}, {
			id1: "Id69",
			id2: "Id68",
			value: 6
		}, {
			id1: "Id69",
			id2: "Id11",
			value: 1
		}, {
			id1: "Id69",
			id2: "Id24",
			value: 1
		}, {
			id1: "Id69",
			id2: "Id27",
			value: 2
		}, {
			id1: "Id69",
			id2: "Id48",
			value: 1
		}, {
			id1: "Id69",
			id2: "Id41",
			value: 1
		}, {
			id1: "Id70",
			id2: "Id25",
			value: 4
		}, {
			id1: "Id70",
			id2: "Id69",
			value: 4
		}, {
			id1: "Id70",
			id2: "Id68",
			value: 4
		}, {
			id1: "Id70",
			id2: "Id11",
			value: 1
		}, {
			id1: "Id70",
			id2: "Id24",
			value: 1
		}, {
			id1: "Id70",
			id2: "Id27",
			value: 1
		}, {
			id1: "Id70",
			id2: "Id41",
			value: 1
		}, {
			id1: "Id70",
			id2: "Id58",
			value: 1
		}, {
			id1: "Id71",
			id2: "Id27",
			value: 1
		}, {
			id1: "Id71",
			id2: "Id69",
			value: 2
		}, {
			id1: "Id71",
			id2: "Id68",
			value: 2
		}, {
			id1: "Id71",
			id2: "Id70",
			value: 2
		}, {
			id1: "Id71",
			id2: "Id11",
			value: 1
		}, {
			id1: "Id71",
			id2: "Id48",
			value: 1
		}, {
			id1: "Id71",
			id2: "Id41",
			value: 1
		}, {
			id1: "Id71",
			id2: "Id25",
			value: 1
		}, {
			id1: "Id72",
			id2: "Id26",
			value: 2
		}, {
			id1: "Id72",
			id2: "Id27",
			value: 1
		}, {
			id1: "Id72",
			id2: "Id11",
			value: 1
		}, {
			id1: "Id73",
			id2: "Id48",
			value: 2
		}, {
			id1: "Id74",
			id2: "Id48",
			value: 2
		}, {
			id1: "Id74",
			id2: "Id73",
			value: 3
		}, {
			id1: "Id75",
			id2: "Id69",
			value: 3
		}, {
			id1: "Id75",
			id2: "Id68",
			value: 3
		}, {
			id1: "Id75",
			id2: "Id25",
			value: 3
		}, {
			id1: "Id75",
			id2: "Id48",
			value: 1
		}, {
			id1: "Id75",
			id2: "Id41",
			value: 1
		}, {
			id1: "Id75",
			id2: "Id70",
			value: 1
		}, {
			id1: "Id75",
			id2: "Id71",
			value: 1
		}, {
			id1: "Id76",
			id2: "Id64",
			value: 1
		}, {
			id1: "Id76",
			id2: "Id65",
			value: 1
		}, {
			id1: "Id76",
			id2: "Id66",
			value: 1
		}, {
			id1: "Id76",
			id2: "Id63",
			value: 1
		}, {
			id1: "Id76",
			id2: "Id62",
			value: 1
		}, {
			id1: "Id76",
			id2: "Id48",
			value: 1
		}, {
			id1: "Id76",
			id2: "Id58",
			value: 1
		}],
		m: {
			Name: "Les Miserables",
			Description: "Coappearance network of characters in the novel Les Miserables",
			Reference: "D. E. Knuth, The Stanford GraphBase: A Platform for Combinatorial Computing, Addison-Wesley, Reading, MA (1993)."
		}
	};
	this.getDataSet = function(e) {
		if (e && this["dataSet" + e]) {
			return this["dataSet" + e]
		} else {
			if (e && e.match(/Random/)) {
				var c;
				var b = e.split(":");
				var a = {
					randomDataVariables: this.randomDataVariables,
					randomDataSamples: this.randomDataSamples,
					randomDataVariableAnnotations: this.randomDataVariableAnnotations,
					randomDataSampleAnnotations: this.randomDataSampleAnnotations,
					randomDataUniform: this.randomDataUniform,
					randomDataSymmetrical: this.randomDataSymmetrical,
					randomDataGraphTime: this.isGraphTime,
					randomMissingDataPercentage: this.randomMissingDataPercentage
				};
				if (b.length > 0) {
					if (b[1] != null) {
						this.randomDataVariables = Number(b[1])
					}
					if (b[2] != null) {
						this.randomDataSamples = Number(b[2])
					}
					if (b[3] != null) {
						this.randomDataVariableAnnotations = Number(b[3])
					}
					if (b[4] != null) {
						this.randomDataSampleAnnotations = Number(b[4])
					}
					if (b[5] != null && Number(b[5]) > 0) {
						this.randomDataUniform = true
					} else {
						this.randomDataUniform = false
					}
					if (b[6] != null && Number(b[6]) > 0) {
						this.randomDataSymmetrical = true
					} else {
						this.randomDataSymmetrical = false
					}
					if (b[7] != null && Number(b[7]) > 0) {
						this.isGraphTime = true
					} else {
						this.isGraphTime = false
					}
					if (b[8] != null) {
						this.randomMissingDataPercentage = Number(b[8])
					}
				}
				c = this.createRandomData(true);
				this.randomDataVariables = a.randomDataVariables;
				this.randomDataSamples = a.randomDataSamples;
				this.randomDataVariableAnnotations = a.randomDataVariableAnnotations;
				this.randomDataSampleAnnotations = a.randomDataSampleAnnotations;
				this.randomDataUniform = a.randomDataUniform;
				this.randomDataSymmetrical = a.randomDataSymmetrical;
				this.isGraphTime = a.randomDataGraphTime;
				this.randomMissingDataPercentage = a.randomMissingDataPercentage;
				return c
			} else {
				return this.dataSetExample
			}
		}
	};
	this.getGenericDataSet = function() {
		return {
			x: this.dataSetGeneric.x,
			y: this.dataSetGeneric.y,
			z: this.dataSetGeneric.z,
			a: this.dataSetGeneric.a,
			venn: this.dataSetVenn.venn,
			market: this.dataSetMarket.market,
			nodes: this.dataSetNetworkRadial.nodes,
			edges: this.dataSetNetworkRadial.edges,
			tracks: this.dataSetGenomeAdvanced.tracks
		}
	};
	this.initializeExample = function() {
		this.dataSetExample = {
			x: this.dataSetGeneric.x,
			y: this.dataSetGeneric.y,
			z: this.dataSetGeneric.z,
			a: this.dataSetGeneric.a,
			venn: this.dataSetVenn.venn,
			market: this.dataSetMarket.market,
			nodes: this.dataSetNetworkRadial.nodes,
			edges: this.dataSetNetworkRadial.edges,
			tracks: this.dataSetGenomeAdvanced.tracks
		};
		this.dataSetSummaryExample = {
			x: this.dataSetGeneric.x,
			y: {
				vars: this.dataSetGeneric.y["vars"],
				smps: this.dataSetGeneric.y["smps"],
				mean: this.dataSetGeneric.y["data"],
				stdev: [
					[1, 2, 3, 1, 2, 3],
					[1, 2, 3, 1, 2, 3],
					[1, 2, 3, 1, 2, 3],
					[1, 2, 3, 1, 2, 3]
				],
				n: [
					[4, 5, 4, 5, 4, 5],
					[4, 5, 4, 5, 4, 5],
					[4, 5, 4, 5, 4, 5],
					[4, 5, 4, 5, 4, 5]
				],
				desc: this.dataSetGeneric.y["desc"]
			},
			z: this.dataSetGeneric.z,
			a: this.dataSetGeneric.a
		}
	};
	this.initializeExample()
};
