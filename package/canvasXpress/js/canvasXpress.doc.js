CanvasXpress.doc = {
	F: {
		fill: {
			M: "Genome",
			T: "color",
			C: "Color for the feature"
		},
		id: {
			M: "Genome",
			T: "string",
			C: "Feature id"
		}
	},
	M: {
		Shadows: {
			D: "Shadow properties used in most visualizations :",
			P: ["shadowBlur", "shadowColor", "shadowOffsetX", "shadowOffsetY", "showShadow", "showTextShadow"]
		},
		Acknowledgment: {
			D: "Properties used to acknowledge the use of canvasXpress :",
			P: ["acknowledgment", "acknowledgmentIcon", "acknowledgmentIconPosition"]
		},
		Clustering: {
			D: "Parameters used in clustering",
			P: ["centerData", "clusterAxis", "distance", "imputeMethod", "kmeansClusters", "linkage", "maxIterations"],
			U: {
				StackedPercent: "true",
				Bar: "true",
				Correletion: "true",
				Pie: "true",
				Barline: "true",
				StackedLine: "true",
				Dotplot: "true",
				Boxplot: "true",
				DotLine: "true",
				StackedPercentLine: "true",
				Treemap: "true",
				Candlestick: "true",
				TagCloud: "true",
				Area: "true",
				Line: "true",
				Heatmap: "true",
				AreaLine: "true",
				Stacked: "true"
			}
		},
		Histograms: {
			D: "Parameters used to create histograms in 2d scatter plots :",
			P: ["histogramBarWidth", "histogramBins", "histogramDensityKernel", "histogramStagger", "isCreateHistogram", "isHistogram", "showHistogramDensity"]
		},
		"Boxplot Graphs": {
			D: "General parameters in Boxplot Graphs",
			P: ["boxPlotOutliersRatio", "boxplotDataPointRatio", "boxplotDataPointTransparency", "showBoxplotOriginalData"],
			U: {
				Boxplot: "true"
			}
		},
		"Space and Width": {
			D: "Properties used to size the bars and point in one dimensional plots",
			P: ["sampleSeparationFactor", "variableSeparationFactor", "widthFactor"],
			U: {
				StackedPercent: "true",
				Bar: "true",
				StackedLine: "true",
				BarLine: "true",
				Dotplot: "true",
				Boxplot: "true",
				DotLine: "true",
				StackedPercentLine: "true",
				Treemap: "true",
				Candlestick: "true",
				TagCloud: "true",
				Area: "true",
				Line: "true",
				AreaLine: "true",
				Heatmap: "true",
				Stacked: "true"
			}
		},
		"Axis Resizer": {
			D: "Parameters used when resizing graphs",
			P: ["resizerBackgroundColor", "resizerBackgroundColorCurrent", "resizerBackgroundColorOutlineCurrent", "resizerBackgroundImage", "resizerDataIndex", "resizerDraw", "resizerPosition", "resizerTransparency", "resizerType", "resizerWidth"],
			U: {
				StackedPercent: "true",
				Bar: "true",
				Correletion: "true",
				Pie: "true",
				ScatterBubble2D: "true",
				Barline: "true",
				StackedLine: "true",
				Scatter2D: "true",
				Dotplot: "true",
				Boxplot: "true",
				DotLine: "true",
				StackedPercentLine: "true",
				Candlestick: "true",
				Scatter3D: "true",
				Area: "true",
				Line: "true",
				Stacked: "true",
				Heatmap: "true",
				AreaLine: "true"
			}
		},
		"Y-Axis": {
			D: "Y axes parameters",
			P: ["setMaxY", "setMinY", "yAxis", "yAxisAbsMax", "yAxisAbsMin", "yAxisCurrent", "yAxisExact", "yAxisHistogramHeight", "yAxisHistogramShow", "yAxisMajorTicks", "yAxisMaxStrLength", "yAxisMinorTicks", "yAxisMinorValues", "yAxisShow", "yAxisTickColor", "yAxisTickFormat", "yAxisTickStyle", "yAxisTicks", "yAxisTitle", "yAxisTransform", "yAxisTransformTicks", "yAxisValues"],
			U: {
				Scatter3D: "true",
				ScatterBubble2D: "true",
				Scatter2D: "true"
			}
		},
		Foreground: {
			D: "Foreground properties used in all visualizations :",
			P: ["foreground", "foregroundWindow"]
		},
		"Venn Diagrams": {
			D: "General parameters in Venn diagrams",
			P: ["vennColors", "vennCompartments", "vennGroups", "vennLegendColors"],
			U: {
				Venn: "true"
			}
		},
		"Heatmap Graphs": {
			D: "General parameters for heatmaps",
			P: ["isMultidimensionalData", "isOncoprint", "oncoprintAmplification", "oncoprintDeletion", "smpIndicesStart", "varIndicesStart", "varTitleLabelOverlayPosition"],
			U: {
				Heatmap: "true"
			}
		},
		"Tag Cloud": {
			D: "General parameters used in tag clouds",
			P: ["tagCloudGridPoints", "tagCloudTextEllipticity", "tagCloudTextGridSize", "tagCloudTextRotateRatio", "tagCloudTextWeightFactor"],
			U: {
				Cloud: "true"
			}
		},
		Gradients: {
			D: "Properties used to adjust color gradients in all visualizations :",
			P: ["gradient", "gradientOrientation", "gradientRatio", "gradientType"]
		},
		"Remote Procedures": {
			D: "Parameters used when getting data remotely :",
			P: ["remoteAutoPlay", "remoteAutoPlayDelay", "remoteDataIndex", "remoteDirection", "remoteIds", "remoteParamOverride", "remoteParams", "remoteParentId", "remoteService", "remoteUpdate", "remoteUpdateDelay", "remoteUpdating", "remoteWindow"]
		},
		Animation: {
			D: "Animation parameters :",
			P: ["animationCycles", "animationTime", "animationType", "showAnimation", "showAnimationFont", "showAnimationFontColor", "showAnimationFontSize", "showAnimationFontStyle", "snapshotCopyChangeOnly"]
		},
		Events: {
			D: "Event parameters :",
			P: ["alignConfiguratorExamples", "broadcast", "broadcastType", "configuratorExamplesSize", "configuratorWidth", "dataEvent", "dataFilterWidth", "destroyCanvasXpressZombies", "disableAxisResizer", "disableConfigurator", "disableDataFilters", "disableDataTable", "disableEvents", "disableMenu", "disableToolbar", "eventArrowKeys", "eventKeys", "eventPlusMinusKeys", "helpKeyEvents", "infoStartTime", "infoTimeIn", "infoTimeOut", "isLayoutConfigurator", "maintainZoomOnDrag", "maxItemMenuCheckbox", "maxSubMenus", "monitorCanvasXpressZombiesTime", "resizable", "resizeHeightOnLayout", "resizeWidthOnLayout", "showAdvancedConfiguration", "showConfiguratorExamplesOnSelect", "showFadeResizeMoveAnimation", "toolbarPermanent"]
		},
		"R-Axis": {
			D: "R axis parameters",
			P: ["rAxisAbsMax", "rAxisAbsMin", "rAxisLabelOrientation", "rAxisMaxStrLength", "rAxisMinorValues", "rAxisShow", "rAxisTickColor", "rAxisTicks", "rAxisValues"],
			U: {
				Circular: "true"
			}
		},
		Images: {
			D: "General parameters with images :",
			P: ["control_forward_blue", "control_play_blue", "control_rewind_blue", "control_stop_blue", "imageDir", "loadingImage", "menu_dropdown"]
		},
		Videos: {
			D: "Video properties used in all visualizations",
			P: ["videoAutoplay", "videoClassName", "videoColor", "videoControls", "videoCurrentTime", "videoData", "videoGrid", "videoGridStep", "videoLoop", "videoPlaybackRate", "videoPoster", "videoPreload"],
			U: {
				Video: "true"
			}
		},
		"Genome Browser": {
			D: "General parameters used in genome browser",
			P: ["featureConfigurableProperties", "featureCoordinateHeight", "featureCoordinateShow", "featureDirColor", "featureFillColor", "featureHeightDefault", "featureNameFont", "featureNameFontColor", "featureNameFontSize", "featureNameFontStyle", "featureQualityHeight", "featureQualityShow", "featureQualityValues", "featureSignalToNoiseHeight", "featureSignalToNoiseShow", "featureSignalToNoiseValues", "featureStaggered", "featureTraceHeight", "featureTraceTrim", "featureTracesShow", "featureTranslateHeight", "featureTranslateShow", "featureTypeDefault", "featureWidthDefault", "filterFeatureBy", "genomeResolution", "genomeTicks", "maxFeatureStringLen", "periodTicksLabels", "sequenceAColor", "sequenceBColor", "sequenceCColor", "sequenceDColor", "sequenceEColor", "sequenceEndColor", "sequenceFColor", "sequenceFill", "sequenceFont", "sequenceFontSize", "sequenceFontStyle", "sequenceGAPColor", "sequenceGColor", "sequenceHColor", "sequenceIColor", "sequenceKColor", "sequenceLColor", "sequenceMColor", "sequenceNColor", "sequencePColor", "sequenceQColor", "sequenceRColor", "sequenceSColor", "sequenceStartColor", "sequenceTColor", "sequenceUColor", "sequenceVColor", "sequenceWColor", "sequenceXColor", "sequenceYColor", "sequenceZColor", "showFeatureNameThereshold", "subtracksMaxDefault", "trackConfigurableProperties", "trackDirColor", "trackFillColor", "trackNameFont", "trackNameFontColor", "trackNameFontSize", "trackNameFontStyle", "wireColor"],
			U: {
				Genome: "true"
			}
		},
		Random: {
			D: "Properties used to generate random data sets :",
			P: ["pseudoRandom", "randomData", "randomDataMean", "randomDataSampleAnnotationRatio", "randomDataSampleAnnotations", "randomDataSamples", "randomDataSigma", "randomDataSymmetrical", "randomDataUniform", "randomDataVariableAnnotationRatio", "randomDataVariableAnnotations", "randomDataVariables", "randomMissingDataPercentage", "randomNetworkNodeEdgesMax", "randomNetworkNodes", "randomNetworkReduce", "randomSeed"]
		},
		"Data Table/Filter": {
			D: "Parameters associated with data table and data filter",
			P: ["edgesProperties", "featuresProperties", "nodesProperties", "skipConfigurableProperties"],
			U: {
				Network: "true",
				Genome: "true"
			}
		},
		Samples: {
			D: "Properties associated with samples",
			P: ["filterSmpBy", "highlightSmp", "maxSmpStringLen", "showSampleNames", "smpHighlightColor", "smpLabelDescription", "smpLabelFont", "smpLabelFontColor", "smpLabelFontSize", "smpLabelFontStyle", "smpLabelInterval", "smpLabelRotate", "smpLabelScaleFontFactor", "smpTitle", "smpTitleFont", "smpTitleFontColor", "smpTitleFontSize", "smpTitleFontStyle", "smpTitleScaleFontFactor"],
			U: {
				StackedPercent: "true",
				Bar: "true",
				Correletion: "true",
				Pie: "true",
				ScatterBubble2D: "true",
				Barline: "true",
				StackedLine: "true",
				Scatter2D: "true",
				Dotplot: "true",
				Boxplot: "true",
				DotLine: "true",
				StackedPercentLine: "true",
				Treemap: "true",
				Candlestick: "true",
				TagCloud: "true",
				Scatter3D: "true",
				Area: "true",
				Line: "true",
				Heatmap: "true",
				AreaLine: "true",
				Stacked: "true"
			}
		},
		Snapshots: {
			D: "Paremeters used in snapshots",
			P: ["isAnimation", "snapshots"],
			U: {
				Network: "true"
			}
		},
		"General Attributes": {
			D: "Properties related to Shapes, Sizes, Images and Time :",
			P: ["images", "shapes", "sizes", "timeFormat"]
		},
		DOE: {
			D: "Parameters used to create pie and histograms in general data :",
			P: ["includeDOE", "maxDOENumber", "showDOEData"]
		},
		"Z-Axis": {
			D: "Z axes parameters",
			P: ["setMaxZ", "setMinZ", "zAxis", "zAxisAbsMax", "zAxisAbsMin", "zAxisCurrent", "zAxisExact", "zAxisMaxStrLength", "zAxisMinorValues", "zAxisShow", "zAxisTickColor", "zAxisTickFormat", "zAxisTickStyle", "zAxisTicks", "zAxisTitle", "zAxisValues"],
			U: {
				Scatter3D: "true",
				ScatterBubble2D: "true"
			}
		},
		Decorations: {
			D: "Additional elements added to graphs to increase data understanding",
			P: ["decorationFont", "decorationFontSize", "decorationFontStyle", "decorationScaleFontFactor", "decorations", "decorationsColor", "decorationsColors", "decorationsHeight", "decorationsPosition", "decorationsProperties", "decorationsType", "decorationsWidth", "showDecorations", "showDecorationsKaplanMeyerConfidence"],
			U: {
				Network: "true",
				Scatter3D: "true",
				ScatterBubble2D: "true",
				Scatter2D: "true"
			}
		},
		"Aspect Ratio": {
			D: "Properties used to adjust the aspect ratio in one dimensional plots",
			P: ["adjustAspectRatio", "adjustAspectRatioMax", "adjustAspectRatioXTries", "adjustAspectRatioYTries"],
			U: {
				StackedPercent: "true",
				Bar: "true",
				StackedLine: "true",
				BarLine: "true",
				Dotplot: "true",
				Boxplot: "true",
				DotLine: "true",
				StackedPercentLine: "true",
				Treemap: "true",
				Candlestick: "true",
				TagCloud: "true",
				Area: "true",
				Line: "true",
				AreaLine: "true",
				Heatmap: "true",
				Stacked: "true"
			}
		},
		Overlays: {
			D: "Colored boxes to help in the visualization of samples and variables",
			P: ["overlayFont", "overlayFontColor", "overlayFontSize", "overlayFontStyle", "overlayScaleFontFactor", "overlaysThickness", "showLevelOverlays", "showOverlays", "smpOverlayProperties", "smpOverlayRecycleColors", "smpOverlays", "varOverlayProperties", "varOverlayRecycleColors", "varOverlays"],
			U: {
				StackedPercent: "true",
				Bar: "true",
				Correletion: "true",
				Pie: "true",
				Barline: "true",
				StackedLine: "true",
				Dotplot: "true",
				Boxplot: "true",
				DotLine: "true",
				StackedPercentLine: "true",
				Candlestick: "true",
				Area: "true",
				Line: "true",
				Stacked: "true",
				Heatmap: "true",
				AreaLine: "true"
			}
		},
		Bins: {
			D: "Function to bin samples and variables",
			P: ["binConfigurations"],
			U: {
				StackedPercent: "true",
				Bar: "true",
				Correletion: "true",
				Pie: "true",
				Barline: "true",
				StackedLine: "true",
				Dotplot: "true",
				Boxplot: "true",
				DotLine: "true",
				StackedPercentLine: "true",
				Candlestick: "true",
				Area: "true",
				Line: "true",
				Stacked: "true",
				Heatmap: "true",
				AreaLine: "true"
			}
		},
		Margins: {
			D: "Margin properties used in most visualizations :",
			P: ["margin", "marginBottom", "marginLeft", "marginRight", "marginTop"]
		},
		"Citations or References": {
			D: "Properties associated with citations or references of the plot :",
			P: ["citation", "citationColor", "citationFont", "citationFontSize", "citationFontStyle", "citationScaleFontFactor"]
		},
		Indicators: {
			D: "Legends for color, shape and size in visualizations",
			P: ["heatmapType", "indicatorCenter", "indicatorHeight", "indicatorWidth", "indicatorsPosition", "showIndicators"],
			U: {
				StackedPercent: "true",
				Bar: "true",
				Correletion: "true",
				Circular: "true",
				Pie: "true",
				ScatterBubble2D: "true",
				Barline: "true",
				StackedLine: "true",
				Scatter2D: "true",
				Dotplot: "true",
				Network: "true",
				Boxplot: "true",
				DotLine: "true",
				Genome: "true",
				StackedPercentLine: "true",
				Treemap: "true",
				Candlestick: "true",
				TagCloud: "true",
				Scatter3D: "true",
				Area: "true",
				Line: "true",
				Heatmap: "true",
				AreaLine: "true",
				Stacked: "true"
			}
		},
		Text: {
			D: "Properties associated with text attributes :",
			P: ["align", "autoScaleFont", "baseline", "font", "fontName", "fontSize", "fontStyle", "maxTextSize", "minTextSize", "scaleTextConstantAdd", "scaleTextConstantMult"]
		},
		"Plot area": {
			D: "General parameters for the plotting area in one dimensional plots",
			P: ["blockContrast", "is3DPlot", "jitter", "plotByVariable", "showDataValues", "smpHairline", "smpHairlineColor", "smpHairlineWidth"],
			U: {
				StackedPercent: "true",
				Bar: "true",
				Correlation: "true",
				Pie: "true",
				Barline: "true",
				StackedLine: "true",
				Dotplot: "true",
				Boxplot: "true",
				DotLine: "true",
				StackedPercentLine: "true",
				Treemap: "true",
				Candlestick: "true",
				TagCloud: "true",
				Area: "true",
				Line: "true",
				Heatmap: "true",
				AreaLine: "true",
				Stacked: "true"
			}
		},
		Variables: {
			D: "Properties associated with variables",
			P: ["filterVarBy", "highlightVar", "maxVarStringLen", "showVariableNames", "varHighlightColor", "varLabelDescription", "varLabelFont", "varLabelFontColor", "varLabelFontSize", "varLabelFontStyle", "varLabelInterval", "varLabelRotate", "varLabelScaleFontFactor", "varTitle", "varTitleFont", "varTitleFontColor", "varTitleFontSize", "varTitleFontStyle", "varTitleScaleFontFactor"],
			U: {
				StackedPercent: "true",
				Bar: "true",
				Correletion: "true",
				Pie: "true",
				ScatterBubble2D: "true",
				Barline: "true",
				StackedLine: "true",
				Scatter2D: "true",
				Dotplot: "true",
				Boxplot: "true",
				DotLine: "true",
				StackedPercentLine: "true",
				Treemap: "true",
				Candlestick: "true",
				TagCloud: "true",
				Scatter3D: "true",
				Area: "true",
				Line: "true",
				Heatmap: "true",
				AreaLine: "true",
				Stacked: "true"
			}
		},
		"Data Point Attributes": {
			D: "General attributes for data points in scatter and one dimensional plots",
			P: ["colorBy", "connectBy", "connectByColor", "connectByData", "outlineBy", "outlineByData", "patternBy", "patternByData", "shapeBy", "shapeByData", "shapeByShape", "sizeBy", "sizeByData", "treemapBy"],
			U: {
				Boxplot: "true",
				Scatter3D: "true",
				ScatterBubble2D: "true",
				DotLine: "true",
				Bar: "true",
				Dotplot: "true",
				Scatter2D: "true",
				Heatmap: "true"
			}
		},
		"Scatter Plot Matrix": {
			D: "Parameters used to create a matrix of 2d scatter plots",
			P: ["scatterPlotMatrix", "scatterPlotMatrixType"],
			U: {
				ScatterBubble2D: "true",
				Scatter2D: "true"
			}
		},
		Dendrograms: {
			D: "General parameters in dendrograms",
			P: ["dendrogramColor", "dendrogramHang", "dendrogramHeight", "dendrogramSpace", "showSmpDendrogram", "showVarDendrogram", "smpDendrogramPosition", "varDendrogramPosition"],
			U: {
				StackedPercent: "true",
				Bar: "true",
				Correletion: "true",
				Pie: "true",
				Barline: "true",
				StackedLine: "true",
				Dotplot: "true",
				Boxplot: "true",
				DotLine: "true",
				StackedPercentLine: "true",
				Treemap: "true",
				Candlestick: "true",
				TagCloud: "true",
				Area: "true",
				Line: "true",
				Heatmap: "true",
				AreaLine: "true",
				Stacked: "true"
			}
		},
		"Area Graphs": {
			D: "General parameters in area graphs",
			P: ["areaIsCumulative"],
			U: {
				Area: "true",
				AreaLine: "true"
			}
		},
		"Candlestick Plots": {
			D: "General parameters in candlestick plots",
			P: ["showVolume", "sma10Color", "sma20Color", "sma25Color", "sma50Color", "sma5Color", "stockIndicators"],
			U: {
				Candlestick: "true"
			}
		},
		"Pie Charts": {
			D: "General parameters in pie charts",
			P: ["maxPieSectors", "pieColors", "pieInnerRadius", "pieLabelType", "pieSegmentLabels", "pieSegmentPrecision", "pieSegmentSeparation", "pieType", "showPieGrid", "showPieSampleLabel", "showPieValues", "startPieSectors"],
			U: {
				Pie: "true"
			}
		},
		General: {
			D: "General properties used in most visualizations :",
			P: ["canvasBox", "canvasBoxColor", "functions", "graphOrientation", "graphType", "invertGraph", "loadImagesTimeOut", "transparency", "useFlashIE"]
		},
		Axis: {
			D: "General axis parameters",
			P: ["axisAlgorithm", "axisExtension", "axisTickColor", "axisTickFont", "axisTickFontSize", "axisTickFontStyle", "axisTickScaleFontFactor", "axisTicksAutoAdjust", "axisTitleColor", "axisTitleFont", "axisTitleFontSize", "axisTitleFontStyle", "axisTitleScaleFontFactor", "axisWilkinsonLoose", "setMax", "setMin"],
			U: {
				StackedPercent: "true",
				Bar: "true",
				Correletion: "true",
				Pie: "true",
				ScatterBubble2D: "true",
				Barline: "true",
				StackedLine: "true",
				Scatter2D: "true",
				Dotplot: "true",
				Boxplot: "true",
				DotLine: "true",
				StackedPercentLine: "true",
				Treemap: "true",
				Candlestick: "true",
				TagCloud: "true",
				Scatter3D: "true",
				Area: "true",
				Line: "true",
				Heatmap: "true",
				AreaLine: "true",
				Stacked: "true"
			}
		},
		"Line Graphs": {
			D: "General parameters in line graphs",
			P: ["coordinateLineColor", "lineDecoration", "lineThickness", "lineType", "tension"],
			U: {
				StackedLine: "true",
				Line: "true",
				StackedPercentLine: "true",
				BarLine: "true",
				AreaLine: "true"
			}
		},
		Colors: {
			D: "Properties to adjust Colors :",
			P: ["colorHSV", "colorRGB", "colorScheme", "colors", "evenColor", "oddColor"]
		},
		"X-Axis2": {
			D: "X2 Axis parameters",
			P: ["setMaxX2", "setMinX2", "xAxis2AbsMax", "xAxis2Exact", "xAxis2MaxStrLength", "xAxis2MinorValues", "xAxis2Show", "xAxis2TickFormat", "xAxis2Ticks", "xAxis2Title", "xAxis2Values"],
			U: {
				StackedPercent: "true",
				Bar: "true",
				Correletion: "true",
				Pie: "true",
				StackedLine: "true",
				BarLine: "true",
				Dotplot: "true",
				Boxplot: "true",
				DotLine: "true",
				StackedPercentLine: "true",
				Candlestick: "true",
				Area: "true",
				Line: "true",
				Stacked: "true",
				Heatmap: "true",
				AreaLine: "true"
			}
		},
		"Network Graphs": {
			D: "General parameters used in networks",
			P: ["approximateNodePositions", "attractiveForceFunction", "autoHideOnDecorationsCenter", "calculateLayout", "colorEdgeBy", "colorNodeBy", "edgeConfigurableProperties", "edgeWidth", "filterEdgeBy", "filterNodeBy", "highlightNode", "initialTemperature", "is3DNetwork", "isSelectNodes", "layoutTime", "moveParentsWithChildren", "network2DRotate", "networkDepth", "networkDivisions", "networkForceConstant", "networkFreeze", "networkFreezeOnLoad", "networkLayoutType", "networkNodeMinDistance", "networkNodesOnTop", "networkRoot", "networkStack", "networkStackIndex", "networkStackStates", "nodeConfigurableProperties", "nodeFont", "nodeFontColor", "nodeFontSize", "nodeFontStyle", "nodeHighlightColor", "nodeScaleFontFactor", "nodeSize", "overrideAnchorNodes", "overrideEventlessNodes", "preScaleNetwork", "repulsiveForceFunction", "selectNode", "shapeEdgeBy", "shapeNodeBy", "showHiddenChildEdges", "showNetworkDecorationsLegend", "showNetworkEdgesLegend", "showNetworkNodesLegend", "showNetworkRadialLayout", "showNetworkTextLegend", "showNodeNameThreshold", "sizeDecorationBy", "sizeEdgeBy", "sizeNodeBy", "skipClick", "subNetworks", "temperature"],
			U: {
				Network: "true"
			}
		},
		"Combination Plots": {
			D: "Parameters used in complex plots :",
			P: ["layout", "layoutAdjust", "layoutAxis", "layoutComb", "layoutCurrent", "layoutHeight", "layoutMaxVarLegend", "layoutMulticolor", "layoutWidth", "offsetX", "offsetY", "scaleX", "scaleY", "translateX", "translateY", "weight"]
		},
		"Circular Graphs": {
			D: "General parameters in circular graphs",
			P: ["arcSegmentsSeparation", "circularCenterProportion", "circularConnectionsTransparency", "circularLetterSeparationFactor", "rAxis", "rAxisZero", "ringSeparation", "ringsType", "ringsWeight", "showCircularConnections", "showRingLegend", "smpLabelOrientation"],
			U: {
				Circular: "true"
			}
		},
		Skins: {
			D: "Parameters to change the skin of the application widgets :",
			P: ["selectedBackgroundColor", "skin", "skinProperties", "skinPropertiesBlue", "skinPropertiesGrey"]
		},
		"Zooming and Panning": {
			D: "Parameters associated with zooming and panning events :",
			P: ["panningGlobalX", "panningGlobalY", "panningStep", "panningX", "panningY", "zoom", "zoomGlobal", "zoomSamplesDisable", "zoomStep", "zoomVariablesDisable"]
		},
		Lines: {
			D: "Properties to adjust Lines :",
			P: ["arrowPointSize", "capType", "dashLength", "dotLength", "joinType", "lineWidthEvent", "lines", "outlineWidth"]
		},
		Debug: {
			D: "Debugging parameters :",
			P: ["codeType", "debug", "errors", "showCode", "showVersion"]
		},
		Legends: {
			D: "Legends for variables and samples",
			P: ["legendBackgroundColor", "legendBox", "legendBoxColor", "legendColor", "legendFont", "legendFontSize", "legendFontStyle", "legendPosition", "legendScaleFontFactor", "showLegend"],
			U: {
				StackedPercent: "true",
				Bar: "true",
				Correletion: "true",
				Pie: "true",
				ScatterBubble2D: "true",
				Barline: "true",
				StackedLine: "true",
				Scatter2D: "true",
				Dotplot: "true",
				Boxplot: "true",
				DotLine: "true",
				StackedPercentLine: "true",
				Treemap: "true",
				Candlestick: "true",
				TagCloud: "true",
				Scatter3D: "true",
				Area: "true",
				Line: "true",
				Heatmap: "true",
				AreaLine: "true",
				Stacked: "true"
			}
		},
		Patterns: {
			D: "Properties related to Patterns :",
			P: ["patternImages", "patternNames", "patterns"]
		},
		"Data Table": {
			D: "Parameters associated with the data table :",
			P: ["colWidth", "dataTableColumnWidth", "dataTableTransposed", "freezeColLeft", "freezeColRight", "freezeRowBottom", "freezeRowTop", "maxCols", "maxRows", "networkShowDataTable", "refresehDataTableOnDraw", "rowHeight", "showDataTable", "showDataTableOnSelect", "startCol", "startRow"]
		},
		"Titles and Subtitles": {
			D: "Properties associated with titles and subtitles :",
			P: ["subtitle", "subtitleColor", "subtitleFontStyle", "subtitleHeight", "title", "titleColor", "titleFontStyle", "titleHeight"]
		},
		"Scatter Plots": {
			D: "General parameters in scatter plots",
			P: ["contourType", "contourXBinSize", "contourYBinSize", "contourZBinSize", "functionIntervals", "isSelectDataPoints", "scatterOutlineThereshold", "scatterType", "selectDataMode", "selectDataModeDescription", "selectDataPoint"],
			U: {
				Scatter3D: "true",
				ScatterBubble2D: "true",
				Scatter2D: "true"
			}
		},
		Background: {
			D: "Background properties used in all visualizations :",
			P: ["background", "backgroundGradient1Color", "backgroundGradient2Color", "backgroundImage", "backgroundType", "backgroundVideo", "backgroundWindow", "backgroundWindowGradient1Color", "backgroundWindowGradient2Color", "backgroundWindowGradientOrientation"]
		},
		"3D Attributes": {
			D: "General parameters in 3d scatter plots and networks",
			P: ["bar3DInverseWeight", "maxRotate", "minRotate", "perspectiveFactor", "rotationDelay", "rotationSensitivity", "rotationStep", "show3DGrid", "x3DRatio", "xRotate", "y3DRatio", "yRotate", "z3DRatio", "zRotate"],
			U: {
				Network: "true",
				Scatter3D: "true",
				Bar: "true"
			}
		},
		"Data Filters": {
			D: "Parameters associated with filtering :",
			P: ["filterSkipNullKeys", "filterSkipNullValues", "filterType"]
		},
		"Correlation Graphs": {
			D: "General parameters for correlation",
			P: ["correlationAnchorLegend", "correlationAnchorLegendAlignWidth", "correlationAxis", "correlationLabelInterval"],
			U: {
				Correlation: "true"
			}
		},
		Functions: {
			D: "Functions exposed in the configurator :",
			P: ["addNormalDistributionLine", "addRegressionLine", "clusterSamples", "clusterVariables", "createHistogram", "createRandomData", "desegregateSamples", "desegregateVariables", "draw", "groupSamples", "hideCodeDiv", "hideInfoDiv", "hideUnhideSmps", "hideUnhideVars", "kmeansSamples", "kmeansVariables", "print", "recalculateLayout", "removeHistogram", "reset", "saveRemoteParameters", "segregateSamples", "segregateVariables", "setSkin", "showCodeDiv", "showInfoDiv", "sortSamplesByCategory", "sortSamplesByVariable", "sortVariablesByCategory", "sortVariablesBySample", "transform", "transpose", "ungroupSamples", "updateCodeDiv"]
		},
		"X-Axis": {
			D: "X axis parameters",
			P: ["setMaxX", "setMinX", "timeTicksFirst", "timeValueIndices", "timeValues", "xAxis", "xAxisAbsMax", "xAxisAbsMin", "xAxisCurrent", "xAxisExact", "xAxisHistogramHeight", "xAxisHistogramShow", "xAxisMajorTicks", "xAxisMaxStrLength", "xAxisMinorTicks", "xAxisMinorValues", "xAxisShow", "xAxisTickColor", "xAxisTickFormat", "xAxisTickStyle", "xAxisTicks", "xAxisTitle", "xAxisTransform", "xAxisTransformTicks", "xAxisValues"],
			U: {
				StackedPercent: "true",
				Bar: "true",
				Correletion: "true",
				Pie: "true",
				ScatterBubble2D: "true",
				StackedLine: "true",
				Scatter2D: "true",
				BarLine: "true",
				Dotplot: "true",
				Boxplot: "true",
				DotLine: "true",
				StackedPercentLine: "true",
				Treemap: "true",
				Candlestick: "true",
				TagCloud: "true",
				Scatter3D: "true",
				Area: "true",
				Line: "true",
				Heatmap: "true",
				AreaLine: "true",
				Stacked: "true"
			}
		},
		Data: {
			D: "Data related parameters",
			P: ["erroBarsWidth", "errorBarsType", "groupingFactors", "isBoxPlotCalc", "isGroupedData", "isLogData", "isMarketDataFormated", "isMarketSwitched", "isTransformedData", "missingDataColor", "ratioGroupReference", "ratioLevelReference", "ratioReference", "ratioSampleReference", "segregateSamplesBy", "segregateVariablesBy", "showErrorBars", "smpSort", "sortDir", "standardDeviationType", "tmpAsciiArray", "transformAxis", "transformBase", "transformType", "varSort", "zscoreAxis"],
			U: {
				StackedPercent: "true",
				Bar: "true",
				Correletion: "true",
				Pie: "true",
				ScatterBubble2D: "true",
				Barline: "true",
				StackedLine: "true",
				Scatter2D: "true",
				Dotplot: "true",
				Boxplot: "true",
				DotLine: "true",
				StackedPercentLine: "true",
				Treemap: "true",
				Candlestick: "true",
				TagCloud: "true",
				Scatter3D: "true",
				Area: "true",
				Line: "true",
				Heatmap: "true",
				AreaLine: "true",
				Stacked: "true"
			}
		}
	},
	N: {
		hideLabel: {
			M: "Network",
			T: "boolean",
			C: "Flag to hide the label node"
		},
		zIndex: {
			M: "Network",
			T: "integer",
			C: "Css property for the imagePath"
		},
		x: {
			M: "Network",
			T: "float",
			C: "X coordinate"
		},
		outline: {
			M: "Network",
			T: "color",
			C: "Color for the outline of the node"
		},
		imagePath: {
			M: "Network",
			T: "url",
			C: "Url for the node image"
		},
		parentNode: {
			M: "Network",
			T: "string",
			C: "Id of parent node"
		},
		y: {
			M: "Network",
			T: "float",
			C: "Y coordinate"
		},
		anchor: {
			M: "Network",
			T: "boolean",
			C: "Flag make the node transparent"
		},
		color: {
			M: "Network",
			T: "color",
			C: "Color for the node"
		},
		outlineWidth: {
			M: "Network",
			T: "integer",
			C: "Pixels used to raw the outline of the node"
		},
		eventless: {
			M: "Network",
			T: "boolean",
			C: "Flag to disable all events in the node"
		},
		pattern: {
			O: "open, closed",
			M: "Network",
			T: "option",
			C: "Whether to draw a solid shape or just an outline"
		},
		rotate: {
			M: "Network",
			T: "integer",
			C: "Number of degrees to rotate the shape"
		},
		hide: {
			M: "Network",
			T: "boolean",
			C: "Flag to hide the node"
		},
		shape: {
			M: "Network",
			T: "string",
			C: "Shape for the node. One of the ones defined in shapes"
		},
		z: {
			M: "Network",
			T: "float",
			C: "Z coordinate"
		}
	},
	P: {
		yAxisTransform: {
			H: ['{*,"graphType":"Scatter2D"}'],
			O: ["false", "log2", "log10", "exp2", "exp10", "percentile"],
			M: "Y-Axis",
			T: "option",
			C: "Transformation for the values in the Y axis.",
			D: "false"
		},
		vennCompartments: {
			Z: "true",
			M: "Venn Diagrams",
			T: "array",
			C: "Name for the compartments in the the Venn diagrams"
		},
		setMaxX: {
			Z: "true",
			H: ['{"setMaxX":200}', '{"setMaxX":50}', '{"setMaxX":null}'],
			M: "X-Axis",
			T: "float",
			C: "Maximum value to set the data in the X axis",
			D: "null"
		},
		adjustAspectRatioYTries: {
			Z: "true",
			M: "Aspect Ratio",
			T: "integer",
			C: "Counter set when trying to automatically adjust the vertical size of the canvas when adjustAspectRatio is true"
		},
		sequenceLColor: {
			H: ["{*}"],
			M: "Genome Browser",
			T: "color",
			C: "Color for the leucines in the genome browser",
			D: "rgb(0,103,0)"
		},
		pieSegmentLabels: {
			H: ["{*}"],
			O: ["inside", "outside"],
			M: "Pie Charts",
			T: "option",
			C: "Location for the values in the pie charts",
			D: "inside"
		},
		shapeBy: {
			S: ["shapeByData"],
			O: ["false", "variable"],
			T: "option",
			X: "getXZData",
			H: ['{"graphType":"Scatter3D","shapeBy":"Annt1"}', '{"graphType":"Scatter3D","shapeBy":"Sample4"}', '{"graphType":"Dotplot","shapeBy":"Factor1"}', '{"graphType":"Dotplot","shapeBy":"Annt1"}', '{"graphType":"Dotplot","shapeBy":"variable"}'],
			M: "Data Point Attributes",
			D: "false",
			C: "Name of a variable annotation or a sample name or the string 'variable' to shape the variables. When shapeByData is specified shapeBy is used for the title in the legend."
		},
		xAxis2Exact: {
			H: ['{*,"graphType":"BarLine"}'],
			M: "X-Axis2",
			T: "boolean",
			C: "Flag to force exact values for the data in the 2nd X axis",
			D: "false",
			U: {
				StackedLine: "true",
				StackedPercentLine: "true",
				BarLine: "true",
				AreaLine: "true"
			}
		},
		sequenceFont: {
			Z: "true",
			M: "Genome Browser",
			T: "font",
			C: "Font for the text of the sequence in the genome browser"
		},
		networkStack: {
			Z: "true",
			M: "Network Graphs",
			T: "array",
			C: "Array to keep state of the network after a drag or move"
		},
		desegregateSamples: {
			S: ["segregateSamples"],
			M: "Functions",
			T: "void",
			C: "Desegreagate samples previously segregated based on a sample category (data.x object)",
			U: {
				StackedPercent: "true",
				Boxplot: "true",
				DotLine: "true",
				Bar: "true",
				Correletion: "true",
				StackedPercentLine: "true",
				Pie: "true",
				Barline: "true",
				Area: "true",
				StackedLine: "true",
				Line: "true",
				Dotplot: "true",
				AreaLine: "true",
				Heatmap: "true",
				Stacked: "true"
			}
		},
		is3DNetwork: {
			H: ["{*}"],
			M: "Network Graphs",
			T: "boolean",
			C: "Flag to create or not a 3D network",
			D: "false"
		},
		backgroundWindow: {
			S: ["backgroundType"],
			H: ['{*,"backgroundType":"window"}'],
			M: "Background",
			T: "color",
			C: "Specifies the background color for the canvas when the background type is of a type 'window'.",
			D: "rgb(244,244,244)"
		},
		varDendrogramPosition: {
			H: ['{*,"data":"Generic","graphType":"Heatmap","showVarDendrogram":true}'],
			O: ["top", "bottom"],
			M: "Dendrograms",
			T: "option",
			C: "Position for the variable dendrogram in the plot. It could be top, bottom, right or left depending on the orientation of the graph.",
			D: "top"
		},
		calculateLayout: {
			H: ['{"data":"NetworkBasic","calculateLayout":false}', '{"data":"LesMiserables","calculateLayout":true,"colorNodeBy":"group"}'],
			M: "Network Graphs",
			T: "boolean",
			C: "Flag to force or not to calculate the network layout.",
			D: "true"
		},
		varLabelInterval: {
			H: ["{*}"],
			M: "Variables",
			T: "integer",
			C: "Interval for the variable labels in heatmaps",
			D: "1",
			U: {
				Heatmap: "true"
			}
		},
		shapes: {
			H: ['{"data":"Shapes","calculateLayout":false,"graphType":"Network"}'],
			O: ["sphere", "square", "triangle", "star", "rhombus", "octagon", "oval", "plus", "minus", "pacman", "mdavid", "rect2", "rect3", "arc", "rectangle", "image"],
			M: "General Attributes",
			T: "array",
			C: "Shapes used in network graphs"
		},
		yAxisMinorValues: {
			M: "Y-Axis",
			T: "array",
			C: "Values for the minor ticks in the Y axis",
			D: "[]"
		},
		sequenceTColor: {
			H: ["{*}"],
			M: "Genome Browser",
			T: "color",
			C: "Color for the thymidines and threonines in the genome browser",
			D: "rgb(255,0,0)"
		},
		nodeFontColor: {
			H: ["{*}"],
			M: "Network Graphs",
			T: "color",
			C: "Color for the network text",
			D: "rgb(0,0,0)"
		},
		networkNodeMinDistance: {
			H: ['{*,"data":"LesMiserables","networkLayoutType":"forceDirected","colorNodeBy":"group"}'],
			M: "Network Graphs",
			T: "integer",
			C: "Minimum distance between nodes in forceDirected and organic layouts",
			D: "4"
		},
		lineThickness: {
			S: ["outlineWidth"],
			H: ['{*,"graphType":"Line"}'],
			M: "Line Graphs",
			T: "float",
			C: "Thickness in pixels for the lines in the line plots.",
			D: "1"
		},
		title: {
			S: ["titleHeight", "titleColor"],
			H: ['{"title":"Graph Title"}'],
			M: "Titles and Subtitles",
			T: "string",
			C: "Title of the graph.",
			D: "false"
		},
		pieInnerRadius: {
			H: ['{"data":"Generic","pieInnerRadius":0.2}', '{"data":"Generic","pieInnerRadius":0.35}', '{"data":"Generic","pieInnerRadius":0.5}'],
			M: "Pie Charts",
			T: "float",
			C: "Percentage of the radius in the pies to remove to make a donut. It must be a number between 0 to 1",
			D: "0"
		},
		zAxisMaxStrLength: {
			Z: "true",
			M: "Z-Axis",
			T: "string",
			C: "Longest string of all the values in the ticks in the Z axis"
		},
		remoteParamOverride: {
			M: "Remote Procedures",
			T: "boolean",
			C: "Flag to override parameters to maintain the state of the graphs when using remote services",
			D: "false"
		},
		yAxisExact: {
			H: ['{*,"graphType":"Scatter2D"}'],
			M: "Y-Axis",
			T: "boolean",
			C: "Flag to force exact values for the data in the Y axis",
			D: "false"
		},
		showShadow: {
			S: ["shadowOffsetX", "shadowOffsetY", "shadowBlur", "shadowColor"],
			H: ["{*}"],
			M: "Shadows",
			T: "boolean",
			C: "Flag used to add shadows to all graph objects in the canvas. It will be forced to false if the browser is IE.",
			D: "false"
		},
		colorScheme: {
			S: ["colors"],
			H: ['{*,"data":"Random:16:1:0:0:1","graphType":"Pie"}'],
			O: ["user", "basic", "dark", "strong", "light", "pastel", "balanced", "reset"],
			M: "Colors",
			T: "option",
			C: "Color schemes can be user defined which will take the colors in the color property or one provided in canvasXpress. The order of the colors will be used to sequentially select when a different color is needed in a particular visualization.",
			D: "basic"
		},
		remoteWindow: {
			M: "Remote Procedures",
			T: "integer",
			C: "Number of plots to show  when requesting remote data",
			D: "1"
		},
		connectByColor: {
			H: ['{"graphType":"Scatter3D","connectBy":"Annt1"}', '{"graphType":"Scatter3D"}'],
			M: "Data Point Attributes",
			T: "color",
			C: "The color for the connectBy lines",
			D: "rgb(0,0,0)",
			U: {
				Scatter3D: "true",
				ScatterBubble2D: "true",
				Scatter2D: "true"
			}
		},
		showNetworkDecorationsLegend: {
			H: ['{*,"data":"NetworkBasic","calculateLayout":false}'],
			M: "Network Graphs",
			T: "boolean",
			C: "Flag to show node legends in the networks",
			D: "true"
		},
		zAxisTickFormat: {
			H: ['{"graphType":"Scatter3D","zAxisTickFormat":"%.2f cxs"}'],
			M: "Z-Axis",
			T: "string",
			C: "Format for the tick values in the Z axis",
			D: "false"
		},
		xAxisMinorValues: {
			M: "X-Axis",
			T: "array",
			C: "Values for the minor ticks in the X axis",
			D: "[]"
		},
		rAxisMinorValues: {
			M: "R-Axis",
			T: "array",
			C: "Values for the minor ticks in the R axis",
			D: "[]"
		},
		isMarketDataFormated: {
			Z: "true",
			M: "Data",
			T: "boolean",
			C: "Flag to indicate if the data has been formated to display Candlestick."
		},
		segregateSamples: {
			S: ["desegregateSamples"],
			M: "Functions",
			T: "option",
			C: "Segregate samples based on a sample category (data.x object)",
			X: "getXData",
			U: {
				StackedPercent: "true",
				Boxplot: "true",
				DotLine: "true",
				Bar: "true",
				Correletion: "true",
				StackedPercentLine: "true",
				Pie: "true",
				Barline: "true",
				Area: "true",
				StackedLine: "true",
				Line: "true",
				Dotplot: "true",
				AreaLine: "true",
				Heatmap: "true",
				Stacked: "true"
			}
		},
		ratioSampleReference: {
			O: ["false"],
			M: "Data",
			T: "option",
			C: "Name of the sample used in ratio transformation.",
			D: "false",
			X: "getSamplesAsArray"
		},
		ringsWeight: {
			H: ['{"data":"Circular","segregateVariablesBy":"Ring","ringsWeight":[0.5,0.25,0.25]}'],
			M: "Circular Graphs",
			T: "array",
			C: "Array containing the dimensions for each ring in the circular plots",
			D: "[]"
		},
		skin: {
			H: ["{*}"],
			O: ["blue", "grey"],
			M: "Skins",
			T: "option",
			C: "Skin for the application",
			D: "grey"
		},
		isTransformedData: {
			Z: "true",
			M: "Data",
			T: "boolean",
			C: "Flag to indicate if the data is transformed."
		},
		background: {
			S: ["backgroundType"],
			H: ["{*}"],
			M: "Background",
			T: "color",
			C: "Specifies the background color for the canvas.",
			D: "rgb(255,255,255)"
		},
		resizerTransparency: {
			M: "Axis Resizer",
			T: "boolean",
			C: "Flag to make the axis resizers transparent",
			D: "true"
		},
		hideUnhideVars: {
			M: "Functions",
			T: "array",
			C: "Hide or unhide variables. It works like a switch",
			X: "getVariablesAsArray",
			U: {
				StackedPercent: "true",
				Bar: "true",
				Correletion: "true",
				Pie: "true",
				ScatterBubble2D: "true",
				Barline: "true",
				StackedLine: "true",
				Scatter2D: "true",
				Dotplot: "true",
				Boxplot: "true",
				DotLine: "true",
				StackedPercentLine: "true",
				Scatter3D: "true",
				Area: "true",
				Line: "true",
				Stacked: "true",
				Heatmap: "true",
				AreaLine: "true"
			}
		},
		periodTicksLabels: {
			H: ["{*}"],
			M: "Genome Browser",
			T: "integer",
			C: "Number of ticks to skip between values in the genome browser",
			D: "5"
		},
		colWidth: {
			M: "Data Table",
			T: "integer",
			C: "Mumber of pixels for the width of cells in the data table",
			D: "100"
		},
		showAnimationFontStyle: {
			O: ["", "bold", "italic", "bold italic"],
			M: "Animation",
			T: "option",
			C: "Font style for the animation. @default"
		},
		scaleY: {
			Z: "true",
			M: "Combination Plots",
			T: "float",
			C: "Scale factor for the Y axis"
		},
		varLabelFont: {
			Z: "true",
			M: "Variables",
			T: "font",
			C: "Font for the variable labels in one dimensional plots"
		},
		startCol: {
			Z: "true",
			M: "Data Table",
			T: "integer",
			C: "Starting column in the data table"
		},
		xAxisTransform: {
			H: ['{*,"graphType":"Scatter2D"}'],
			O: ["false", "log2", "log10", "exp2", "exp10", "percentile"],
			M: "X-Axis",
			T: "option",
			C: "Tranformation for the values in the X axis.",
			D: "false",
			U: {
				ScatterBubble2D: "true",
				Scatter2D: "true"
			}
		},
		nodesProperties: {
			M: "Data Table/Filter",
			T: "array",
			C: "Two dimensional array with object properties not at the root level for the nodes in the Network graph to include in the Data table and the data filter",
			D: "[]"
		},
		ratioReference: {
			H: ["{*}"],
			M: "Data",
			T: "integer",
			C: "Default index of sample used in ratio transformation.",
			D: "0"
		},
		citationColor: {
			S: ["citation"],
			H: ['{*,"citation":"Graph citation or reference"}'],
			M: "Citations or References",
			T: "color",
			C: "Color for a reference citation of the graph",
			D: "rgb(0,0,0)"
		},
		rAxisZero: {
			M: "Circular Graphs",
			T: "boolean",
			C: "Flag to force the rAxis to start from zero otherwise it starts from the minimum value",
			D: "false"
		},
		decorationsPosition: {
			H: ['{*,"showDecorations":true,"showLegend":false,"graphType":"Scatter2D","data":"Random:16:2:0:0","functions":["addNormalDistributionLine", "draw"]}', '{*,"data":"NetworkDecorations","graphType":"Network","networkFreezeOnLoad":true,"showDecorations":true,"calculateLayout":false,"decorations":["exp1","exp2","exp3"],"conditional":{"decorationsPosition":["top","right"]}}', '{*,"data":"NetworkDecorations","graphType":"Network","networkFreezeOnLoad":true,"showDecorations":true,"calculateLayout":false,"decorations":["exp1","exp2","exp3"],"conditional":{"decorationsPosition":["bottom","left"]}}'],
			O: ["bottom", "right"],
			M: "Decorations",
			T: "option",
			C: "Position for the decorations in scatter plots and network graphs",
			D: "bottom"
		},
		eventPlusMinusKeys: {
			H: ["{*}"],
			M: "Events",
			T: "boolean",
			C: "Flag to enable plus / minus key binding events.",
			D: "false"
		},
		resizerBackgroundColorCurrent: {
			M: "Axis Resizer",
			T: "color",
			C: "Color for the div that shows up the current area selected in the axes in the canvas",
			D: "rgb(237,247,255)"
		},
		correlationAnchorLegend: {
			H: ["{*}"],
			M: "Correlation Graphs",
			T: "boolean",
			C: "Flag to show a region above the correlation plot that anchror a sample/variable to a position",
			D: "false"
		},
		minRotate: {
			M: "3D Attributes",
			T: "float",
			C: "Minimum number of degrees to rotate graph arround axes",
			D: "null"
		},
		axisTitleColor: {
			H: ["{*}"],
			M: "Axis",
			T: "color",
			C: "Color for the axis title in one and two dimensional plots",
			D: "rgb(0,0,0)"
		},
		varTitleFontColor: {
			H: ['{*,"varTitle":"Variable Title"}'],
			M: "Variables",
			T: "color",
			C: "Font color for the variable titles in one dimensional plots",
			D: "rgb(0,0,0)",
			U: {
				Heatmap: "true"
			}
		},
		circularConnectionsTransparency: {
			H: ['{*,"data":"Circular","segregateSamplesBy":"Segment"}'],
			M: "Circular Graphs",
			T: "float",
			C: "Percentage of transparency applied to the connections in the circular graphs",
			D: "0.5"
		},
		loadImagesTimeOut: {
			M: "General",
			T: "integer",
			C: "Specifies the number of milliseconds to wait trying to load images before atempting to plot the data. For developers only.",
			D: "100"
		},
		xAxis2AbsMax: {
			Z: "true",
			M: "X-Axis2",
			T: "float",
			C: "Minimum non-filtered value for the data plotted in the 2nd X axis"
		},
		panningGlobalX: {
			Z: "true",
			M: "Zooming and Panning",
			T: "float",
			C: "Cumulative number of unit to pan the network in the X dimension"
		},
		xAxis: {
			H: ['{"xAxis":["Sample1","Sample2","Sample3"],"yAxis":["Sample4","Sample5","Sample6"],"graphType":"Scatter2D"}'],
			M: "X-Axis",
			T: "array",
			C: "Name of the samples or sample groups to be displayed in the X axis",
			D: "[]",
			X: "getSamplesAsArray",
			U: {
				ScatterBubble2D: "true",
				Scatter2D: "true"
			}
		},
		featureNameFont: {
			Z: "true",
			M: "Genome Browser",
			T: "font",
			C: "Font for the text of the features in the genome browser"
		},
		offsetY: {
			Z: "true",
			M: "Combination Plots",
			T: "float",
			C: "Additional amount to move for the Y axis."
		},
		selectNode: {
			Z: "true",
			M: "Network Graphs",
			T: "object",
			C: "Name of nodes (in the data object) to select.",
			D: "{}"
		},
		featureTraceHeight: {
			H: ["{*}"],
			M: "Genome Browser",
			T: "integer",
			C: "Default size in pixels of the trace height",
			D: "40"
		},
		featureQualityShow: {
			H: ["{*}"],
			M: "Genome Browser",
			T: "boolean",
			C: "Flag use to show quality",
			D: "true"
		},
		smpLabelFontStyle: {
			H: ["{*}"],
			O: ["", "bold", "italic", "bold italic"],
			M: "Samples",
			T: "option",
			C: "Font style for the sample label. @default"
		},
		lineDecoration: {
			H: ['{*,"graphType":"Line"}'],
			O: ["false", "dot", "symbol"],
			M: "Line Graphs",
			T: "option",
			C: "Lines decorations in the line graphs",
			D: "symbol"
		},
		kmeansVariables: {
			S: ["kmeansClusters", "maxIterations"],
			M: "Functions",
			T: "void",
			C: "Cluster variables using kmeans",
			U: {
				StackedPercent: "true",
				Boxplot: "true",
				Bar: "true",
				StackedPercentLine: "true",
				Area: "true",
				Line: "true",
				StackedLine: "true",
				Dotplot: "true",
				AreaLine: "true",
				Heatmap: "true",
				Stacked: "true"
			}
		},
		xAxisValues: {
			M: "X-Axis",
			T: "array",
			C: "Values for the ticks in the X axis",
			D: "[]"
		},
		clusterAxis: {
			S: ["distance", "linkage", "imputeMethod", "centerData", "clusterSamples", "clusterVariables"],
			O: ["samples", "variables"],
			M: "Clustering",
			T: "option",
			C: "Default axis to use when clustering data.",
			D: "samples"
		},
		varOverlayProperties: {
			M: "Overlays",
			T: "object",
			C: "Object to assign properties to the variable overlays. The key should be an annotation in the 'data.z' object and the value should be either type which could be either one of the one dimensional graph types or increasing, or decreasing for continuous annotations",
			D: "{}"
		},
		rotationDelay: {
			M: "3D Attributes",
			T: "integer",
			C: "Time in milliseconds to wait between rendering the plot when dragging the mouse.",
			D: "100"
		},
		varLabelScaleFontFactor: {
			H: ["{*}"],
			M: "Variables",
			T: "float",
			C: "Scaling factor used to increse or decrease variable font size in the canvas.",
			D: "1",
			U: {
				Heatmap: "true"
			}
		},
		maxVarStringLen: {
			H: ['{"maxVarStringLen":50}', '{"maxVarStringLen":5}'],
			M: "Variables",
			T: "integer",
			C: "Maximum length in characters a variable label or description can have so anything above is truncated.",
			D: "30",
			U: {
				Heatmap: "true"
			}
		},
		varLabelRotate: {
			H: ['{"varLabelRotate":0}', '{"varLabelRotate":45}', '{"varLabelRotate":90}'],
			M: "Variables",
			T: "integer",
			C: "Rotation for variable labels in degrees It could be positive or negative.",
			D: "0",
			U: {
				Heatmap: "true"
			}
		},
		networkNodesOnTop: {
			H: ["{*}"],
			M: "Network Graphs",
			T: "boolean",
			C: "Order to use when drawing nodes and edges in the networks",
			D: "true"
		},
		colorRGB: {
			Z: "true",
			M: "Colors",
			T: "array",
			C: "Color RGB. Red, Green, Blue used in the configurator"
		},
		setMaxZ: {
			H: ['{"graphType":"Scatter3D","setMaxZ":200}', '{"graphType":"Scatter3D","setMaxZ":50}', '{"graphType":"Scatter3D","setMaxZ":null}'],
			M: "Z-Axis",
			T: "float",
			C: "Maximum value to set the data in the Z axis",
			D: "null"
		},
		dendrogramHeight: {
			M: "Dendrograms",
			T: "boolean",
			C: "Flag to size the branches of the dendrogram. Not implemented yet.",
			D: "false"
		},
		showFeatureNameThereshold: {
			H: ["{*}"],
			M: "Genome Browser",
			T: "integer",
			C: "Threshehold used to set te limit when there are too many features in the genome browser",
			D: "20"
		},
		zAxisAbsMin: {
			Z: "true",
			M: "Z-Axis",
			T: "float",
			C: "Minimum non-filtered value for the data plotted in the Z axis"
		},
		setMinZ: {
			H: ['{"graphType":"Scatter3D","setMinY":15}', '{"graphType":"Scatter3D","setMinY":30}', '{"graphType":"Scatter3D","setMinY":null}'],
			M: "Z-Axis",
			T: "float",
			C: "Minimum value to set the data in the Z axis",
			D: "null"
		},
		varTitleFontSize: {
			H: ['{"varTitle":"Variable Title","autoScaleFont":false,"varTitleFontSize":10}', '{"varTitle":"Variable Title","autoScaleFont":false,"varTitleFontSize":20}'],
			M: "Variables",
			T: "integer",
			C: "Size for the variable title in one dimensional plots",
			D: "10",
			U: {
				Heatmap: "true"
			}
		},
		control_stop_blue: {
			M: "Images",
			T: "image",
			C: "Relative path to an image file to the stop button (not including the image directory)",
			D: "stop.png"
		},
		edgeWidth: {
			H: ["{*}"],
			M: "Network Graphs",
			T: "integer",
			C: "Default width for the edges in the networks",
			D: "1"
		},
		genomeTicks: {
			H: ["{*}"],
			M: "Genome Browser",
			T: "integer",
			C: "Number of ticks in the genome browser",
			D: "50"
		},
		sequenceSColor: {
			H: ["{*}"],
			M: "Genome Browser",
			T: "color",
			C: "Color for the degenerate G/C and serines in the genome browser",
			D: "rgb(255,165,0)"
		},
		showCircularConnections: {
			H: ['{*,"data":"Circular","segregateVariablesBy":"Ring"}'],
			M: "Circular Graphs",
			T: "boolean",
			C: "Flag to show connections in circular graphs",
			D: "true"
		},
		showTextShadow: {
			S: ["shadowOffsetX", "shadowOffsetY", "shadowBlur", "shadowColor"],
			H: ["{*}"],
			M: "Shadows",
			T: "boolean",
			C: "Flag used to add shadows to all text in the canvas. It will be forced to false if the browser is IE.",
			D: "false"
		},
		maxIterations: {
			S: ["kmeansClusters", "kmeansSamples", "kmeansVariables"],
			M: "Clustering",
			T: "integer",
			C: "Number of maximum iterations when clustering data with kmeans for one dimensional graphs or maximum number of iterations when calculating force direct layout networks.",
			D: "10"
		},
		sortDir: {
			H: ["{*}"],
			O: ["ascending", "descending"],
			M: "Data",
			T: "option",
			C: "Default direction for data sorting.",
			D: "ascending"
		},
		filterSmpBy: {
			M: "Samples",
			T: "filter",
			C: "Filter samples by their annotation included in the 'data.x' object used in one dimensional plots",
			D: "[]",
			X: "getXData"
		},
		scatterOutlineThereshold: {
			H: ['{"data":"3DScatter","graphType":"Scatter3D","scatterOutlineThereshold":4000}', '{"data":"3DScatter","graphType":"Scatter3D","scatterOutlineThereshold":5}'],
			M: "Scatter Plots",
			T: "integer",
			C: "Maximum number of data points before skipping plotting their outline but only the fill color",
			D: "4000"
		},
		showOverlays: {
			H: ['{*,"graphType":"Heatmap","data":"Random:10:10:3:3","varOverlays":["Annt1","Annt2","Annt3"],"smpOverlays":["Factor1","Factor2","Factor3"]}'],
			M: "Overlays",
			T: "boolean",
			C: "Flag to indicate to show or not the overlays in one dimensional plots",
			D: "true"
		},
		graphOrientation: {
			H: ["{*}"],
			O: ["horizontal", "vertical"],
			M: "General",
			T: "option",
			C: "Specifies the orientation of one dimensional graphs.",
			D: "horizontal",
			U: {
				StackedPercent: "true",
				Bar: "true",
				StackedLine: "true",
				BarLine: "true",
				Dotplot: "true",
				Boxplot: "true",
				DotLine: "true",
				StackedPercentLine: "true",
				Treemap: "true",
				Candlestick: "true",
				TagCloud: "true",
				Area: "true",
				Line: "true",
				AreaLine: "true",
				Heatmap: "true",
				Stacked: "true"
			}
		},
		outlineWidth: {
			S: ["lineThickness"],
			H: ['{*,"data":"Lines","calculateLayout":false,"graphType":"Network"}'],
			M: "Lines",
			T: "integer",
			C: "Default width in pixels for lines in networks and other line elements in all visualizations except for the lines in the line plots.",
			D: "1"
		},
		randomDataVariableAnnotationRatio: {
			M: "Random",
			T: "integer",
			C: "Approximate number of classes in each variable annotation when creating random data",
			D: "2"
		},
		marginRight: {
			H: ["{*}"],
			M: "Margins",
			T: "integer",
			C: "Specifies the length in pixels for the right margin in the canvas.",
			D: "20"
		},
		align: {
			H: ['{*,"title":"Graph Title"}'],
			O: ["right", "center", "left"],
			M: "Text",
			T: "option",
			C: "Default horizontal alignment for drawing text.",
			D: "center"
		},
		dataTableTransposed: {
			M: "Data Table",
			T: "boolean",
			C: "Flag to transpose the data in the data table",
			D: "true"
		},
		showDataTableOnSelect: {
			M: "Data Table",
			T: "boolean",
			C: "Flag to indicate to show data after selecting data in the plot",
			D: "false"
		},
		wireColor: {
			H: ["{*}"],
			M: "Genome Browser",
			T: "color",
			C: "Color for the ticks in the genome browser",
			D: "rgba(204,204,204,0.1)"
		},
		sequenceVColor: {
			H: ["{*}"],
			M: "Genome Browser",
			T: "color",
			C: "Color for the degenerate A/C/G and valines in the genome browser",
			D: "rgb(0,103,0)"
		},
		marginTop: {
			H: ["{*}"],
			M: "Margins",
			T: "integer",
			C: "Specifies the length in pixels for the top margin in the canvas.",
			D: "20"
		},
		setMin: {
			Z: "true",
			M: "Axis",
			T: "float",
			C: "Minimum value to set the data",
			D: "null"
		},
		animationCycles: {
			M: "Animation",
			T: "integer",
			C: "Number of cycles to plot the graph for the animations.",
			D: "20"
		},
		sequenceDColor: {
			H: ["{*}"],
			M: "Genome Browser",
			T: "color",
			C: "Color for the degenerate A/G/T and aspartic acids in the genome browser",
			D: "rgb(0,0,0)"
		},
		videoLoop: {
			H: ['{*,"backgroundType":"video","backgroundVideo":["http://video-js.zencoder.com/oceans-clip.mp4", "http://video-js.zencoder.com/oceans-clip.webm"]}'],
			M: "Videos",
			T: "boolean",
			C: "Flag to loop videos default false"
		},
		shapeNodeBy: {
			H: ['{"data":"LesMiserables","colorNodeBy":"group","shapeNodeBy":"group"}'],
			M: "Network Graphs",
			T: "string",
			C: "Name of the attribute to shape the nods.",
			D: "false"
		},
		tagCloudGridPoints: {
			Z: "true",
			M: "Tag Cloud",
			T: "array",
			C: "Array to keep state of the used space in the tag cloud visualization"
		},
		axisTickFontStyle: {
			H: ["{*}"],
			O: ["", "bold", "italic", "bold italic"],
			M: "Axis",
			T: "option",
			C: "Font style for the axis. @default"
		},
		errors: {
			Z: "true",
			M: "Debug",
			T: "array",
			C: "Array containing benign errors produced when rendering canvasXpress",
			D: "[]"
		},
		xAxisShow: {
			H: ["{*}"],
			M: "X-Axis",
			T: "boolean",
			C: "Flag to show on not the values of the ticks in the X axis",
			D: "true"
		},
		skinPropertiesGrey: {
			Z: "true",
			H: ["{*}"],
			M: "Skins",
			T: "array",
			C: "Values for the grey skin",
			D: "[]"
		},
		canvasBoxColor: {
			S: ["canvasBox"],
			H: ['{*,"canvasBox":true}'],
			M: "General",
			T: "color",
			C: "Color for the box around the canvas",
			D: "rgb(204,204,204)"
		},
		subtitleHeight: {
			S: ["subtitle", "subtitleColor"],
			H: ['{*,"title":"Graph Title","subtitle":"Graph Subtitle"}'],
			M: "Titles and Subtitles",
			T: "integer",
			C: "Height for the subtitle of the graph. The font height will be adjusted automatically to fit in the canvas.",
			D: "16"
		},
		indicatorsPosition: {
			H: ['{*,"data":"Random:16:4:0:0","colorBy":"Sample4","showIndicators":true,"graphType":"Scatter3D"}'],
			O: ["bottom", "right"],
			M: "Indicators",
			T: "option",
			C: "Position for the color, shape and size indicators in several visualizations",
			D: "bottom"
		},
		featureConfigurableProperties: {
			F: "id:[string];Feature id;[],fill:[color];Color for the feature;[]",
			H: ["{*}"],
			M: "Genome Browser",
			T: "array",
			C: "Feature configurable properties",
			D: ["'id'", "'name'", "'label'", "'hideName'", "'fill'", "'outline'", "'dir'", "'showDir'", "'connect'", "'offset'", "'data'", "'subtype'", "'quality'", "'signalToNoise'", "'coordinate'", "'sequence'", "'trace'", "'gaps'", "'translate'", "'hide'", "'counter'"]
		},
		titleHeight: {
			S: ["title", "titleColor"],
			H: ['{*,"title":"Graph Title"}'],
			M: "Titles and Subtitles",
			T: "integer",
			C: "Height for the title of the graph. The font height will be adjusted automatically to fit in the canvas.",
			D: "30"
		},
		subtracksMaxDefault: {
			M: "Genome Browser",
			T: "integer",
			C: "Maximum number of subtracks to show in a track",
			D: "8"
		},
		contourZBinSize: {
			H: ['{"data":"Random:50:50","functions":["createContour"],"contourXBinSize":5,"contourYBinSize":5,"contourZBinSize":5}', '{"data":"Random:50:50","functions":["createContour"],"contourXBinSize":10,"contourYBinSize":10,"contourZBinSize":10}'],
			S: ["createContour"],
			M: "Scatter Plots",
			T: "integer",
			C: "Size of Z bins in contour plots",
			D: "false"
		},
		acknowledgment: {
			H: ["{*}"],
			S: ["acknowledgmentIcon", "acknowledgmentIconPosition"],
			M: "Acknowledgment",
			T: "boolean",
			C: "Flag to include an acknowledgment image for canvasXpress",
			D: "false"
		},
		videoColor: {
			H: ['{*,"backgroundType":"video","backgroundVideo":["http://video-js.zencoder.com/oceans-clip.mp4", "http://video-js.zencoder.com/oceans-clip.webm"]}'],
			M: "Videos",
			T: "color",
			C: "Color for the video grid and current time",
			D: "rgb(255,0,0)"
		},
		sizes: {
			H: ['{"data":"Random:16:3:16:0","graphType":"Scatter3D","sizeBy":"Annt1"}'],
			O: ["4", "6", "8", "10", "12", "14", "16", "18", "20", "22", "24", "26", "28", "30", "32", "34"],
			M: "General Attributes",
			T: "array",
			C: "Sizes used invisualizations"
		},
		infoTimeIn: {
			H: ["{*}"],
			M: "Events",
			T: "integer",
			C: "Time in milliseconds to start showing info after a mouse over",
			D: "50"
		},
		layoutHeight: {
			Z: "true",
			M: "Combination Plots",
			T: "float",
			C: "Height of the current segment of the canvas when there are multiple graphs."
		},
		sizeEdgeBy: {
			H: ['{"data":"LesMiserables","sizeEdgeBy":"value"}'],
			M: "Network Graphs",
			T: "string",
			C: "Name of the attribute to size the edges.",
			D: "false"
		},
		xAxis2Title: {
			H: ['{"graphType":"BarLine","xAxis2Title":"2nd X-axis title"}'],
			M: "X-Axis2",
			T: "string",
			C: "Title for the 2nd X axis",
			D: "false"
		},
		loadingImage: {
			H: ["{*}"],
			O: ["loading1.gif", "loading2.gif"],
			M: "Images",
			T: "image",
			C: "Relative path to an image file to the loading image (not including the image directory)",
			D: "loading1.gif"
		},
		foregroundWindow: {
			S: ["backgroundType"],
			H: ['{*,"backgroundType":"window"}'],
			M: "Foreground",
			T: "color",
			C: "Specifies the foreground color for text or lines when the background type is of a type 'window'.",
			D: "rgb(0,0,0)"
		},
		colorBy: {
			H: ['{"graphType":"Scatter3D","colorBy":"Annt1"}', '{"graphType":"Scatter3D","colorBy":"Sample4"}', '{"graphType":"Bar","colorBy":"Factor1"}', '{"graphType":"Dotplot","colorBy":"Factor1"}', '{"graphType":"Dotplot","colorBy":"Annt1"}'],
			O: ["false", "variable"],
			M: "Data Point Attributes",
			T: "option",
			C: "Name of a variable annotation or a sample name or the string 'variable' to color the variables.",
			D: "false",
			X: "getXZData"
		},
		randomNetworkNodeEdgesMax: {
			M: "Random",
			T: "integer",
			C: "Default number of maximum edges when creating random networks",
			D: "5",
			U: {
				Network: "true"
			}
		},
		scaleTextConstantAdd: {
			Z: "true",
			M: "Text",
			T: "float",
			C: "Constants to autoscale text (extra)",
			D: "2.5"
		},
		randomSeed: {
			M: "Random",
			T: "integer",
			C: "Specifies the random seed number to create pseudo random numbers",
			D: "8"
		},
		outlineByData: {
			H: ['{"data":"MultidimensionalHeatmap","outlineByData":"data2","outlineBy":"Data Outline"}'],
			S: ["outlineBy"],
			M: "Data Point Attributes",
			T: "string",
			C: "String that identify the object containing a two dimensional array with values used to color the outline data points when drawing a multidimensional Heatmap. It must be located within the data.y object (for example: data.y.data4)",
			D: "false",
			U: {
				Heatmap: "true"
			}
		},
		transformBase: {
			H: ["{*}"],
			O: ["2", "10"],
			M: "Data",
			T: "integer",
			C: "Default log or exponential transformation.",
			D: "2"
		},
		centerData: {
			H: ['{"graphType":"Heatmap","centerData":true,"functions":["clusterSamples","clusterVariables"]}', '{"graphType":"Heatmap","centerData":false,"functions":["clusterSamples","clusterVariables"]}'],
			S: ["distance", "linkage", "clusterAxis", "imputeMethod", "clusterSamples", "clusterVariables"],
			M: "Clustering",
			T: "boolean",
			C: "Flag to indicate whether to center data when clustering",
			D: "false"
		},
		missingDataColor: {
			H: ['{*,"data":"Random:10:10::::::0.15","graphType":"Heatmap"}'],
			M: "Data",
			T: "color",
			C: "Color for the missing data",
			D: "rgb(255,255,0)"
		},
		patternByData: {
			H: ['{"data":"MultidimensionalHeatmap","patternByData":"data2","patternBy":"Data Outline"}'],
			S: ["patternBy"],
			M: "Data Point Attributes",
			T: "string",
			C: "String that identify the object containing a two dimensional array with values used to pattern the data points when drawing a multidimensional Heatmap. It must be located within the data.y object (for example: data.y.data4)",
			D: "false",
			U: {
				Heatmap: "true"
			}
		},
		offsetX: {
			Z: "true",
			M: "Combination Plots",
			T: "float",
			C: "Additional amount to move for the X axis"
		},
		videoAutoplay: {
			H: ['{*,"backgroundType":"video","backgroundVideo":["http://video-js.zencoder.com/oceans-clip.mp4", "http://video-js.zencoder.com/oceans-clip.webm"]}'],
			M: "Videos",
			T: "boolean",
			C: "Flag to autoplay videos default true"
		},
		rAxisAbsMin: {
			Z: "true",
			M: "R-Axis",
			T: "float",
			C: "Minimum non-filtered value for the data plotted in the R axis"
		},
		zAxisTickStyle: {
			H: ['{*,"graphType":"Scatter3D"}'],
			O: ["solid", "dotted"],
			M: "Z-Axis",
			T: "option",
			C: "Style for the tick lines in the Z axis",
			D: "solid"
		},
		showNodeNameThreshold: {
			H: ['{"data":"LesMiserables","showNodeNameThreshold":50,"colorNodeBy":"group"}', '{"data":"LesMiserables","showNodeNameThreshold":100,"colorNodeBy":"group"}'],
			M: "Network Graphs",
			T: "integer",
			C: "Thereshold used to set the limit to hide or display the name of nodes in a network. If the number of nodes exceed this thereshold then the name will not be shown.",
			D: "50"
		},
		arcSegmentsSeparation: {
			H: ['{*,"data":"Circular","segregateSamplesBy":"Segment"}'],
			M: "Circular Graphs",
			T: "integer",
			C: "Number of degrees to separate the segments in the circular plots",
			D: "8"
		},
		sizeByData: {
			H: ['{"data":"MultidimensionalHeatmap","sizeByData":"data3","sizeBy":"Data Size"}'],
			S: ["sizeBy"],
			M: "Data Point Attributes",
			T: "string",
			C: "String that identify the object containing a two dimensional array with values used to size data points when drawing a multidimensional Heatmap. It must be located within the data.y object (for example: data.y.data3)",
			D: "false",
			U: {
				Heatmap: "true"
			}
		},
		transformAxis: {
			H: ["{*}"],
			O: ["samples", "variables"],
			M: "Data",
			T: "option",
			C: "Default axis to use to transform the data.",
			D: "samples"
		},
		isSelectDataPoints: {
			Z: "true",
			M: "Scatter Plots",
			T: "integer",
			C: "Number of selected data points (in the data object).",
			D: "0"
		},
		randomDataSampleAnnotations: {
			M: "Random",
			T: "integer",
			C: "Default number of sample annotations when creating random data",
			D: "3"
		},
		smpLabelRotate: {
			H: ['{"smpLabelRotate":0}', '{"smpLabelRotate":-45}', '{"smpLabelRotate":90}'],
			M: "Samples",
			T: "integer",
			C: "Rotation for sample labels in degrees. It could be positive or negative.",
			D: "0"
		},
		randomDataUniform: {
			M: "Random",
			T: "boolean",
			C: "Flag to create or not uniform random data for debug and demonstration purposes",
			D: "false"
		},
		resizerWidth: {
			M: "Axis Resizer",
			T: "integer",
			C: "Length in pixels for the width of the visible axis resizer",
			D: "50"
		},
		showNetworkRadialLayout: {
			H: ['{*,"data":"NetworkRadial","networkLayoutType":"radial"}'],
			M: "Network Graphs",
			T: "boolean",
			C: "Flag to show or not a radial layout wire.",
			D: "false"
		},
		infoTimeOut: {
			H: ["{*}"],
			M: "Events",
			T: "integer",
			C: "Time in milliseconds to wait between updates for the mouse over info to show up",
			D: "3000"
		},
		overlayFont: {
			Z: "true",
			M: "Overlays",
			T: "font",
			C: "Font for the overlays in one dimensional plots"
		},
		filterSkipNullValues: {
			M: "Data Filters",
			T: "boolean",
			C: "Flag to indicate to bypass filtering when a value is null",
			D: "false"
		},
		setMinY: {
			H: ['{"graphType":"Scatter2D","setMinY":15}', '{"graphType":"Scatter2D","setMinY":30}', '{"graphType":"Scatter2D","setMinY":null}'],
			M: "Y-Axis",
			T: "float",
			C: "Minimum value to set the data in the Y axis",
			D: "null"
		},
		showNetworkEdgesLegend: {
			H: ['{*,"data":"NetworkBasic","calculateLayout":false}'],
			M: "Network Graphs",
			T: "boolean",
			C: "Flag to show edge legends in the networks",
			D: "true"
		},
		alignConfiguratorExamples: {
			H: ["{*}"],
			M: "Events",
			T: "boolean",
			C: "Flag to align examples to the configurator",
			D: "false"
		},
		featureDirColor: {
			H: ["{*}"],
			M: "Genome Browser",
			T: "color",
			C: "Default color for the strand direction of the feature in the genome browser",
			D: "rgb(0,0,0)"
		},
		filterNodeBy: {
			M: "Network Graphs",
			T: "filter",
			C: "Filter nodes by their properties used in network graphs",
			D: "[]",
			X: "getNodeData"
		},
		panningGlobalY: {
			Z: "true",
			M: "Zooming and Panning",
			T: "float",
			C: "Cumulative number of unit to pan the network in the Y dimension"
		},
		featureHeightDefault: {
			M: "Genome Browser",
			T: "integer",
			C: "Default size in pixels of the feature height",
			D: "14"
		},
		zAxisTicks: {
			Z: "true",
			M: "Z-Axis",
			T: "integer",
			C: "Number of ticks in the Z axis",
			D: "10"
		},
		invertGraph: {
			M: "General",
			T: "boolean",
			C: "Flag to invert horizontal one dimensional graph toplot from right to left",
			D: "false"
		},
		remoteIds: {
			Z: "true",
			M: "Remote Procedures",
			T: "array",
			C: "Array of the remoteIds passed after a service call"
		},
		freezeColLeft: {
			M: "Data Table",
			T: "integer",
			C: "Number of columns to freeze in the left side of the data table",
			D: "0"
		},
		yAxisTickFormat: {
			H: ['{"graphType":"Scatter2D","yAxisTickFormat":"%.2f cxs"}'],
			M: "Y-Axis",
			T: "string",
			C: "Format for the tick values in the Y axis",
			D: "false"
		},
		isGroupedData: {
			Z: "true",
			M: "Data",
			T: "boolean",
			C: "Flag to indicate if the data is grouped."
		},
		vennLegendColors: {
			H: ["{*}"],
			M: "Venn Diagrams",
			T: "boolean",
			C: "Flag to use the venn colors to use for the legends instead of the letters",
			D: "false"
		},
		zoomGlobal: {
			Z: "true",
			M: "Zooming and Panning",
			T: "float",
			C: "Cumulative zoom factor for the networks."
		},
		decorationsType: {
			H: ['{*,"data":"NetworkDecorations","decorationsPosition":"top","networkFreezeOnLoad":true,"showDecorations":true,"calculateLayout":false,"conditional":{"decorations":[["exp1","exp2","exp3"],["exp1","exp2","exp3"],["exp4","exp5"],["exp4","exp5"],["exp4","exp5"]]}}'],
			O: ["pie", "bar", "heatmap", "stacked", "stackedpercent"],
			M: "Decorations",
			T: "option",
			C: "Type for the decorations in the networks. The types stacked and stackedpercent must be two dimensional. Heatmap could be one or two dimensional",
			D: "bar",
			U: {
				Network: "true"
			}
		},
		showVersion: {
			M: "Debug",
			T: "boolean",
			C: "Flag to show version when mouse over top-left corner of the canvas.",
			D: "true"
		},
		networkDepth: {
			Z: "true",
			M: "Network Graphs",
			T: "integer",
			C: "Depth of the radial network."
		},
		showHiddenChildEdges: {
			H: ["{*}"],
			M: "Network Graphs",
			T: "boolean",
			C: "Flag to show or not children nodes when the parent node is hidden.",
			D: "true"
		},
		randomDataSigma: {
			M: "Random",
			T: "integer",
			C: "Sigma value when creating random data",
			D: "50"
		},
		resizeWidthOnLayout: {
			H: ["{*}"],
			M: "Events",
			T: "boolean",
			C: "Flag to enable resizing the width of the canvas after changing the layout",
			D: "true"
		},
		nodeConfigurableProperties: {
			M: "Network Graphs",
			T: "array",
			C: "Node configurable properties",
			N: "x:[float];X coordinate;[],y:[float];Y coordinate;[],z:[float];Z coordinate;[],parentNode:[string];Id of parent node;[],shape:[string];Shape for the node. One of the ones defined in shapes;[shapes],color:[color];Color for the node;[],outline:[color];Color for the outline of the node;[],pattern:[open|closed];Whether to draw a solid shape or just an outline;[],rotate:[integer];Number of degrees to rotate the shape;[],outlineWidth:[integer];Pixels used to raw the outline of the node;[],imagePath:[url];Url for the node image;[],zIndex:[integer];Css property for the imagePath;[],eventless:[boolean];Flag to disable all events in the node;[overrideEventlessNodes],hide:[boolean];Flag to hide the node;[],hideLabel:[boolean];Flag to hide the label node;[],anchor:[boolean];Flag make the node transparent;[]",
			D: ["'x'", "'y'", "'z'", "'shape'", "'color'", "'outline'", "'size'", "'width'", "'height'", "'pattern'", "'rotate'", "'outlineWidth'", "'imagePath'", "'zIndex'", "'eventless'"]
		},
		zoomStep: {
			H: ['{*,"graphType":"Heatmap"}'],
			M: "Zooming and Panning",
			T: "float",
			C: "Percentage step for zooming networks and genome panel.",
			D: "0.2"
		},
		axisTitleScaleFontFactor: {
			H: ["{*}"],
			M: "Axis",
			T: "float",
			C: "Scaling factor used to increase or decrease title font size in the canvas in one and two dimensional plots",
			D: "1"
		},
		zAxisExact: {
			H: ['{*,"graphType":"Scatter3D"}'],
			M: "Z-Axis",
			T: "boolean",
			C: "Flag to force exact values for the data in the Z axis",
			D: "false"
		},
		featureSignalToNoiseValues: {
			H: ["{*}"],
			M: "Genome Browser",
			T: "boolean",
			C: "Flag use to show values for the quality",
			D: "false"
		},
		showNetworkTextLegend: {
			H: ['{*,"data":"NetworkBasic","calculateLayout":false}'],
			M: "Network Graphs",
			T: "boolean",
			C: "Flag to show node legends in the networks",
			D: "true"
		},
		overlaysThickness: {
			H: ['{*,"graphType":"Heatmap","data":"Random:10:10:3:3","varOverlays":["Annt1","Annt2","Annt3"],"smpOverlays":["Factor1","Factor2","Factor3"]}'],
			M: "Overlays",
			T: "integer",
			C: "Length in pixels of the thickness for the colored boxes to classify samples and or variables in one dimensional plots",
			D: "30"
		},
		showIndicators: {
			H: ['{*,"data":"Random:16:4:0:0","colorBy":"Sample4","graphType":"Scatter3D"}'],
			M: "Indicators",
			T: "boolean",
			C: "Flag to show color, shape and size indicators in several visualizations",
			D: "true"
		},
		createHistogram: {
			O: ["x", "y"],
			M: "Functions",
			T: "option",
			C: "Create a histogram in 2D-Scatter plots in the 'x' axis or the 'y' axis @advanced",
			U: {
				Scatter3D: "true",
				ScatterBubble2D: "true",
				Scatter2D: "true"
			}
		},
		sma20Color: {
			H: ['{*,"stockIndicators":["Sma20"]}'],
			M: "Candlestick Plots",
			T: "color",
			C: "The color for the 25 day single moving average",
			D: "rgb(0,0,255)"
		},
		smpHairlineColor: {
			H: ['{*,"graphType":"Bar","smpHairline":true}'],
			M: "Plot area",
			T: "color",
			C: "The color for the thin line that appears in the middle of the bar graphs",
			D: "rgb(204,204,204)"
		},
		axisTitleFont: {
			Z: "true",
			M: "Axis",
			T: "font",
			C: "Font for the axis titles in one and two dimensional plots"
		},
		functions: {
			Z: "true",
			M: "General",
			T: "array",
			C: "Functions exposed to the api"
		},
		decorationsProperties: {
			H: ['{"data":"NetworkDecorations","decorationsPosition":"top","networkFreezeOnLoad":true,"showDecorations":true,"calculateLayout":false,"decorations":["exp1","exp2","exp3"],"decorationsProperties":{"exp1":{"color":"rgb(51,125,255)","shape":"square"},"exp2":{"color":"rgb(125,255,51)","shape":"square"},"exp2":{"color":"rgb(255,125,51)","shape":"square"}}}'],
			M: "Decorations",
			T: "object",
			C: "Object to assign properties like color for the network decorations",
			D: "{}",
			U: {
				Network: "true"
			}
		},
		ratioLevelReference: {
			M: "Data",
			T: "option",
			C: "Name of the level used in ratio transformation. @default"
		},
		rAxisMaxStrLength: {
			Z: "true",
			M: "R-Axis",
			T: "string",
			C: "Longest string of all the values in the ticks in the R axis"
		},
		showAnimationFont: {
			Z: "true",
			M: "Animation",
			T: "font",
			C: "Font for the text in animations"
		},
		isOncoprint: {
			H: ['{*,"data":"MultidimensionalHeatmap"}'],
			M: "Heatmap Graphs",
			T: "boolean",
			C: "Flag to draw an oncoprint heatmap",
			D: "false"
		},
		videoPoster: {
			H: ['{*,"backgroundType":"video","backgroundVideo":["http://video-js.zencoder.com/oceans-clip.mp4", "http://video-js.zencoder.com/oceans-clip.webm"]}'],
			M: "Videos",
			T: "url",
			C: "Video poster for videos @default"
		},
		nodeFontSize: {
			H: ["{*}"],
			M: "Network Graphs",
			T: "integer",
			C: "Size in pixels for the font size of text in the networks",
			D: "20"
		},
		sortSamplesByVariable: {
			S: ["sortDir", "sortSamplesByCategory"],
			M: "Functions",
			T: "array",
			C: "Sort the samples by the value of a variable",
			X: "getVariablesAsArray",
			U: {
				StackedPercent: "true",
				Boxplot: "true",
				DotLine: "true",
				Bar: "true",
				Correletion: "true",
				StackedPercentLine: "true",
				Pie: "true",
				Barline: "true",
				Area: "true",
				StackedLine: "true",
				Line: "true",
				Dotplot: "true",
				AreaLine: "true",
				Heatmap: "true",
				Stacked: "true"
			}
		},
		resizerBackgroundImage: {
			M: "Axis Resizer",
			T: "url",
			C: "Resizer background image",
			D: "false"
		},
		sizeDecorationBy: {
			M: "Network Graphs",
			T: "string",
			C: "Name of the attribute to size the network decoration.",
			D: "false"
		},
		setSkin: {
			O: ["blue", "grey"],
			M: "Functions",
			T: "option",
			C: "Change the skin of the application"
		},
		trackConfigurableProperties: {
			H: ["{*}"],
			M: "Genome Browser",
			T: "array",
			C: "Track configurable properties",
			D: ["'name'", "'hideName'", "'hideFeatureNames'", "'type'", "'height'", "'fill'", "'outline'", "'data'", "'hide'", "'connect'", "'subtracksMax'", "'highlight'"],
			G: "name:[string];Track name;[]"
		},
		xAxisTickColor: {
			H: ["{*}"],
			M: "X-Axis",
			T: "color",
			C: "Color for the tick lines in the X axis",
			D: "rgb(204,204,204)"
		},
		yAxisTickColor: {
			H: ['{*,"graphType":"Scatter2D"}'],
			M: "Y-Axis",
			T: "color",
			C: "Color for the tick lines in the Y axis",
			D: "rgb(204,204,204)",
			U: {
				Scatter3D: "true",
				ScatterBubble2D: "true",
				Correlation: "true",
				Scatter2D: "true"
			}
		},
		isAnimation: {
			Z: "true",
			M: "Snapshots",
			T: "boolean",
			C: "Flag to indicate if there is an active animation"
		},
		pieSegmentPrecision: {
			H: ["{*}"],
			M: "Pie Charts",
			T: "integer",
			C: "Number of decimals for values in the Pie charts",
			D: "0"
		},
		layoutMulticolor: {
			H: ["{*}"],
			M: "Combination Plots",
			T: "boolean",
			C: "Flag to cycle colors when displaying multiple graps in the canvas. If set to false the color will be reseted for every graph.",
			D: "true"
		},
		disableToolbar: {
			H: ["{*}"],
			M: "Events",
			T: "boolean",
			C: "Flag to disable showing the toolbar",
			D: "false"
		},
		decorationScaleFontFactor: {
			H: ['{*,"showDecorations":true,"graphType":"Scatter2D","data":"Random:16:2:0:0","functions":["addNormalDistributionLine", "draw"]}'],
			M: "Decorations",
			T: "float",
			C: "Scaling factor used to increase or decrease decoration font size in the canvas.",
			D: "1"
		},
		boxPlotOutliersRatio: {
			H: ['{"data":"Boxplot","boxPlotOutliersRatio":8,"functions":["groupSamples:Factor1"]}', '{"data":"Boxplot","boxPlotOutliersRatio":10,"functions":["groupSamples:Factor1"]}'],
			M: "Boxplot Graphs",
			T: "integer",
			C: "Ratio for the size of the outliers with respect to boxplot",
			D: "8"
		},
		panningY: {
			H: ["{*}"],
			M: "Zooming and Panning",
			T: "float",
			C: "Number of unit to pan the network in the Y dimension",
			D: "0"
		},
		errorBarsType: {
			H: ['{"errorBarsType":"standardDeviation","functions":["groupSamples:Factor1"]}', '{"errorBarsType":"standardErrorMean","functions":["groupSamples:Factor1"]}', '{"errorBarsType":"confidenceInterval95","functions":["groupSamples:Factor1"]}'],
			O: ["standardDeviation", "standardErrorMean", "confidenceInterval95"],
			M: "Data",
			T: "option",
			C: "Type of error bars.",
			D: "confidenceInterval95"
		},
		useFlashIE: {
			M: "General",
			T: "boolean",
			C: "Flag to use flash rather than VML (through excanvas.js) when graphs are displayed in IE browsers (not HTML5 compliant). For developers only.",
			D: "true"
		},
		randomDataMean: {
			M: "Random",
			T: "integer",
			C: "Mean value when creating random data",
			D: "100"
		},
		transpose: {
			M: "Functions",
			T: "void",
			C: "Transpose the data. It takes no parameters",
			U: {
				StackedPercent: "true",
				Boxplot: "true",
				Bar: "true",
				StackedPercentLine: "true",
				Area: "true",
				Line: "true",
				StackedLine: "true",
				Dotplot: "true",
				AreaLine: "true",
				Heatmap: "true",
				Stacked: "true"
			}
		},
		smpLabelScaleFontFactor: {
			H: ["{*}"],
			M: "Samples",
			T: "float",
			C: "Scaling factor used to increase or decrease sample label font size in the canvas.",
			D: "1"
		},
		circularLetterSeparationFactor: {
			H: ['{*,"data":"Circular","segregateSamplesBy":"Segment"}'],
			M: "Circular Graphs",
			T: "float",
			C: "Factor to adjust the spacing between letters in the circular graphs. The greater the number the closer the letters in the labels",
			D: "2"
		},
		debug: {
			M: "Debug",
			T: "boolean",
			C: "Flag to turn on alerts.",
			D: "false"
		},
		patternNames: {
			S: ["patternImages", "patterns"],
			M: "Patterns",
			T: "array",
			C: "Pattern names used in visualizations to fill objects. This array must have the same length as that one for the pattern images."
		},
		citation: {
			S: ["citationColor"],
			H: ['{"citation":"Graph citation or reference"}'],
			M: "Citations or References",
			T: "string",
			C: "A reference citation of the graph which is placed at the bottom right corner",
			D: "false"
		},
		smpSort: {
			Z: "true",
			M: "Data",
			T: "integer",
			C: "Sample index used in sorting the data."
		},
		resizerBackgroundColorOutlineCurrent: {
			M: "Axis Resizer",
			T: "color",
			C: "Color for the div that shows up the current area selected in the axes in the canvas",
			D: "rgb(59,138,229)"
		},
		showAnimation: {
			H: ["{*}"],
			M: "Animation",
			T: "boolean",
			C: "Flag to show or not animation for the graphs",
			D: "false"
		},
		yAxisMajorTicks: {
			H: ["{*}"],
			M: "Y-Axis",
			T: "boolean",
			C: "A flag to show major tick lines in the Y axis",
			D: "true"
		},
		networkFreezeOnLoad: {
			H: ['{*,"data":"NetworkBasic","calculateLayout":false}'],
			M: "Network Graphs",
			T: "boolean",
			C: "Flag to prevent autoscaling for the network layout after loading. Useful when images are part of the network.",
			D: "false"
		},
		layoutTime: {
			H: ["{*}"],
			M: "Network Graphs",
			T: "integer",
			C: "Time in milliseconds used to calculate the layout for the network",
			D: "15"
		},
		xAxisAbsMax: {
			Z: "true",
			M: "X-Axis",
			T: "float",
			C: "Maximum non-filtered value for the data plotted in the X axis"
		},
		isLogData: {
			H: ["{*}"],
			M: "Data",
			T: "boolean",
			C: "Flag to indicate if the data is Log transformed.",
			D: "false"
		},
		tension: {
			H: ['{*,"data":"Random:4:6","graphType":"Line","lineType":"spline"}'],
			M: "Line Graphs",
			T: "float",
			C: "Curvature for the splines",
			D: "0.3"
		},
		networkStackIndex: {
			Z: "true",
			M: "Network Graphs",
			T: "integer",
			C: "Index in the network stack for undo and redo operations"
		},
		axisTickColor: {
			H: ["{*}"],
			M: "Axis",
			T: "color",
			C: "Color for the axis ticks in one and two dimensional plots",
			D: "rgb(0,0,0)"
		},
		resizerBackgroundColor: {
			M: "Axis Resizer",
			T: "color",
			C: "Color for the div that shows up when resizing the axes in the canvas or the whole canvas",
			D: "rgba(204,204,204,0.7)"
		},
		groupSamples: {
			S: ["ungroupSamples"],
			M: "Functions",
			T: "array",
			C: "Group samples based on a sample category (data.x object)",
			X: "getXData",
			U: {
				StackedPercent: "true",
				Boxplot: "true",
				DotLine: "true",
				Bar: "true",
				Correletion: "true",
				StackedPercentLine: "true",
				Pie: "true",
				Barline: "true",
				Area: "true",
				StackedLine: "true",
				Line: "true",
				Dotplot: "true",
				AreaLine: "true",
				Heatmap: "true",
				Stacked: "true"
			}
		},
		zRotate: {
			H: ['{"graphType":"Scatter3D","zRotate":0}', '{"graphType":"Scatter3D","zRotate":45}'],
			M: "3D Attributes",
			T: "float",
			C: "Starting number of degrees to rotate graph arround the Z axis",
			D: "0"
		},
		xAxisMajorTicks: {
			H: ["{*}"],
			M: "X-Axis",
			T: "boolean",
			C: "A flag to show major tick lines in the X axis",
			D: "true"
		},
		remoteDirection: {
			O: ["next", "prev"],
			M: "Remote Procedures",
			T: "option",
			C: "Direction parameter used to obtain data remotely.",
			D: "next"
		},
		featureWidthDefault: {
			M: "Genome Browser",
			T: "integer",
			C: "Default size in pixels of the feature width",
			D: "3"
		},
		skinPropertiesBlue: {
			Z: "true",
			H: ["{*}"],
			M: "Skins",
			T: "array",
			C: "Values for the blue skin",
			D: "[]"
		},
		rAxisShow: {
			H: ['{*,"data":"Circular2","rAxis":"Number","segregateVariablesBy":"Ring","segregateSamplesBy":"Segment"}'],
			M: "R-Axis",
			T: "boolean",
			C: "Flag to show on not the values of the ticks in the R axis",
			D: "true"
		},
		showVariableNames: {
			H: ["{*}"],
			M: "Variables",
			T: "boolean",
			C: "Flag to show the variable names in one dimensional plots",
			D: "true",
			U: {
				Heatmap: "true"
			}
		},
		decorationFontSize: {
			H: ['{*,"autoScaleFont":false,"showDecorations":true,"graphType":"Scatter2D","data":"Random:16:2:0:0","functions":["addNormalDistributionLine", "draw"]}'],
			M: "Decorations",
			T: "integer",
			C: "Font size for the decorations in scatter plots and network graphs",
			D: "10"
		},
		infoStartTime: {
			Z: "true",
			M: "Events",
			T: "time",
			C: "Time in milliseconds to keep track of time"
		},
		fontSize: {
			H: ['{*,"title":"Graph Title"}'],
			M: "Text",
			T: "integer",
			C: "Font size for text in complex plot only. See other categories to modify specific font sizes.",
			D: "12"
		},
		connectByData: {
			Z: "true",
			M: "Data Point Attributes",
			T: "object",
			C: "Object with connectBy data",
			D: "{}"
		},
		filterType: {
			O: ["and", "or"],
			M: "Data Filters",
			T: "option",
			C: "Type for the filter. Can be 'and' or 'or'",
			D: "and"
		},
		imageDir: {
			M: "Images",
			T: "url",
			C: "Relative path to a directory containing images. If not specified it will be the root location of the CanvasXpress library script under the directory images",
			D: "false"
		},
		animationTime: {
			M: "Animation",
			T: "integer",
			C: "Time in milliseconds to wait between rendering the plot when showing the animation.",
			D: "30"
		},
		layoutMaxVarLegend: {
			Z: "true",
			M: "Combination Plots",
			T: "integer",
			C: "Maximum length of legend when multiple graphs are displayed in the canvas."
		},
		resizable: {
			H: ["{*}"],
			M: "Events",
			T: "boolean",
			C: "Flag to disable resizing the canvas by dragging the mouse over the edges",
			D: "true"
		},
		attractiveForceFunction: {
			H: ['{*,"data":"LesMiserables","networkLayoutType":"forceDirected","colorNodeBy":"group"}'],
			O: ["Eades", "FruchtermanReingold"],
			M: "Network Graphs",
			T: "option",
			C: "Type of function to apply when calculating attractive force in forceDirected network layouts",
			D: "FruchtermanReingold"
		},
		rotationStep: {
			H: ['{*,"graphType":"Scatter3D","data":"3DScatter"}'],
			M: "3D Attributes",
			T: "integer",
			C: "Number of degrees used when the plot is automatically rotated",
			D: "2"
		},
		xAxis2Ticks: {
			Z: "true",
			M: "X-Axis2",
			T: "integer",
			C: "Number of ticks in the 2nd X axis. It is the same as xAxisTicks.",
			D: "5"
		},
		layoutCurrent: {
			Z: "true",
			M: "Combination Plots",
			T: "integer",
			C: "Integer to identify the current graph being displayed in the canvas."
		},
		graphType: {
			H: ['{*,"graphOrientation":"vertical"}'],
			O: ["Bar", "Line", "Area", "AreaLine", "BarLine", "Boxplot", "Dotplot", "DotLine", "Heatmap", "Candlestick", "Stacked", "StackedLine", "StackedPercent", "StackedPercentLine", "Treemap", "TagCloud", "Scatter2D", "ScatterBubble2D", "Scatter3D", "Correlation", "Pie", "Venn", "Network", "Genome", "Circular"],
			M: "General",
			T: "option",
			C: "Specifies the type of graph.",
			D: "Bar"
		},
		distance: {
			H: ['{"graphType":"Heatmap","distance":"euclidian","functions":["clusterSamples","clusterVariables"]}', '{"graphType":"Heatmap","distance":"manhattan","functions":["clusterSamples","clusterVariables"]}', '{"graphType":"Heatmap","distance":"max","functions":["clusterSamples","clusterVariables"]}'],
			S: ["linkage", "clusterAxis", "centerData", "clusterSamples", "clusterVariables"],
			O: ["euclidian", "manhattan", "max"],
			M: "Clustering",
			T: "option",
			C: "Distance metric to use when clustering data.",
			D: "euclidian"
		},
		featureSignalToNoiseShow: {
			H: ["{*}"],
			M: "Genome Browser",
			T: "boolean",
			C: "Flag use to show quality",
			D: "true"
		},
		remoteUpdateDelay: {
			M: "Remote Procedures",
			T: "integer",
			C: "Time in milliseconds to wait between tryig to get an upated version of the file containing the data",
			D: "10000"
		},
		layout: {
			H: ["{*}"],
			M: "Combination Plots",
			T: "string",
			C: "Topology of the canvas. Number of rows and columns.",
			D: "1X1"
		},
		marginBottom: {
			H: ["{*}"],
			M: "Margins",
			T: "integer",
			C: "Specifies the length in pixels for the bottom margin in the canvas.",
			D: "20"
		},
		filterEdgeBy: {
			M: "Network Graphs",
			T: "filter",
			C: "Filter edges by their properties used in network graphs",
			D: "[]",
			X: "getEdgeData"
		},
		showPieValues: {
			H: ["{*}"],
			M: "Pie Charts",
			T: "boolean",
			C: "A flag to show the values for the pie",
			D: "true"
		},
		showDecorationsKaplanMeyerConfidence: {
			S: ["decorations"],
			H: ['{*,"showDecorations":true,"graphType":"Scatter2D","data":"KaplanMeyer","showLegend":false,"title":"Kaplan-Meyer Plot","functions":["addKaplanMeyerCurve:Time:Censored-1:Data 1 Population:rgb(0,0,255)","addKaplanMeyerCurve:Time:Censored-2:Data 2 Population:rgb(255,0,0)","draw"]}'],
			M: "Decorations",
			T: "boolean",
			C: "Flag to show or not the confidence intervals in the Kaplan-Meyer plots",
			D: "false"
		},
		smpTitleFontSize: {
			H: ['{"smpTitle":"Sample Title","autoScaleFont":false,"smpTitleFontSize":10}', '{"smpTitle":"Sample Title","autoScaleFont":false,"smpTitleFontSize":20}'],
			M: "Samples",
			T: "integer",
			C: "Size for the sample title in one dimensional plots",
			D: "10"
		},
		subtitleFontStyle: {
			H: ['{*,"title":"Graph Title","subtitle":"Graph Subtitle"}'],
			O: ["", "bold", "italic", "bold italic"],
			M: "Titles and Subtitles",
			T: "option",
			C: "Font style for the title. @default"
		},
		edgeConfigurableProperties: {
			M: "Network Graphs",
			T: "array",
			C: "Edge configurable properties",
			D: ["'width'", "'cap'", "'exact'", "'type'"],
			E: "color:[color];Color for the edge;[],width:[integer];Pixel width for the edges between nodes;[],cap:[butt|round|square];Type of cap for the end of the lines;[capType],exact:[boolean];Flag to indicate to create the edge between nodes without subtracting the size of the nodes;[],type:[string];Type of line use to join the nodes;[lines],hide:[boolean];Flag to hide the edge;[],anchor:[boolean];Flag make the edge transparent;[]"
		},
		showDOEData: {
			M: "DOE",
			T: "boolean",
			C: "Flag to plot the original data in the DOE",
			D: "true"
		},
		zoomSamplesDisable: {
			H: ['{*,"graphType":"Heatmap"}'],
			S: ["zoomVariablesDisable"],
			M: "Zooming and Panning",
			T: "boolean",
			C: "Flag to disable zooming of samples with mouse wheel in Heatmaps",
			D: "false"
		},
		decorationsColor: {
			H: ['{*,"showDecorations":true,"graphType":"Scatter2D","data":"Random:16:2:0:0","functions":["addNormalDistributionLine", "draw"]}'],
			M: "Decorations",
			T: "color",
			C: "Color for the decorations in scatter plots and network graphs",
			D: "rgb(0,0,0)"
		},
		sequenceUColor: {
			H: ["{*}"],
			M: "Genome Browser",
			T: "color",
			C: "Color for the uracils in the genome browser",
			D: "rgb(255,0,0)"
		},
		freezeRowTop: {
			M: "Data Table",
			T: "integer",
			C: "Number of rows to freeze at the top of the data table",
			D: "0"
		},
		trackDirColor: {
			H: ["{*}"],
			M: "Genome Browser",
			T: "color",
			C: "Default color for the strand direction of the tracks in the genome browser",
			D: "rgb(0,0,0)"
		},
		nodeHighlightColor: {
			H: ['{*,"highlightNode":["Gene1","Gene2"]}'],
			M: "Network Graphs",
			T: "color",
			C: "The color for the highlighted nodes.",
			D: "rgb(255,0,0)"
		},
		oddColor: {
			S: ["blockContrast", "evenColor"],
			H: ['{*,"data":"Random:1:6:0:0","blockContrast":true}'],
			M: "Colors",
			T: "color",
			C: "The color for the odd numbers in samples when the property block contrast is set in one dimensional plots or the color for odd number residues in translations in genome plots.",
			D: "rgb(255,255,255)"
		},
		capType: {
			H: ['{*,"data":"Lines","calculateLayout":false,"graphType":"Network"}'],
			O: ["butt", "round", "square"],
			M: "Lines",
			T: "option",
			C: "Default type of cap for lines.",
			D: "butt"
		},
		patternImages: {
			S: ["patternNames", "patterns"],
			M: "Patterns",
			T: "array",
			C: "Image patterns used in visualizations to fill objects. This array must have the same length as that one for the pattern names."
		},
		showAnimationFontColor: {
			M: "Animation",
			T: "color",
			C: "Color for the animation text",
			D: "rgb(255,255,255)"
		},
		patternBy: {
			S: ["patternByData"],
			O: ["false", "variable"],
			T: "option",
			X: "getXZData",
			H: ['{"graphType":"Scatter3D","patternBy":"Annt1"}', '{"graphType":"Dotplot","patternBy":"Factor1"}', '{"graphType":"Dotplot","patternBy":"variable"}'],
			M: "Data Point Attributes",
			D: "false",
			C: "Name of a variable annotation or a sample name or the string 'variable' to pattern the variables. When patternByData is specified patternBy is used for the title in the legend."
		},
		canvasBox: {
			S: ["canvasBoxColor"],
			H: ["{*}"],
			M: "General",
			T: "boolean",
			C: "Flag to create a box around the canvas",
			D: "true"
		},
		updateCodeDiv: {
			M: "Functions",
			T: "void",
			C: "Update the code to generate the plot @advanced"
		},
		videoGridStep: {
			H: ['{*,"backgroundType":"video","backgroundVideo":["http://video-js.zencoder.com/oceans-clip.mp4", "http://video-js.zencoder.com/oceans-clip.webm"]}'],
			M: "Videos",
			T: "integer",
			C: "Number of steps to divide the grid in the video",
			D: "10"
		},
		rAxisTicks: {
			H: ['{*,"data":"Circular2","rAxis":"Number","segregateVariablesBy":"Ring","segregateSamplesBy":"Segment"}'],
			M: "R-Axis",
			T: "integer",
			C: "Number of ticks in the R axis",
			D: "5"
		},
		sortVariablesBySample: {
			S: ["sortDir", "sortVariablesByCategory"],
			M: "Functions",
			T: "array",
			C: "Sort the variables by the value of a sample",
			X: "getSamplesAsArray",
			U: {
				StackedPercent: "true",
				Boxplot: "true",
				DotLine: "true",
				Bar: "true",
				Correletion: "true",
				StackedPercentLine: "true",
				Pie: "true",
				Barline: "true",
				Area: "true",
				StackedLine: "true",
				Line: "true",
				Dotplot: "true",
				AreaLine: "true",
				Heatmap: "true",
				Stacked: "true"
			}
		},
		layoutWidth: {
			Z: "true",
			M: "Combination Plots",
			T: "float",
			C: "Width of the current segment of the canvas when there are multiple graphs."
		},
		histogramBarWidth: {
			S: ["scatterType", "isHistogram"],
			H: ['{*,"graphType":"Scatter2D","isHistogram":true}'],
			M: "Histograms",
			T: "float",
			C: "Length in pixels for half of the bar width in the 2D sccater plot histogram.",
			D: "0.5"
		},
		correlationAxis: {
			H: ["{*}"],
			O: ["samples", "variables"],
			M: "Correlation Graphs",
			T: "option",
			C: "Axis used for the correlation.",
			D: "samples"
		},
		shadowOffsetX: {
			S: ["showShadow"],
			H: ['{*,"showShadow":true}'],
			M: "Shadows",
			T: "integer",
			C: "Length in pixels for the shadow offset in the X axis.",
			D: "1"
		},
		xAxisTicks: {
			H: ["{*}"],
			M: "X-Axis",
			T: "integer",
			C: "Number of ticks in the X axis",
			D: "5"
		},
		sequenceZColor: {
			H: ["{*}"],
			M: "Genome Browser",
			T: "color",
			C: "Color for the glutamines in the genome browser",
			D: "rgb(0,0,0)"
		},
		skinProperties: {
			Z: "true",
			H: ["{*}"],
			M: "Skins",
			T: "array",
			C: "Properties for the skin",
			D: ["'skinBackgroundColor'", "'skinBorderColor'", "'skinColor'", "'skinShadowColor'"]
		},
		setMaxY: {
			H: ['{"graphType":"Scatter2D","setMaxY":200}', '{"graphType":"Scatter2D","setMaxY":50}', '{"graphType":"Scatter2D","setMaxY":null}'],
			M: "Y-Axis",
			T: "float",
			C: "Maximum value to set the data in the Y axis",
			D: "null"
		},
		ungroupSamples: {
			S: ["groupSamples"],
			M: "Functions",
			T: "void",
			C: "Ungroup samples previously grouped according to a sample category (data.x object)",
			U: {
				StackedPercent: "true",
				Boxplot: "true",
				DotLine: "true",
				Bar: "true",
				Correletion: "true",
				StackedPercentLine: "true",
				Pie: "true",
				Barline: "true",
				Area: "true",
				StackedLine: "true",
				Line: "true",
				Dotplot: "true",
				AreaLine: "true",
				Heatmap: "true",
				Stacked: "true"
			}
		},
		legendFontSize: {
			S: ["autoScaleFont", "legendScaleFontFactor"],
			H: ['{*,"autoScaleFont":false}'],
			M: "Legends",
			T: "integer",
			C: "Font size for the legends. Be aware that auto scaling font must be turned off for this property to take effect. A more convenient way to modify the size is to use the legend scaling factor",
			D: "10"
		},
		randomDataSamples: {
			M: "Random",
			T: "integer",
			C: "Default number of samples when creating random data",
			D: "12"
		},
		yAxisHistogramShow: {
			H: ['{*,"graphType":"Scatter2D"}'],
			M: "Y-Axis",
			T: "boolean",
			C: "Flag to indicate whether to show a histogram for the data in the Y axis",
			D: "false"
		},
		shapeByShape: {
			H: ["{*}"],
			O: ["false", "sphere", "square", "triangle", "star", "rhombus", "octagon", "oval", "plus", "minus", "mdavid"],
			M: "Data Point Attributes",
			T: "option",
			C: "String that identify the shape to use in regular and multidimensional heatmaps. shapeByData will take precedence over this property.",
			D: "false",
			U: {
				Heatmap: "true"
			}
		},
		indicatorHeight: {
			H: ['{*,"graphType":"Heatmap"}'],
			M: "Indicators",
			T: "integer",
			C: "Length in pixels for the heatmap indicator",
			D: "8"
		},
		marginLeft: {
			H: ["{*}"],
			M: "Margins",
			T: "integer",
			C: "Specifies the length in pixels for the left margin in the canvas.",
			D: "20"
		},
		layoutComb: {
			H: ["{*}"],
			M: "Combination Plots",
			T: "boolean",
			C: "Flag that identify that multiple graphs will be displayed in the canvas.",
			D: "false"
		},
		broadcast: {
			H: ["{*}"],
			M: "Events",
			T: "boolean",
			C: "Flag to enable broadcasting to other canvasXpress objects in the page",
			D: "false"
		},
		yAxisTitle: {
			H: ['{"graphType":"Scatter2D","yAxisTitle":"Y-axis title"}', '{"graphType":"Correlation","yAxisTitle":"Correlation Title"}'],
			M: "Y-Axis",
			T: "string",
			C: "Title for the Y axis in Scatter plots and in Correlation graphs.",
			D: "false",
			U: {
				Scatter3D: "true",
				ScatterBubble2D: "true",
				Correlation: "true",
				Scatter2D: "true"
			}
		},
		eventKeys: {
			H: ["{*}"],
			M: "Events",
			T: "boolean",
			C: "Flag to enable key binding events. This prevent some default browser shortcuts and it is system specific. Please see the Event section bellow.",
			D: "true"
		},
		yRotate: {
			H: ['{"graphType":"Scatter3D","yRotate":0}', '{"graphType":"Scatter3D","yRotate":45}'],
			M: "3D Attributes",
			T: "float",
			C: "Starting number of degrees to rotate graph arround the Y axis",
			D: "0"
		},
		rAxisLabelOrientation: {
			H: ['{*,"data":"Circular2","rAxis":"Number","segregateVariablesBy":"Ring","segregateSamplesBy":"Segment"}'],
			O: ["perpendicular", "circular"],
			M: "R-Axis",
			T: "option",
			C: "Orientation to show the ticks values in circular plots.",
			D: "perpendicular"
		},
		featureTraceTrim: {
			H: ["{*}"],
			M: "Genome Browser",
			T: "integer",
			C: "Default triming for nucleotide values in the traces (expressed in percent)",
			D: "1"
		},
		smpTitleFont: {
			Z: "true",
			M: "Samples",
			T: "font",
			C: "Font for the sample title in one dimensional plots"
		},
		sequenceCColor: {
			H: ["{*}"],
			M: "Genome Browser",
			T: "color",
			C: "Color for the cytosines and cysteins in the genome browser",
			D: "rgb(0,0,255)"
		},
		segregateVariablesBy: {
			H: ['{"data":"Random:3:2:3:0:0:1","segregateVariablesBy":"Annt3","smpLabelRotate":90,"smpLabelScaleFontFactor":0.5}'],
			O: ["false", "string"],
			M: "Data",
			T: "option",
			C: "String to indicate the annotation used to segregate the variables. It must be a category in the 'data.z' object",
			D: "false"
		},
		maxDOENumber: {
			M: "DOE",
			T: "integer",
			C: "Maximum number of graphs when creating a DOE.",
			D: "8"
		},
		yAxisMaxStrLength: {
			Z: "true",
			M: "Y-Axis",
			T: "string",
			C: "Longest string of all the values in the ticks in the Y axis"
		},
		showSmpDendrogram: {
			H: ['{*,"data":"Generic","graphType":"Heatmap"}'],
			M: "Dendrograms",
			T: "boolean",
			C: "Flag to show or not the sample dendrogram",
			D: "false"
		},
		showAdvancedConfiguration: {
			H: ["{*}"],
			M: "Events",
			T: "boolean",
			C: "Flag to show advanced configuration properties.",
			D: "false"
		},
		disableEvents: {
			H: ["{*}"],
			M: "Events",
			T: "boolean",
			C: "Flag to disable all events.",
			D: "false"
		},
		edgesProperties: {
			M: "Data Table/Filter",
			T: "array",
			C: "Two dimensional array with object properties not at the root level for the edges in the Network graph to include in the Data table and the data filter",
			D: "[]"
		},
		showVarDendrogram: {
			H: ['{*,"data":"Generic","graphType":"Heatmap"}'],
			M: "Dendrograms",
			T: "boolean",
			C: "Flag to show or not the variable dendrogram",
			D: "false"
		},
		freezeColRight: {
			M: "Data Table",
			T: "integer",
			C: "Number of columns to freeze in the right side of the data table",
			D: "0"
		},
		pieType: {
			H: ["{*}"],
			O: ["separated", "solid"],
			M: "Pie Charts",
			T: "option",
			C: "Position for the pices of the pie",
			D: "separated"
		},
		rAxis: {
			H: ['{"data":"Circular","segregateVariablesBy":"Ring","rAxis":false}', '{"data":"Circular2","rAxis":"Number","segregateVariablesBy":"Ring","segregateSamplesBy":"Segment"}'],
			M: "Circular Graphs",
			T: "string",
			C: "Radial axis for circular plots. It must be the name of a variable",
			D: "false"
		},
		reset: {
			M: "Functions",
			T: "void",
			C: "Reset the canvas"
		},
		remoteDataIndex: {
			Z: "true",
			M: "Remote Procedures",
			T: "integer",
			C: "Index of the canvasXpress object requested"
		},
		oncoprintAmplification: {
			H: ['{*,"data":"MultidimensionalHeatmap"}'],
			M: "Heatmap Graphs",
			T: "float",
			C: "Threshold to qualify amplifications in oncoprints",
			D: "3"
		},
		showDecorations: {
			H: ['{"showDecorations":true,"graphType":"Scatter2D","data":"Random:16:2:0:0","functions":["addNormalDistributionLine", "draw"]}'],
			M: "Decorations",
			T: "boolean",
			C: "Flag to show or not extra decorations like (regression lines, splines, etc) in scatter plots and (heatmaps, pie charts or stacked bar graphs in) network graphs",
			D: "false"
		},
		backgroundVideo: {
			S: ["backgroundType"],
			H: ['{"graphType":"Video","videoAutoplay":true,"backgroundType":"video","backgroundVideo":["http://video-js.zencoder.com/oceans-clip.mp4", "http://video-js.zencoder.com/oceans-clip.webm"]}'],
			M: "Background",
			T: "url",
			C: "An array containing urls for the background video when the background type is of the type 'video'.",
			D: "false"
		},
		approximateNodePositions: {
			H: ["{*}"],
			M: "Network Graphs",
			T: "boolean",
			C: "Flag to force approximate X, Y node positions.",
			D: "false"
		},
		heatmapType: {
			H: ['{*,"graphType":"Heatmap"}'],
			O: ["blue", "blue-green", "blue-red", "blue-yellow", "blue-cyan", "blue-purple", "blue-white", "blue-black", "green", "green-blue", "green-red", "green-yellow", "green-cyan", "green-purple", "green-white", "green-black", "red", "red-blue", "red-green", "red-yellow", "red-cyan", "red-purple", "red-white", "red-black", "yellow", "yellow-green", "yellow-red", "yellow-cyan", "yellow-purple", "yellow-white", "yellow-black", "cyan", "cyan-green", "cyan-red", "cyan-yellow", "cyan-purple", "cyan-white", "cyan-black", "purple", "purple-green", "purple-red", "purple-yellow", "purple-cyan", "purple-white", "purple-black", "white-green", "white-red", "white-yellow", "white-cyan", "white-purple", "white-black", "black-green", "black-red", "black-yellow", "black-cyan", "black-purple", "black-white"],
			M: "Indicators",
			T: "option",
			C: "Color shades for the heatmap. It could be red, blue, green, yellow, cyan, purple, black, white or any combination of two colors separated by a dash",
			D: "blue-red"
		},
		citationScaleFontFactor: {
			H: ['{*,"citation":"Graph citation or reference"}'],
			M: "Citations or References",
			T: "float",
			C: "Scaling factor used to increase or decrease citation font size in the canvas",
			D: "1"
		},
		zoomVariablesDisable: {
			H: ['{*,"graphType":"Heatmap"}'],
			S: ["zoomSamplesDisable"],
			M: "Zooming and Panning",
			T: "boolean",
			C: "Flag to disable zooming of variables with mouse wheel in Heatmaps",
			D: "false"
		},
		hideInfoDiv: {
			M: "Functions",
			T: "void",
			C: "Hide additional information @advanced"
		},
		xAxisTickStyle: {
			H: ["{*}"],
			O: ["solid", "dotted"],
			M: "X-Axis",
			T: "option",
			C: "Style for the tick lines in the X axis",
			D: "solid"
		},
		smpTitleScaleFontFactor: {
			H: ['{*,"smpTitle":"Sample Title"}'],
			M: "Samples",
			T: "float",
			C: "Scaling factor used to increse or decrease sample title font size in the canvas",
			D: "1"
		},
		showConfiguratorExamplesOnSelect: {
			H: ["{*}"],
			M: "Events",
			T: "boolean",
			C: "Flag to display examples as the configurator property changes",
			D: "false"
		},
		lineWidthEvent: {
			H: ['{*,"data":"Lines","calculateLayout":false,"graphType":"Network"}'],
			M: "Lines",
			T: "integer",
			C: "Size in pixels of the width for the events in the lines.",
			D: "2"
		},
		monitorCanvasXpressZombiesTime: {
			H: ["{*}"],
			M: "Events",
			T: "integer",
			C: "Time in milliseconds to wait between checking for canvasXpress zombies",
			D: "30000"
		},
		selectDataPoint: {
			Z: "true",
			M: "Scatter Plots",
			T: "array",
			C: "Ids of data points (in the data object) to select.",
			D: "[]"
		},
		axisTicksAutoAdjust: {
			H: ["{*}"],
			M: "Axis",
			T: "boolean",
			C: "Flag to indicate whether to adjust automatically the number of ticks to put in the axes",
			D: "false"
		},
		subtitle: {
			S: ["subtitleHeight", "subtitleColor"],
			H: ['{"title":"Graph Title","subtitle":"Graph Subtitle"}'],
			M: "Titles and Subtitles",
			T: "string",
			C: "Subtitle of the graph.",
			D: "false"
		},
		animationType: {
			O: ["grow", "spring", "random"],
			M: "Animation",
			T: "option",
			C: "Type of animation",
			D: "grow"
		},
		circularCenterProportion: {
			H: ['{*,"data":"Circular"}'],
			M: "Circular Graphs",
			T: "float",
			C: "Proportion of the center of the circular graph to use as void",
			D: "0.3"
		},
		showErrorBars: {
			H: ['{"showErrorBars":true,"functions":["groupSamples:Factor1"]}', '{"showErrorBars":false,"functions":["groupSamples:Factor1"]}'],
			M: "Data",
			T: "boolean",
			C: "Flag to indicate whether to show or not error bars in the graphs.",
			D: "true"
		},
		axisTickScaleFontFactor: {
			H: ["{*}"],
			M: "Axis",
			T: "float",
			C: "Scaling factor used to increase or decrease tick font size in the canvas in one and two dimensional plots",
			D: "1"
		},
		colorEdgeBy: {
			H: ['{"data":"LesMiserables","colorEdgeBy":"value"}'],
			M: "Network Graphs",
			T: "string",
			C: "Name of the attribute to color the edges.",
			D: "false"
		},
		margin: {
			H: ["{*}"],
			M: "Margins",
			T: "integer",
			C: "Specifies the length in pixels for the distance between various objects in the graphs.",
			D: "5"
		},
		xAxisMaxStrLength: {
			Z: "true",
			M: "X-Axis",
			T: "string",
			C: "Longest string of all the values in the ticks in the X axis"
		},
		broadcastType: {
			H: ["{*}"],
			O: ["var", "comb"],
			M: "Events",
			T: "option",
			C: "Model for broadcasting to identify either variables or a combination of variable and samples",
			D: "var"
		},
		segregateSamplesBy: {
			H: ['{"data":"Random:2:3:0:3:0:1","segregateSamplesBy":"Factor3","smpLabelRotate":90,"smpLabelScaleFontFactor":0.5}'],
			O: ["false", "string"],
			M: "Data",
			T: "option",
			C: "String to indicate the annotation used to segregate the samples. It must be a category in the 'data.x' object",
			D: "false"
		},
		print: {
			M: "Functions",
			T: "void",
			C: "Print the canvas"
		},
		backgroundType: {
			H: ['{*,"backgroundImage":"http://www.canvasxpress.org/images/nanotube.jpg","skipExample":["video"]}'],
			S: ["backgroundImage", "gradientOrientation", "backgroundGradient1Color", "backgroundGradient2Color"],
			O: ["solid", "gradient", "window", "windowGradient", "windowGradient2", "windowSolidGradient", "image", "windowImage", "video"],
			M: "Background",
			T: "option",
			C: "Specifies the style for the background of the canvas. The canvas background is composed of a frame with a window where the data is plotted. Either of these elements the may be a solid or gradient color or an image or a video of your choosing.",
			D: "solid"
		},
		maxSmpStringLen: {
			H: ['{"maxSmpStringLen":50}', '{"maxSmpStringLen":5}'],
			M: "Samples",
			T: "integer",
			C: "Maximum length in characters a sample label or description can have so anything above is truncated.",
			D: "50"
		},
		showAnimationFontSize: {
			M: "Animation",
			T: "integer",
			C: "Size in pixels for the font size of text involved in the animation",
			D: "10"
		},
		axisExtension: {
			H: ['{"graphType":"Scatter2D","axisExtension":0.1}', '{"graphType":"Scatter2D","axisExtension":0.2}'],
			M: "Axis",
			T: "float",
			C: "Percentage to extend the values in the data",
			D: "0.1"
		},
		sequenceMColor: {
			H: ["{*}"],
			M: "Genome Browser",
			T: "color",
			C: "Color for the degenerate A/G and methionines in the genome browser",
			D: "rgb(0,103,0)"
		},
		randomDataVariableAnnotations: {
			H: ["{*}"],
			M: "Random",
			T: "integer",
			C: "Default number of variable annotations when creating random data",
			D: "2"
		},
		axisWilkinsonLoose: {
			H: ['{*,"graphType":"Bar","axisAlgorithm":"wilkinson"}'],
			M: "Axis",
			T: "boolean",
			C: "Flag to indicate whether to use loose positioning when using the wilkinson algorithm to position the labels on the axis",
			D: "false"
		},
		featureTranslateHeight: {
			H: ["{*}"],
			M: "Genome Browser",
			T: "integer",
			C: "Default size in pixels of the translation height",
			D: "12"
		},
		subNetworks: {
			Z: "true",
			M: "Network Graphs",
			T: "array",
			C: "Array to keep independent networks"
		},
		legendFontStyle: {
			H: ["{*}"],
			O: ["", "bold", "italic", "bold italic"],
			M: "Legends",
			T: "option",
			C: "Font style for the legend. @default"
		},
		showInfoDiv: {
			M: "Functions",
			T: "void",
			C: "Show additional information @advanced"
		},
		sampleSeparationFactor: {
			S: ["widthFactor", "variableSeparationFactor"],
			H: ["{*}"],
			M: "Space and Width",
			T: "integer",
			C: "Factor to adjust the spacing between the sample blocks in the one dimensional graphs. The default is 1. If you  want to make the blocks wider apart then increase this parameter (2 is twice as much).",
			D: "1"
		},
		yAxisAbsMin: {
			Z: "true",
			M: "Y-Axis",
			T: "float",
			C: "Minimum non-filtered value for the data plotted in the Y axis"
		},
		blockContrast: {
			S: ["evenColor", "oddColor"],
			H: ['{*,"graphType":"Bar"}'],
			M: "Plot area",
			T: "boolean",
			C: "A flag to creates a shade between the samples so there are two backgrounds, one for the odd samples and one for the even samples.",
			D: "false"
		},
		featureSignalToNoiseHeight: {
			H: ["{*}"],
			M: "Genome Browser",
			T: "integer",
			C: "Default size in pixels of the quality height",
			D: "12"
		},
		titleFontStyle: {
			H: ['{*,"title":"Graph Title"}'],
			O: ["", "bold", "italic", "bold italic"],
			M: "Titles and Subtitles",
			T: "option",
			C: "Font style for the title. @default"
		},
		xAxisExact: {
			H: ["{*}"],
			M: "X-Axis",
			T: "boolean",
			C: "Flag to force exact values for the data in the X axis",
			D: "false"
		},
		videoData: {
			H: ['{*,"backgroundType":"video","backgroundVideo":["http://video-js.zencoder.com/oceans-clip.mp4", "http://video-js.zencoder.com/oceans-clip.webm"]}'],
			M: "Videos",
			T: "object",
			C: "Data for videos",
			D: "{}"
		},
		resizeHeightOnLayout: {
			H: ["{*}"],
			M: "Events",
			T: "boolean",
			C: "Flag to enable resizing the height of the canvas after changing the layout",
			D: "true"
		},
		legendBox: {
			S: ["legendBoxColor", "legendBackgroundColor"],
			H: ["{*}"],
			M: "Legends",
			T: "boolean",
			C: "Flag to create a box around the legend",
			D: "true"
		},
		showDataTable: {
			M: "Data Table",
			T: "boolean",
			C: "Flag to indicate to show the data table",
			D: "false"
		},
		remoteService: {
			M: "Remote Procedures",
			T: "url",
			C: "Url used to obtain data remotely. It expects and array of canvasXpress objects",
			D: "false"
		},
		randomDataVariables: {
			M: "Random",
			T: "integer",
			C: "Default number of variables when creating random data",
			D: "6"
		},
		gradientRatio: {
			S: ["gradientType"],
			H: ['{*,"data":"Random:1:3:0:0","gradient":true,"gradientType":"linear"}'],
			M: "Gradients",
			T: "float",
			C: "Specifies the ratio used to generate linear gradients.",
			D: "1.3"
		},
		decorationFont: {
			Z: "true",
			M: "Decorations",
			T: "font",
			C: "Font for the decoration in scatter plots and network graphs"
		},
		sequenceRColor: {
			H: ["{*}"],
			M: "Genome Browser",
			T: "color",
			C: "Color for the degenerate A/G and arginines in the genome browser",
			D: "rgb(255,0,0)"
		},
		varOverlayRecycleColors: {
			H: ['{*,"graphType":"Heatmap","data":"Random:10:10:3:3","varOverlays":["Annt1","Annt2","Annt3"],"smpOverlays":["Factor1","Factor2","Factor3"]}'],
			M: "Overlays",
			T: "boolean",
			C: "Flag to indicate to recycle variable overlay colors with each overlay",
			D: "false"
		},
		zAxisShow: {
			H: ['{*,"graphType":"Scatter3D"}'],
			M: "Z-Axis",
			T: "boolean",
			C: "Flag to show on not the values of the ticks in the Z axis",
			D: "true"
		},
		sequenceNColor: {
			H: ["{*}"],
			M: "Genome Browser",
			T: "color",
			C: "Color for the degenerate A/C/G/T and asparagines in the genome browser",
			D: "rgb(0,0,0)"
		},
		smpOverlays: {
			H: ['{"data":"Random:10:10:0:3","smpOverlays":["Factor1","Factor2","Factor3"]}'],
			M: "Overlays",
			T: "array",
			C: "Sample annotations included in the 'data.x' object used in one dimensional plots",
			D: "[]",
			X: "getXData"
		},
		translateY: {
			Z: "true",
			M: "Combination Plots",
			T: "float",
			C: "Amount to translate for the Y axis."
		},
		axisTitleFontSize: {
			S: ["autoScaleFont", "axisTitleScaleFontFactor"],
			H: ['{*,"autoScaleFont":false}'],
			M: "Axis",
			T: "integer",
			C: "Font size for the axis titles in one and two dimensional plots. Be aware that auto scaling font must be turned off for this property to take effect. A more convenient way to modify the size is to use the axis title scaling factor",
			D: "10"
		},
		shapeByData: {
			H: ['{"data":"MultidimensionalHeatmap","shapeByData":"data4","shapeBy":"Data Shape"}'],
			S: ["shapeBy"],
			M: "Data Point Attributes",
			T: "string",
			C: "String that identify the object containing a two dimensional array with values used to shape data points when drawing a multidimensional Heatmap. It must be located within the data.y object (for example: data.y.data2)",
			D: "false",
			U: {
				Heatmap: "true"
			}
		},
		draw: {
			M: "Functions",
			T: "void",
			C: "Redraw the canvas"
		},
		featureNameFontSize: {
			H: ["{*}"],
			M: "Genome Browser",
			T: "integer",
			C: "Size in pixels for the font size of text of the features in the genome browser",
			D: "10"
		},
		sequenceFColor: {
			H: ["{*}"],
			M: "Genome Browser",
			T: "color",
			C: "Color for the phenylalanines in the genome browser",
			D: "rgb(0,0,255)"
		},
		xAxisTickFormat: {
			H: ['{"xAxisTickFormat":"%.2f cxs","graphOrientation":"vertical"}'],
			M: "X-Axis",
			T: "string",
			C: "Format for the tick values in the X axis",
			D: "false"
		},
		resizerDataIndex: {
			Z: "true",
			M: "Axis Resizer",
			T: "integer",
			C: "Object to store data when the canvas is zoomed with the axis resizer resizerEventData @type {object}",
			D: "0"
		},
		addRegressionLine: {
			M: "Functions",
			T: "void",
			C: "Add regression line(s) to a 2D-Scatter plot",
			U: {
				Scatter3D: "true",
				ScatterBubble2D: "true",
				Scatter2D: "true"
			}
		},
		histogramDensityKernel: {
			H: ['{*,"data":"Random:200:2","functions":["createHistogram"],"histogramBins":50}'],
			S: ["createHistogram", "showHistogramDensity"],
			O: ["epanechnikovKernel", "uniformKernel", "triangularKernel", "quarticKernel", "triweightKernel", "gaussianKernel", "cosineKernel"],
			M: "Histograms",
			T: "option",
			C: "Histogram density kernels",
			D: "epanechnikovKernel"
		},
		nodeSize: {
			H: ["{*}"],
			M: "Network Graphs",
			T: "integer",
			C: "Length in pixels for the size of the nodes in the network",
			D: "20"
		},
		maxRows: {
			M: "Data Table",
			T: "integer",
			C: "Maximum number of rows to display in the data table",
			D: "10"
		},
		pieLabelType: {
			H: ["{*}"],
			O: ["percentage", "value"],
			M: "Pie Charts",
			T: "option",
			C: "Pie label type to show the percentage of the slice or the actual number",
			D: "percentage"
		},
		yAxisShow: {
			H: ['{*,"graphType":"Scatter2D"}'],
			M: "Y-Axis",
			T: "boolean",
			C: "Flag to show on not the values of the ticks in the Y axis",
			D: "true",
			U: {
				Scatter3D: "true",
				ScatterBubble2D: "true",
				Correlation: "true",
				Scatter2D: "true"
			}
		},
		connectBy: {
			O: ["false"],
			T: "option",
			X: "getZData",
			H: ['{"graphType":"Scatter3D","connectBy":"Annt1"}', '{"graphType":"Scatter3D"}'],
			M: "Data Point Attributes",
			D: "false",
			C: "Name of a variable annotation to connect the variables.",
			U: {
				Scatter3D: "true",
				ScatterBubble2D: "true",
				Scatter2D: "true"
			}
		},
		contourType: {
			H: ['{*,"graphType":"Scatter2D"}'],
			S: ["images", "isHistogram", "histogramBarWidth"],
			O: ["overlay", "color"],
			M: "Scatter Plots",
			T: "option",
			C: "Type of contour plot",
			D: "overlay"
		},
		destroyCanvasXpressZombies: {
			H: ["{*}"],
			M: "Events",
			T: "boolean",
			C: "Flag to destroy canvasXpress objects stored in the references array when they are no longer part of the DOM. This may happen when canvasXpress is used in other JS frameworks and the objects are not destroyed by the developer",
			D: "true"
		},
		axisTickFont: {
			Z: "true",
			M: "Axis",
			T: "font",
			C: "Font for the axis ticks in one and two dimensional plots"
		},
		baseline: {
			H: ['{*,"title":"Graph Title"}'],
			O: ["top", "middle", "bottom"],
			M: "Text",
			T: "option",
			C: "Default vertical alignment for drawing text.",
			D: "middle"
		},
		setMinX2: {
			H: ['{"graphType":"BarLine","setMinX2":50}', '{"graphType":"BarLine","setMinX2":20}', '{"graphType":"BarLine","setMinX2":null}'],
			M: "X-Axis2",
			T: "float",
			C: "Minimum value to set the data in the 2nd axis",
			D: "null",
			U: {
				StackedLine: "true",
				StackedPercentLine: "true",
				BarLine: "true",
				AreaLine: "true"
			}
		},
		ringSeparation: {
			H: ['{*,"data":"Circular","segregateVariablesBy":"Ring"}'],
			M: "Circular Graphs",
			T: "integer",
			C: "Number of pixels to separate the rings in the circular plots",
			D: "9"
		},
		smpDendrogramPosition: {
			H: ['{*,"data":"Generic","graphType":"Heatmap","showSmpDendrogram":true}'],
			O: ["right", "left"],
			M: "Dendrograms",
			T: "option",
			C: "Position for the sample dendrogram in the plot. It could be top, bottom, right or left depending on the orientation of the graph.",
			D: "left"
		},
		xAxisHistogramHeight: {
			H: ['{*,"graphType":"Scatter2D"}'],
			M: "X-Axis",
			T: "integer",
			C: "Number of pixels for the histogram in the X axis",
			D: "50"
		},
		is3DPlot: {
			H: ['{*,"graphType":"Bar"}'],
			M: "Plot area",
			T: "boolean",
			C: "Flag to create or not a 3D plot",
			D: "false"
		},
		isLayoutConfigurator: {
			H: ["{*}"],
			M: "Events",
			T: "boolean",
			C: "Flag to disable showing the configurator when there is a click in the full layout icon in the toolbar",
			D: "false"
		},
		removeHistogram: {
			M: "Functions",
			T: "void",
			C: "Remove histogram from a 2D-Scatter plot",
			U: {
				Scatter3D: "true",
				ScatterBubble2D: "true",
				Scatter2D: "true"
			}
		},
		disableDataFilters: {
			H: ["{*}"],
			M: "Events",
			T: "boolean",
			C: "Flag to disable showing data filters",
			D: "false"
		},
		createRandomData: {
			M: "Functions",
			T: "void",
			C: "Create a random data set"
		},
		yAxisMinorTicks: {
			H: ['{*,"graphType":"Scatter2D"}'],
			M: "Y-Axis",
			T: "boolean",
			C: "A flag to show minor tick lines in the Y axis",
			D: "true"
		},
		helpKeyEvents: {
			H: ["{*}"],
			M: "Events",
			T: "boolean",
			C: "Flag to enable help on key events.",
			D: "false"
		},
		remoteUpdate: {
			M: "Remote Procedures",
			T: "boolean",
			C: "Flag to indicate that the file to get the data needs to be updated",
			D: "false"
		},
		shadowOffsetY: {
			S: ["showShadow"],
			H: ['{*,"showShadow":true}'],
			M: "Shadows",
			T: "integer",
			C: "Length in pixels for the shadow offset in the Y axis.",
			D: "1"
		},
		variableSeparationFactor: {
			S: ["sampleSeparationFactor", "widthFactor"],
			H: ["{*}"],
			M: "Space and Width",
			T: "float",
			C: "Factor to adjust the spacing between the variables in the one dimensional plots.",
			D: "2"
		},
		citationFontStyle: {
			H: ['{*,"citation":"Graph citation or reference"}'],
			O: ["", "bold", "italic", "bold italic"],
			M: "Citations or References",
			T: "option",
			C: "Font style for the citation. @default"
		},
		varSort: {
			Z: "true",
			M: "Data",
			T: "integer",
			C: "Variable index used in sorting the data."
		},
		yAxisTicks: {
			H: ['{*,"graphType":"Scatter2D"}'],
			M: "Y-Axis",
			T: "integer",
			C: "Number of ticks in the Y axis",
			D: "5"
		},
		decorations: {
			H: ['{"data":"NetworkDecorations","graphType":"Network","decorationsPosition":"top","networkFreezeOnLoad":true,"showDecorations":true,"calculateLayout":false,"decorations":["exp1","exp2","exp3"]}', '{"showDecorations":true,"graphType":"Scatter2D","data":"NonLinearFit","xAxisTransform":"log10","xAxisTransformTicks":false,"setMaxY":350,"setMinY":100,"yAxisExact":true}', '{"showDecorations":true,"graphType":"Scatter2D","data":"DecorationLine"}', '{"showDecorations":true,"graphType":"Bar","data":"DecorationLines","graphOrientation":"vertical"}', '{"showDecorations":true,"graphType":"Scatter2D","data":"Random:16:2:0:0","functions":["addNormalDistributionLine","draw"]}', '{"showDecorations":true,"graphType":"Scatter2D","data":"Random:16:2:0:0","functions":["addRegressionLine","draw"]}', '{"showDecorations":true,"showLegend":false,"graphType":"Scatter2D","data":"DecorationArea"}', '{"showDecorations":true,"graphType":"Scatter2D","data":"KaplanMeyer","showLegend":false,"title":"Kaplan-Meyer Plot","functions":["addKaplanMeyerCurve:Time:Censored-1:Data 1 Population:rgb(0,0,255)","addKaplanMeyerCurve:Time:Censored-2:Data 2 Population:rgb(255,0,0)","draw"]}'],
			S: ["showDecorations"],
			M: "Decorations",
			T: "array",
			C: "Name of the node properties to include in the network decorations in the 'data.nodes' object",
			D: "[]",
			U: {
				Network: "true",
				Scatter2D: "true"
			}
		},
		sequenceFontStyle: {
			H: ["{*}"],
			O: ["", "bold", "italic", "bold italic"],
			M: "Genome Browser",
			T: "option",
			C: "Font style for the sequences. @default"
		},
		acknowledgmentIconPosition: {
			H: ['{*,"acknowledgment":true}'],
			S: ["acknowledgment", "acknowledgmentIcon"],
			O: ["inside", "outside"],
			M: "Acknowledgment",
			T: "option",
			C: "Specifies the acknowledgment canvasXpress icon position",
			D: "inside"
		},
		showCode: {
			M: "Debug",
			T: "boolean",
			C: "Flag to show code for the canvas.",
			D: "false"
		},
		autoHideOnDecorationsCenter: {
			M: "Network Graphs",
			T: "boolean",
			C: "Flag to hide node when decorations are positioned on the center",
			D: "false"
		},
		colors: {
			S: ["colorScheme"],
			H: ['{"data":"Random:16:1:0:0:1","graphType":"Pie"}'],
			M: "Colors",
			T: "array",
			C: "Colors.",
			D: "colors"
		},
		showSampleNames: {
			H: ["{*}"],
			M: "Samples",
			T: "boolean",
			C: "Flag to show the sample names in one dimensional plots.",
			D: "true"
		},
		panningX: {
			M: "Zooming and Panning",
			T: "float",
			C: "Number of unit to pan the network in the X dimension",
			D: "0"
		},
		saveRemoteParameters: {
			M: "Functions",
			T: "void",
			C: "Save the current parameters for a remote data set."
		},
		yAxisCurrent: {
			H: ['{"yAxis":["Sample1","Sample2"],"xAxis":["Sample3","Sample4","Sample5"],"graphType":"Scatter2D","yAxisCurrent":0}', '{"yAxis":["Sample1","Sample2"],"xAxis":["Sample3","Sample4","Sample5"],"graphType":"Scatter2D","yAxisCurrent":1}'],
			M: "Y-Axis",
			T: "integer",
			C: "Index (zero-based) of the sample that is currently displayed in the Y axis when there are more series in the X axis than in the Y axis in an Scarrter2D plot or when there are multiple series in an ScatterBubble2D plot. Use ctrl + arrow keys to cycle through data series.",
			D: "0",
			U: {
				ScatterBubble2D: "true",
				Scatter2D: "true"
			}
		},
		citationFontSize: {
			H: ['{*,"citation":"Graph citation or reference"}'],
			M: "Citations or References",
			T: "integer",
			C: "Size for the text of the reference citation of the graph",
			D: "7"
		},
		maxItemMenuCheckbox: {
			H: ["{*}"],
			M: "Events",
			T: "integer",
			C: "Maximum number of items in a menu before it becomes a scroll box",
			D: "10"
		},
		shadowColor: {
			S: ["showShadow"],
			H: ['{*,"showShadow":true}'],
			M: "Shadows",
			T: "color",
			C: "Color for the shadow.",
			D: "rgba(0,0,0,0.5)"
		},
		xAxis2Show: {
			H: ["{*}"],
			M: "X-Axis2",
			T: "boolean",
			C: "Flag to show on not the values of the ticks in the second X axis",
			D: "true"
		},
		showCodeDiv: {
			M: "Functions",
			T: "void",
			C: "Show the code for the plot @advanced"
		},
		dendrogramSpace: {
			H: ['{*,"data":"Generic","graphType":"Bar","showSmpDendrogram":true}'],
			M: "Dendrograms",
			T: "integer",
			C: "Length in pixels to space the branches in the dendrograms.",
			D: "6"
		},
		addNormalDistributionLine: {
			M: "Functions",
			T: "void",
			C: "Add a normaldistribution line(s) to a 2D-Scatter plot",
			U: {
				Scatter3D: "true",
				ScatterBubble2D: "true",
				Scatter2D: "true"
			}
		},
		kmeansSamples: {
			S: ["kmeansClusters", "maxIterations"],
			M: "Functions",
			T: "void",
			C: "Cluster samples using kmeans",
			U: {
				StackedPercent: "true",
				Boxplot: "true",
				Bar: "true",
				StackedPercentLine: "true",
				Area: "true",
				Line: "true",
				StackedLine: "true",
				Dotplot: "true",
				AreaLine: "true",
				Heatmap: "true",
				Stacked: "true"
			}
		},
		eventArrowKeys: {
			H: ["{*}"],
			M: "Events",
			T: "boolean",
			C: "Flag to enable arrow key binding events.",
			D: "true"
		},
		maxTextSize: {
			H: ['{*,"title":"Graph Title"}'],
			M: "Text",
			T: "integer",
			C: "Maximum size for any text in the canvas.",
			D: "14"
		},
		xAxisTitle: {
			H: ['{"xAxisTitle":"X-axis title"}'],
			M: "X-Axis",
			T: "string",
			C: "Title for the X axis",
			D: "false"
		},
		functionIntervals: {
			H: ['{*,"data":"Function"}'],
			M: "Scatter Plots",
			T: "integer",
			C: "Number of intervals to use when drawing functions in the decorations. In Scatter 3D is more like a factor",
			D: "25"
		},
		gradient: {
			S: ["gradientType"],
			H: ['{*,"data":"Random:1:3:0:0"}'],
			M: "Gradients",
			T: "boolean",
			C: "Flag used to apply gradients to all objects in the graphs.",
			D: "false"
		},
		genomeResolution: {
			Z: "true",
			O: ["low", "medium", "high"],
			M: "Genome Browser",
			T: "option",
			C: "Number to adjust the splines curvature"
		},
		erroBarsWidth: {
			H: ['{"showErrorBars":true,"erroBarsWidth":2,"functions":["groupSamples:Factor1"]}', '{"showErrorBars":true,"erroBarsWidth":10,"functions":["groupSamples:Factor1"]}'],
			M: "Data",
			T: "integer",
			C: "Minimum size of the bar in pixels to determine to show or hide error bar ends in the graphs when available.",
			D: "2"
		},
		maxCols: {
			M: "Data Table",
			T: "integer",
			C: "Maximum number of columns to display in the data table",
			D: "6"
		},
		rAxisAbsMax: {
			Z: "true",
			M: "R-Axis",
			T: "float",
			C: "Maximum non-filtered value for the data plotted in the R axis"
		},
		sma5Color: {
			H: ['{*,"stockIndicators":["Sma5"]}'],
			M: "Candlestick Plots",
			T: "color",
			C: "The color for the 5 day single moving average",
			D: "rgb(255,0,0)"
		},
		nodeFont: {
			Z: "true",
			M: "Network Graphs",
			T: "font",
			C: "Font for the text in networks"
		},
		x3DRatio: {
			H: ['{"graphType":"Scatter3D","x3DRatio":0.5}', '{"graphType":"Scatter3D","x3DRatio":1}'],
			M: "3D Attributes",
			T: "float",
			C: "Value between 0 - 1 for adjusting the 3D of the X Axis",
			D: "1",
			U: {
				Scatter3D: "true",
				Bar: "true"
			}
		},
		histogramStagger: {
			H: ['{"data":"Random:500:3","functions":["createHistogram"],"histogramStagger":false}', '{"data":"Random:500:3","functions":["createHistogram"],histogramStagger":true}'],
			S: ["createHistogram"],
			M: "Histograms",
			T: "boolean",
			C: "Flag to stagger histograms when multiple variables are present",
			D: "false"
		},
		sequenceGAPColor: {
			H: ["{*}"],
			M: "Genome Browser",
			T: "color",
			C: "Color for the deletions, insertions and gaps  in the genome browser",
			D: "rgb(255,0,255)"
		},
		tagCloudTextGridSize: {
			H: ["{*}"],
			M: "Tag Cloud",
			T: "integer",
			C: "Size for the grid in text tag cloud visualizations",
			D: "8"
		},
		smpTitleFontStyle: {
			H: ['{*,"smpTitle":"Sample Title"}'],
			O: ["", "bold", "italic", "bold italic"],
			M: "Samples",
			T: "option",
			C: "Font style for the samples. @default"
		},
		maintainZoomOnDrag: {
			H: ["{*}"],
			M: "Events",
			T: "boolean",
			C: "Flag to enable maintaining zooming after initial drag in one dimensional plots",
			D: "false"
		},
		disableConfigurator: {
			H: ["{*}"],
			M: "Events",
			T: "boolean",
			C: "Flag to disable configurator.",
			D: "false"
		},
		sequenceIColor: {
			H: ["{*}"],
			M: "Genome Browser",
			T: "color",
			C: "Color for the isoleucines in the genome browser",
			D: "rgb(0,103,0)"
		},
		colorHSV: {
			Z: "true",
			M: "Colors",
			T: "array",
			C: "Color HSV. Hue, Saturation and Value used in the configurator"
		},
		smpTitle: {
			H: ['{"smpTitle":"Sample Title"}'],
			M: "Samples",
			T: "string",
			C: "Title for the sample axis in one dimensional plots",
			D: "false"
		},
		correlationAnchorLegendAlignWidth: {
			H: ['{*,"correlationAnchorLegend":true}'],
			M: "Correlation Graphs",
			T: "integer",
			C: "Length in pixels of the height of the correlation anchor legend",
			D: "40"
		},
		axisTitleFontStyle: {
			H: ["{*}"],
			O: ["", "bold", "italic", "bold italic"],
			M: "Axis",
			T: "option",
			C: "Font style for the axis titles. @default"
		},
		shapeEdgeBy: {
			H: ['{"data":"LesMiserables","shapeEdgeBy":"value"}'],
			M: "Network Graphs",
			T: "string",
			C: "Name of the attribute to shape the nods.",
			D: "false"
		},
		tagCloudTextRotateRatio: {
			H: ["{*}"],
			M: "Tag Cloud",
			T: "float",
			C: "Ratio for rotation of text in cloud visualizations",
			D: "0.1"
		},
		featureNameFontStyle: {
			H: ["{*}"],
			O: ["", "bold", "italic", "bold italic"],
			M: "Genome Browser",
			T: "option",
			C: "Font style for the feature name. @default"
		},
		scatterPlotMatrixType: {
			H: ['{*,"graphType":"Scatter2D","scatterPlotMatrix":true}'],
			S: ["scatterPlotMatrix"],
			O: ["both", "upper", "lower"],
			M: "Scatter Plot Matrix",
			T: "option",
			C: "Type for the n-1 x n-1 matrix of 2D sccaterplots",
			D: "both"
		},
		xAxis2MaxStrLength: {
			Z: "true",
			M: "X-Axis2",
			T: "string",
			C: "Longest string of all the values in the ticks in the 2nd X axis"
		},
		randomNetworkNodes: {
			M: "Random",
			T: "integer",
			C: "Default number of nodes when creating random networks",
			D: "50",
			U: {
				Network: "true"
			}
		},
		show3DGrid: {
			H: ["{*}"],
			M: "3D Attributes",
			T: "boolean",
			C: "Flag to show the X,Y,Z grid in scatter 3D plots",
			D: "true",
			U: {
				Scatter3D: "true"
			}
		},
		showHistogramDensity: {
			H: ['{*,"data":"Random:200:2","functions":["createHistogram"],"histogramBins":50}'],
			S: ["createHistogram", "histogramDensityKernel"],
			M: "Histograms",
			T: "boolean",
			C: "Flag to show the density kernel in histograms",
			D: "false"
		},
		codeType: {
			O: ["pretty", "compact", "tab", "params"],
			M: "Debug",
			T: "option",
			C: "Output type for the JSON code",
			D: "params"
		},
		xAxis2MinorValues: {
			M: "X-Axis2",
			T: "array",
			C: "Values for the minor ticks in the 2nd X axis",
			D: "[]",
			U: {
				StackedLine: "true",
				StackedPercentLine: "true",
				BarLine: "true",
				AreaLine: "true"
			}
		},
		fontName: {
			H: ["{*}"],
			O: ["Courier", "Arial", "Verdana"],
			M: "Text",
			T: "option",
			C: "Font name. It will be set depending on the browser.",
			D: "Verdana"
		},
		smpLabelInterval: {
			H: ["{*}"],
			M: "Samples",
			T: "integer",
			C: "Interval for the sample labels in one dimensional plots",
			D: "1"
		},
		dataTableColumnWidth: {
			Z: "true",
			M: "Data Table",
			T: "array",
			C: "Initialize configurations"
		},
		highlightSmp: {
			H: ['{"highlightSmp":["Sample1","Sample3"]}'],
			M: "Samples",
			T: "array",
			C: "Name of samples in the 'data.y' object to highlight.",
			D: "[]",
			X: "getSamplesAsArray"
		},
		decorationsHeight: {
			H: ['{*,"data":"NetworkDecorations","decorationsPosition":"left","networkFreezeOnLoad":true,"showDecorations":true,"calculateLayout":false,"decorations":["exp1","exp2","exp3"]}'],
			M: "Decorations",
			T: "integer",
			C: "Length in pixels of the height for the decorations in the networks",
			D: "20",
			U: {
				Network: "true"
			}
		},
		smpLabelFontColor: {
			H: ["{*}"],
			M: "Samples",
			T: "color",
			C: "Font color for the sample labels in one dimensional plots",
			D: "rgb(0,0,0)"
		},
		tagCloudTextWeightFactor: {
			H: ["{*}"],
			M: "Tag Cloud",
			T: "integer",
			C: "Factor weight for text in tag cloud visualizations",
			D: "1"
		},
		sequenceBColor: {
			H: ["{*}"],
			M: "Genome Browser",
			T: "color",
			C: "Color for the degenerate C/G/T and asparagines in the genome browser",
			D: "rgb(0,0,0)"
		},
		segregateVariables: {
			S: ["segregateVariables"],
			M: "Functions",
			T: "option",
			C: "Segregate variables based on a variable category (data.z object)",
			X: "getZData",
			U: {
				StackedPercent: "true",
				Boxplot: "true",
				DotLine: "true",
				Bar: "true",
				Correletion: "true",
				StackedPercentLine: "true",
				Pie: "true",
				Barline: "true",
				Area: "true",
				StackedLine: "true",
				Line: "true",
				Dotplot: "true",
				AreaLine: "true",
				Heatmap: "true",
				Stacked: "true"
			}
		},
		coordinateLineColor: {
			H: ['{*,"graphType":"BarLine"}'],
			M: "Line Graphs",
			T: "boolean",
			C: "Flag to used same color in BarLine plots. If set to true the color of the bars and the lines will be the same",
			D: "false"
		},
		adjustAspectRatioMax: {
			M: "Aspect Ratio",
			T: "integer",
			C: "Specifies the number of times to try to automatically adjust the size of the canvas when adjustAspectRatio is true",
			D: "3"
		},
		widthFactor: {
			S: ["sampleSeparationFactor", "variableSeparationFactor"],
			H: ["{*}"],
			M: "Space and Width",
			T: "integer",
			C: "Factor to adjust the width of the sample blocks in the one dimensional graphs. The default is 1. If you want to make the blocks wider then increase this parameter (2 is twice as wide).",
			D: "1"
		},
		dendrogramColor: {
			H: ['{*,"data":"Generic","graphType":"Bar","showSmpDendrogram":true}'],
			M: "Dendrograms",
			T: "color",
			C: "The color for the dendrograms",
			D: "rgb(204,204,204)"
		},
		sequenceQColor: {
			H: ["{*}"],
			M: "Genome Browser",
			T: "color",
			C: "Color for the glutamines in the genome browser",
			D: "rgb(0,0,0)"
		},
		oncoprintDeletion: {
			H: ['{*,"data":"MultidimensionalHeatmap"}'],
			M: "Heatmap Graphs",
			T: "float",
			C: "Threshold to qualify deletions in oncoprints",
			D: "1"
		},
		layoutAxis: {
			Z: "true",
			O: ["1", "2", "3"],
			M: "Combination Plots",
			T: "option",
			C: "Flag to indicated whether to print axes values when multiple graphs are displayed in the canvas. The possible values are: 1: horizontal, 2: vertical, 3: both"
		},
		adjustAspectRatioXTries: {
			Z: "true",
			M: "Aspect Ratio",
			T: "integer",
			C: "Counter set when trying to automatically adjust the horizontal size of the canvas when adjustAspectRatio is true"
		},
		smpIndicesStart: {
			Z: "true",
			M: "Heatmap Graphs",
			T: "integer",
			C: "Number that indicates starting point for samples in heatmaps when the canvas is zoom in."
		},
		xAxisCurrent: {
			H: ['{"xAxis":["Sample1","Sample2"],"yAxis":["Sample3","Sample4","Sample5"],"graphType":"Scatter2D","xAxisCurrent":0}', '{"xAxis":["Sample1","Sample2"],"yAxis":["Sample3","Sample4","Sample5"],"graphType":"Scatter2D","xAxisCurrent":1}'],
			M: "X-Axis",
			T: "integer",
			C: "Index (zero-based) of the sample that is currently displayed in the X axis when there are more series in the Y axis than in the X axis in an Scarrter2D plot or when there are multiple series in an ScatterBubble2D plot. Use ctrl + arrow keys to cycle through data series.",
			D: "0",
			U: {
				ScatterBubble2D: "true",
				Scatter2D: "true"
			}
		},
		zAxisCurrent: {
			H: ['{"xAxis":["Sample1","Sample2"],"yAxis":["Sample3","Sample4"],"zAxis":["Sample5","Sample6"],"graphType":"ScatterBubble2D","yAxisCurrent":0}', '{"xAxis":["Sample1","Sample2"],"yAxis":["Sample3","Sample4"],"zAxis":["Sample5","Sample6"],"graphType":"ScatterBubble2D","yAxisCurrent":1}'],
			M: "Z-Axis",
			T: "integer",
			C: "Index (zero-based) of the sample that is currently displayed in the Z axis when there are multiple series in an ScatterBubble2D plot. Use ctrl + arrow keys to cycle through data series.",
			D: "0",
			U: {
				ScatterBubble2D: "true"
			}
		},
		isMultidimensionalData: {
			Z: "true",
			M: "Heatmap Graphs",
			T: "boolean",
			C: "Flag to indicate if there is more than a single data set."
		},
		nodeScaleFontFactor: {
			H: ["{*}"],
			M: "Network Graphs",
			T: "float",
			C: "Scaling factor used to increse or decrease network text font size in the canvas.",
			D: "1"
		},
		evenColor: {
			S: ["blockContrast", "oddColor"],
			H: ['{*,"data":"Random:1:6:0:0","blockContrast":true}'],
			M: "Colors",
			T: "color",
			C: "The color for the even numbers in samples when the property block contrast is set in one dimensional plots or the color for odd number residues in translations in genome plots.",
			D: "rgb(240,240,240)"
		},
		backgroundWindowGradient2Color: {
			S: ["backgroundType"],
			H: ['{*,"backgroundType":"windowSolidGradient"}'],
			M: "Background",
			T: "color",
			C: "Specifies the second color of the gradient if the background type is of the type of 'windowGradient'.",
			D: "rgb(0,0,36)"
		},
		showLevelOverlays: {
			H: ['{*,"graphType":"Heatmap","data":"Random:10:10:3:3","varOverlays":["Annt1","Annt2","Annt3"],"smpOverlays":["Factor1","Factor2","Factor3"]}'],
			M: "Overlays",
			T: "boolean",
			C: "Flag to indicate to show or not the level overlays in one dimensional plots",
			D: "true"
		},
		startPieSectors: {
			H: ['{"startPieSectors":0}', '{"startPieSectors":90}', '{"startPieSectors":180}', '{"startPieSectors":270}'],
			M: "Pie Charts",
			T: "float",
			C: "Starting degrees for pie sectors. 0 is equivalent to 3:00 oclock",
			D: "0"
		},
		legendBoxColor: {
			S: ["legendBox"],
			H: ["{*}"],
			M: "Legends",
			T: "color",
			C: "Color for the box around the legend",
			D: "rgb(204,204,204)"
		},
		rotationSensitivity: {
			M: "3D Attributes",
			T: "integer",
			C: "Factor to adjust the sensitivity of the mouse when rotating the  graph",
			D: "45"
		},
		selectDataMode: {
			H: ['{*,"graphType":"Scatter2D"}'],
			O: ["area", "transparency", "name"],
			M: "Scatter Plots",
			T: "option",
			C: "Type of mode to highlight selected data points with mouse events. (Shift + mouse drag) @see{selectDataModeDescription}",
			D: "area"
		},
		skipClick: {
			Z: "true",
			M: "Network Graphs",
			T: "boolean",
			C: "Flag to skip click events after a mouse down event in the networks when the eventModel is global"
		},
		font: {
			Z: "true",
			M: "Text",
			T: "font",
			C: "The combination of font name style and size.",
			D: "Verdana 12pt"
		},
		trackNameFontColor: {
			H: ["{*}"],
			M: "Genome Browser",
			T: "color",
			C: "Color for the text of the tracks in the genome browser",
			D: "rgb(0,0,0)"
		},
		trackFillColor: {
			H: ["{*}"],
			M: "Genome Browser",
			T: "color",
			C: "Default color for the fill of the tracks in the genome browser",
			D: "rgb(255,255,255)"
		},
		scaleTextConstantMult: {
			Z: "true",
			M: "Text",
			T: "integer",
			C: "Constants to autoscale text",
			D: "40"
		},
		varLabelDescription: {
			H: ['{"data":"Random:16:3:3:0","varLabelDescription":"Annt3"}'],
			M: "Variables",
			T: "string",
			C: "Variable label description is a valid sample classification included in the 'data.z' object used in heatmaps",
			D: "false",
			U: {
				Heatmap: "true"
			}
		},
		images: {
			S: ["scatterType"],
			H: ['{"data":"Random:6:3:0:0","graphType":"Scatter2D","scatterType":"image","images":["met.png", "prot9.png", "prot8.png", "prot7.png", "prot6.png", "prot5.png"]}'],
			M: "General Attributes",
			T: "array",
			C: "Array of urls of images used in scatter plots.",
			D: "[]"
		},
		linkage: {
			H: ['{"graphType":"Heatmap","linkage":"single","functions":["clusterSamples","clusterVariables"]}', '{"graphType":"Heatmap","linkage":"complete","functions":["clusterSamples","clusterVariables"]}', '{"graphType":"Heatmap","linkage":"average","functions":["clusterSamples","clusterVariables"]}'],
			S: ["distance", "clusterAxis", "imputeMethod", "centerData", "clusterSamples", "clusterVariables"],
			O: ["single", "complete", "average"],
			M: "Clustering",
			T: "option",
			C: "Linkage type to use when clustering data.",
			D: "single"
		},
		adjustAspectRatio: {
			S: ["variableSeparationFactor", "sampleSeparationFactor", "widthFactor"],
			H: ['{*,"graphOrientation":"vertical"}'],
			M: "Aspect Ratio",
			T: "boolean",
			C: "Flag to automatically adjust the size of the bars or points in the one dimensional plots to fit in the provided canvas width and height. If the flag is set to 'false' the width and height of the canvas will be sized according to the number of bars or points in the data set.",
			D: "true"
		},
		sequenceStartColor: {
			H: ["{*}"],
			M: "Genome Browser",
			T: "color",
			C: "Color for the start codon in the genome browser",
			D: "rgb(0,204,0)"
		},
		smpLabelDescription: {
			H: ['{"data":"Random:16:3:0:3","smpLabelDescription":"Factor3"}'],
			M: "Samples",
			T: "string",
			C: "Sample label description is a valid sample classification included in the 'data.x' object used in heatmaps",
			D: "false",
			U: {
				Heatmap: "true"
			}
		},
		backgroundGradient1Color: {
			S: ["backgroundType", "backgroundGradient2Color"],
			H: ['{*,"backgroundType":"gradient"}'],
			M: "Background",
			T: "color",
			C: "Specifies the first color of the gradient if the background type is of the type of 'gradient'.",
			D: "rgb(0,0,200)"
		},
		smpLabelFont: {
			Z: "true",
			M: "Samples",
			T: "font",
			C: "Font for the sample labels in one dimensional plots"
		},
		timeValueIndices: {
			M: "X-Axis",
			T: "array",
			C: "Array containing the indices of the values when the the graph is a time series",
			D: "[]"
		},
		legendColor: {
			H: ["{*}"],
			M: "Legends",
			T: "color",
			C: "Color for the legends",
			D: "rgb(0,0,0)"
		},
		layoutAdjust: {
			H: ["{*}"],
			M: "Combination Plots",
			T: "boolean",
			C: "Flag to force recalculating the ranges in the axes when multiple graphs are displayed in the canvas.",
			D: "false"
		},
		featureNameFontColor: {
			H: ["{*}"],
			M: "Genome Browser",
			T: "color",
			C: "Color for the text of the features in the genome browser",
			D: "rgb(0,0,0)"
		},
		treemapBy: {
			O: ["false", "variable"],
			M: "Data Point Attributes",
			T: "option",
			C: "Name of a variable annotation to treemap the variables.",
			D: "false",
			X: "getXZData"
		},
		isSelectNodes: {
			Z: "true",
			M: "Network Graphs",
			T: "integer",
			C: "Number of selected nodes (in the data object).",
			D: "0"
		},
		varHighlightColor: {
			H: ['{*,"highlightVar":["Variable1","Variable3"]}'],
			M: "Variables",
			T: "color",
			C: "The color for the highlighted variables.",
			D: "rgb(255,0,0)",
			U: {
				Heatmap: "true"
			}
		},
		startRow: {
			Z: "true",
			M: "Data Table",
			T: "integer",
			C: "Starting row in the data table"
		},
		remoteAutoPlayDelay: {
			M: "Remote Procedures",
			T: "integer",
			C: "Time in milliseconds to wait between iterations over remote data sets",
			D: "3000"
		},
		kmeansClusters: {
			H: ['{"graphType":"Heatmap","kmeansClusters":2,"functions":["kmeansSamples","kmeansVariables"]}', '{"graphType":"Heatmap","kmeansClusters":4,"functions":["kmeansSamples","kmeansVariables"]}'],
			S: ["maxIterations", "kmeansSamples", "kmeansVariables"],
			M: "Clustering",
			T: "integer",
			C: "Number of clusters when clustering data with kmeans.",
			D: "3"
		},
		axisAlgorithm: {
			H: ['{*,"graphType":"Scatter2D"}'],
			O: ["default", "heckbert", "wilkinson", "wilkinsonExtended", "rPretty"],
			M: "Axis",
			T: "option",
			C: "Algorithm to position labels in axis",
			D: "default"
		},
		lines: {
			Z: "true",
			H: ['{"data":"Lines","calculateLayout":false,"graphType":"Network"}'],
			O: ["", "dashed", "dotted", "bezierY", "bezierX", "curved + arrow", "arrowHead", "arrowTail", "arrowHeadSquareTail", "arrowTailSquareHead", "square", "squareHead", "squareTail", "squareHeadArrowTail", "squareTailArrowHead"],
			M: "Lines",
			T: "array",
			C: "Line types available network graphs The patterns can be: '', 'dashed', 'dotted', 'bezierY', 'bezierX' and 'curved'. The end could be: 'arrow', 'arrowHead', 'arrowTail', 'arrowHeadSquareTail', 'arrowTailSquareHead', 'square', 'squareHead', 'squareTail', 'squareHeadArrowTail' or 'squareTailArrowHead'."
		},
		varTitleScaleFontFactor: {
			H: ['{*,"varTitle":"Variable Title"}'],
			M: "Variables",
			T: "float",
			C: "Scaling factor used to increse or decrease variable font size in the canvas.",
			D: "1",
			U: {
				Heatmap: "true"
			}
		},
		sequenceHColor: {
			H: ["{*}"],
			M: "Genome Browser",
			T: "color",
			C: "Color for the degenerate A/C/T and histidines in the genome browser",
			D: "rgb(255,0,0)"
		},
		showPieGrid: {
			H: ['{*,"data":"Generic","xAxis":["Sample1", "Sample2", "Sample3", "Sample4", "Sample5", "Sample6"],"layout":"2X3"}'],
			M: "Pie Charts",
			T: "boolean",
			C: "A flag to show the labels for the grid when plotting multiple pies",
			D: "true"
		},
		timeFormat: {
			O: ["default", "shortDate", "mediumDate", "longDate", "fullDate", "shortTime", "mediumTime", "longTime", "isoDate", "isoTime", "isoDateTime", "isoUtcDateTime"],
			M: "General Attributes",
			T: "option",
			C: "Time Format according to date.format.js Steven Levithan <stevenlevithan.com>",
			D: "isoDate"
		},
		networkStackStates: {
			H: ["{*}"],
			M: "Network Graphs",
			T: "integer",
			C: "Number of states to keep in the network stack after a drag or move",
			D: "8"
		},
		sequenceEColor: {
			H: ["{*}"],
			M: "Genome Browser",
			T: "color",
			C: "Color for the glutamic acids in the genome browser",
			D: "rgb(0,0,0)"
		},
		hideCodeDiv: {
			M: "Functions",
			T: "void",
			C: "Hide the code for the plot @advanced"
		},
		trackNameFontSize: {
			H: ["{*}"],
			M: "Genome Browser",
			T: "integer",
			C: "Size in pixels for the font size of text of the tracks in the genome browser",
			D: "10"
		},
		sequenceEndColor: {
			H: ["{*}"],
			M: "Genome Browser",
			T: "color",
			C: "Color for the end codon in the genome browser",
			D: "rgb(255,0,0)"
		},
		subtitleColor: {
			S: ["subtitle", "subtitleHeight"],
			H: ['{*,"title":"Graph Title","subtitle":"Graph Subtitle"}'],
			M: "Titles and Subtitles",
			T: "color",
			C: "Color for the subtitle",
			D: "rgb(0,0,0)"
		},
		legendFont: {
			Z: "true",
			M: "Legends",
			T: "font",
			C: "Font for the legends"
		},
		xAxisHistogramShow: {
			H: ['{*,"graphType":"Scatter2D"}'],
			M: "X-Axis",
			T: "boolean",
			C: "Flag to indicate whether to show a histogram for the data in the X axis",
			D: "false"
		},
		randomDataSampleAnnotationRatio: {
			M: "Random",
			T: "integer",
			C: "Approximate number of classes in each sample annotation when creating random data",
			D: "2"
		},
		xAxis2Values: {
			M: "X-Axis2",
			T: "array",
			C: "Values for the ticks in the 2nd X axis",
			D: "[]",
			U: {
				StackedLine: "true",
				StackedPercentLine: "true",
				BarLine: "true",
				AreaLine: "true"
			}
		},
		freezeRowBottom: {
			M: "Data Table",
			T: "integer",
			C: "Number of rows to freeze at the bottom of the data table",
			D: "0"
		},
		overrideEventlessNodes: {
			H: ["{*}"],
			M: "Network Graphs",
			T: "boolean",
			C: "Flag to override nodes that do not take events to be able to edit them",
			D: "false"
		},
		xAxisTransformTicks: {
			H: ['{*,"xAxisTransform":"log10","graphType":"Scatter2D"}'],
			M: "X-Axis",
			T: "boolean",
			C: "Flag to transform the values of the ticks in the X axis",
			D: "true",
			U: {
				ScatterBubble2D: "true",
				Scatter2D: "true"
			}
		},
		tagCloudTextEllipticity: {
			H: ["{*}"],
			M: "Tag Cloud",
			T: "float",
			C: "Ellipticity for the for text in tag cloud visualizations",
			D: "0.65"
		},
		legendScaleFontFactor: {
			H: ["{*}"],
			M: "Legends",
			T: "float",
			C: "Scaling factor used to increase or decrease legend font size in the canvas.",
			D: "1"
		},
		tmpAsciiArray: {
			Z: "true",
			M: "Data",
			T: "array",
			C: "A temporary array to enable sorting data asciibetically."
		},
		boxplotDataPointTransparency: {
			S: ["showBoxplotOriginalData", "boxplotDataPointRatio", "jitter"],
			H: ['{"data":"Boxplot","jitter":true,"showBoxplotOriginalData":true,"boxplotDataPointTransparency":0.5,"functions":["groupSamples:Factor1"]}', '{"data":"Boxplot","jitter":true,"showBoxplotOriginalData":true,"boxplotDataPointTransparency":0.2,"functions":["groupSamples:Factor1"]}'],
			M: "Boxplot Graphs",
			T: "float",
			C: "Fraction to adjust color transparency for the data points when displaying original data in boxplots.",
			D: "0.5"
		},
		showRingLegend: {
			H: ['{*,"data":"Circular","segregateVariablesBy":"Ring"}'],
			M: "Circular Graphs",
			T: "boolean",
			C: "Flag to show legends in each ring of a circular graph",
			D: "true"
		},
		sma50Color: {
			M: "Candlestick Plots",
			T: "color",
			C: "The color for the 50 day single moving average",
			D: "rgb(0,0,0)"
		},
		areaIsCumulative: {
			H: ['{*,"transparency":0.5}'],
			M: "Area Graphs",
			T: "boolean",
			C: "Flag to treat area graphs as cumulative values",
			D: "false"
		},
		trackNameFont: {
			Z: "true",
			M: "Genome Browser",
			T: "font",
			C: "Font for the text of the tracks in the genome browser"
		},
		randomData: {
			Z: "true",
			M: "Random",
			T: "boolean",
			C: "Flag to indicate random data for debug and demonstration purposes"
		},
		jitter: {
			H: ['{"data":"Boxplot","graphType":"Dotplot","jitter":true,"functions":["groupSamples:Factor1"]}', '{"data":"Boxplot","graphType":"Dotplot","jitter":false,"functions":["groupSamples:Factor1"]}', '{"data":"Boxplot","graphType":"Boxplot","jitter":true,"showBoxplotOriginalData":true,"functions":["groupSamples:Factor1"]}', '{"data":"Boxplot","graphType":"Boxplot","jitter":false,"showBoxplotOriginalData":true,"functions":["groupSamples:Factor1"]}'],
			S: ["showBoxplotOriginalData", "boxplotDataPointTransparency", "boxplotDataPointRatio"],
			M: "Plot area",
			T: "boolean",
			C: "Flag to jitter the point in dotplots and boxplots",
			D: "true",
			U: {
				Boxplot: "true",
				DotLine: "true",
				Dotplot: "true"
			}
		},
		pieColors: {
			H: ['{"data":"Generic","graphType":"Pie", "pieColors":["rgb(0,0,117)", "rgb(117,0,36)", "rgb(117,88,0)", "rgb(53,117,0)", "rgb(76,0,117)", "rgb(117,53,0)", "rgb(117,117,0)", "rgb(0,117,117)", "rgb(117,0,0)", "rgb(117,97,0)", "rgb(28,0,117)", "rgb(0,117,0)", "rgb(117,0,117)", "rgb(117,67,0)", "rgb(97,117,0)", "rgb(0,66,117)", "rgb(50,0,117)", "rgb(117,33,0)", "rgb(117,107,0)", "rgb(0,117,67)", "rgb(117,0,66)", "rgb(117,78,0)", "rgb(78,117,0)", "rgb(0,36,117)"]}'],
			M: "Pie Charts",
			T: "array",
			C: "Pie Colors. Defaults to the parameter colors.",
			D: "[]"
		},
		networkDivisions: {
			Z: "true",
			M: "Network Graphs",
			T: "integer",
			C: "Number of angular divisions in the radial network."
		},
		resizerDraw: {
			M: "Axis Resizer",
			T: "boolean",
			C: "Flag to make the axis resizers draw the canvas as they move",
			D: "false"
		},
		temperature: {
			H: ['{*,"data":"LesMiserables","networkLayoutType":"forceDirected","colorNodeBy":"group"}'],
			M: "Network Graphs",
			T: "integer",
			C: "Temperature to limit displacement at later stages of forceDirected and organic layouts. A value based on the number of node and edges will be assigned if not specified",
			D: "0"
		},
		indicatorWidth: {
			H: ['{*,"graphType":"Heatmap"}'],
			M: "Indicators",
			T: "integer",
			C: "Length in pixels for the heatmap indicator line width used for increase the size of the indicator",
			D: "1"
		},
		sequenceFontSize: {
			H: ["{*}"],
			M: "Genome Browser",
			T: "integer",
			C: "Size in pixels for the font size of text of the sequence in the genome browser",
			D: "10"
		},
		featureTypeDefault: {
			O: ["box", "bar", "heatmap", "sequence", "triangle", "line"],
			M: "Genome Browser",
			T: "option",
			C: "Default type for the feature in the genome browser",
			D: "line"
		},
		panningStep: {
			H: ['{*,"graphType":"Heatmap"}'],
			M: "Zooming and Panning",
			T: "float",
			C: "Percentage step for panning networks.",
			D: "0.2"
		},
		contourYBinSize: {
			H: ['{"data":"Random:50:50","functions":["createContour"],"contourXBinSize":5,"contourYBinSize":5,"contourZBinSize":5}', '{"data":"Random:50:50","functions":["createContour"],"contourXBinSize":10,"contourYBinSize":10,"contourZBinSize":10}'],
			S: ["createContour"],
			M: "Scatter Plots",
			T: "integer",
			C: "Size of Y bins in contour plots",
			D: "false"
		},
		zAxisValues: {
			M: "Z-Axis",
			T: "array",
			C: "Values for the ticks in the Z axis",
			D: "[]"
		},
		disableAxisResizer: {
			H: ["{*}"],
			M: "Events",
			T: "boolean",
			C: "Flag to disable the axis resizer.",
			D: "false"
		},
		overlayFontSize: {
			H: ['{*,"autoScaleFont":false,"graphType":"Heatmap","data":"Random:10:10:3:3","varOverlays":["Annt1","Annt2","Annt3"],"smpOverlays":["Factor1","Factor2","Factor3"]}'],
			M: "Overlays",
			T: "integer",
			C: "Font size for the overlays in one dimensional plots",
			D: "6"
		},
		backgroundWindowGradientOrientation: {
			S: ["backgroundType"],
			H: ['{*,"backgroundType":"windowGradient"}'],
			O: ["vertical", "horizontal"],
			M: "Background",
			T: "option",
			C: "Specifies the orientation of the gradient if the background type is of the type 'windowGradient' or 'windowGradient2'.",
			D: "vertical"
		},
		yAxisTransformTicks: {
			H: ['{*,"yAxisTransform":"log10","graphType":"Scatter2D"}'],
			M: "Y-Axis",
			T: "boolean",
			C: "Flag to transform the values of the ticks in the Y axis",
			D: "true"
		},
		isCreateHistogram: {
			Z: "true",
			M: "Histograms",
			T: "boolean",
			C: "Flag to indicate there is a histogram",
			D: "false"
		},
		setMaxX2: {
			H: ['{"graphType":"BarLine","setMaxX2":200}', '{"graphType":"BarLine","setMaxX2":50}', '{"graphType":"BarLine","setMaxX2":null}'],
			M: "X-Axis2",
			T: "float",
			C: "Maximum value to set the data in the 2nd axis",
			D: "null",
			U: {
				StackedLine: "true",
				StackedPercentLine: "true",
				BarLine: "true",
				AreaLine: "true"
			}
		},
		autoScaleFont: {
			S: ["smpLabelFontSize", "varLabelFontSize", "legendFontSize", "axisTickFontSize", "axisTitleFontSize"],
			H: ['{*,"title":"Graph Title"}'],
			M: "Text",
			T: "boolean",
			C: "Flag to automatically adjust the font size in many visualization. Please be aware that scaling factors can still modify the font size. This flag needs to be false for the text to accept the specified font size.",
			D: "true"
		},
		rAxisValues: {
			M: "R-Axis",
			T: "array",
			C: "Values for the ticks in the R axis",
			D: "[]"
		},
		varIndicesStart: {
			Z: "true",
			M: "Heatmap Graphs",
			T: "integer",
			C: "Number that indicates starting point for variables in heatmaps when the canvas is zoom in."
		},
		backgroundGradient2Color: {
			S: ["backgroundType", "backgroundGradient1Color"],
			H: ['{*,"backgroundType":"gradient"}'],
			M: "Background",
			T: "color",
			C: "Specifies the second color of the gradient if the background type is of the type of 'gradient'.",
			D: "rgb(0,0,36)"
		},
		videoGrid: {
			H: ['{*,"backgroundType":"video","backgroundVideo":["http://video-js.zencoder.com/oceans-clip.mp4", "http://video-js.zencoder.com/oceans-clip.webm"]}'],
			M: "Videos",
			T: "boolean",
			C: "Flag to show grid in video",
			D: "false"
		},
		decorationFontStyle: {
			H: ['{*,"showDecorations":true,"graphType":"Scatter2D","data":"Random:16:2:0:0","functions":["addNormalDistributionLine", "draw"]}'],
			O: ["", "bold", "italic", "bold italic"],
			M: "Decorations",
			T: "option",
			C: "Font style for the decorations. @default"
		},
		dataFilterWidth: {
			H: ["{*}"],
			M: "Events",
			T: "integer",
			C: "Size in pixels for the data filters.",
			D: "200"
		},
		overlayFontStyle: {
			H: ['{*,"graphType":"Heatmap","data":"Random:10:10:3:3","varOverlays":["Annt1","Annt2","Annt3"],"smpOverlays":["Factor1","Factor2","Factor3"]}'],
			O: ["", "bold", "italic", "bold italic"],
			M: "Overlays",
			T: "option",
			C: "Font style for the overlays. @default"
		},
		transparency: {
			H: ["{*}"],
			M: "General",
			T: "float",
			C: "Percentage of transparency applied to all elements in the visualizations",
			D: "null"
		},
		smpOverlayProperties: {
			M: "Overlays",
			T: "object",
			C: "Object to assign properties to the variable overlays. The key should be an annotation in the 'data.z' object and the value may contain 'type' which could be either one of the one dimensional graph types or increasing, or decreasing for continuous annotations; 'color' to assign the color for the bar, line, etc.; 'level' which is an object where the key is the level and the value is the corresponding color. 'height' to identify how tall the overlay will be",
			D: "{}"
		},
		zAxisTickColor: {
			H: ['{*,"graphType":"Scatter3D"}'],
			M: "Z-Axis",
			T: "color",
			C: "Color for the tick lines in the Z axis",
			D: "rgb(204,204,204)"
		},
		transform: {
			S: ["transformType", "transformBase", "ratioReference", "zscoreAxis"],
			O: ["false", "log2", "log10", "exp2", "exp10", "percentile", "zscore", "ratio", "ratio2", "ratio10", "save", "reset", "undo"],
			M: "Functions",
			T: "option",
			C: "Transform all the data. Warning: the option 'save' overwrites the original data",
			U: {
				StackedPercent: "true",
				Bar: "true",
				Correletion: "true",
				Pie: "true",
				ScatterBubble2D: "true",
				Barline: "true",
				StackedLine: "true",
				Scatter2D: "true",
				Dotplot: "true",
				Boxplot: "true",
				DotLine: "true",
				StackedPercentLine: "true",
				Scatter3D: "true",
				Area: "true",
				Line: "true",
				Stacked: "true",
				Heatmap: "true",
				AreaLine: "true"
			}
		},
		transformType: {
			H: ["{*}"],
			O: ["false", "log2", "log10", "exp2", "exp10", "percentile", "zscore", "ratio", "ratio2", "ratio10", "save", "reset", "undo"],
			M: "Data",
			T: "option",
			C: "Default transformation type.",
			D: "false"
		},
		timeValues: {
			M: "X-Axis",
			T: "array",
			C: "Array containing the tick values when the the graph is a time series",
			D: "[]"
		},
		sequenceKColor: {
			H: ["{*}"],
			M: "Genome Browser",
			T: "color",
			C: "Color for the degenerate G/T and lysines in the genome browser",
			D: "rgb(255,0,0)"
		},
		backgroundWindowGradient1Color: {
			S: ["backgroundType"],
			H: ['{*,"backgroundType":"windowSolidGradient"}'],
			M: "Background",
			T: "color",
			C: "Specifies the first color of the gradient if the background type is of the type of 'windowGradient'.",
			D: "rgb(0,0,200)"
		},
		disableDataTable: {
			H: ["{*}"],
			M: "Events",
			T: "boolean",
			C: "Flag to disable showing data table",
			D: "false"
		},
		maxFeatureStringLen: {
			H: ["{*}"],
			M: "Genome Browser",
			T: "integer",
			C: "Maximum length in characters a feature label can have so anything above is truncated.",
			D: "50"
		},
		yAxis: {
			H: ['{"xAxis":["Sample1","Sample2","Sample3"],"yAxis":["Sample4","Sample5","Sample6"],"graphType":"Scatter2D"}'],
			M: "Y-Axis",
			T: "array",
			C: "Name of the samples groups or variables to be displayed in the Y axis",
			D: "[]",
			X: "getSamplesAsArray",
			U: {
				ScatterBubble2D: "true",
				Scatter2D: "true"
			}
		},
		setMinX: {
			H: ['{"setMinX":50}', '{"setMinX":20}', '{"setMinX":null}'],
			M: "X-Axis",
			T: "float",
			C: "Minimum value to set the data in the X axis",
			D: "null"
		},
		sizeBy: {
			S: ["sizeByData"],
			O: ["false", "variable"],
			T: "option",
			X: "getXZData",
			H: ['{"graphType":"Scatter3D","sizeBy":"Annt1"}', '{"graphType":"Scatter3D","sizeBy":"Sample4"}', '{"graphType":"Dotplot","sizeBy":"Factor1"}', '{"graphType":"Dotplot","sizeBy":"Annt1"}', '{"graphType":"Dotplot","sizeBy":"variable"}'],
			M: "Data Point Attributes",
			D: "false",
			C: "Name of a variable annotation or a sample name or the string 'variable' to size the variables. When sizeByData is specified sizeBy is used for the title in the legend."
		},
		featureTranslateShow: {
			H: ["{*}"],
			M: "Genome Browser",
			T: "boolean",
			C: "Flag use to show tranlation",
			D: "true"
		},
		varTitleFont: {
			Z: "true",
			M: "Variables",
			T: "font",
			C: "Font for the variable titles in one dimensional plots"
		},
		videoClassName: {
			H: ['{"backgroundType":"video","backgroundVideo":["http://video-js.zencoder.com/oceans-clip.mp4", "http://video-js.zencoder.com/oceans-clip.webm"]}'],
			M: "Videos",
			T: "string",
			C: "Video class name / css for videos",
			D: "video-js vjs-default-skin"
		},
		preScaleNetwork: {
			H: ['{*,"data":"LesMiserables","networkLayoutType":"forceDirected","colorNodeBy":"group"}'],
			M: "Network Graphs",
			T: "boolean",
			C: "Flag to prescale or not the network. This is an aesthetic parameter to make the graph look nicer... Sometimes...",
			D: "false"
		},
		sequencePColor: {
			H: ["{*}"],
			M: "Genome Browser",
			T: "color",
			C: "Color for the prolines in the genome browser",
			D: "rgb(255,165,0)"
		},
		randomDataSymmetrical: {
			M: "Random",
			T: "boolean",
			C: "Flag to add missing data to the random data for debug and demonstration purposes @cfg {} randomDataMissing",
			D: "false"
		},
		isHistogram: {
			S: ["scatterType", "histogramBarWidth"],
			H: ['{*,"graphType":"Scatter2D"}'],
			M: "Histograms",
			T: "boolean",
			C: "Flag to convert the 2D scatter plot into a histogram. That is, the points in the scatter plot are converted to bars that start at the bottom of the Y axis. It is useful to represent proteomics spectra. This can also be done setting scatterType to 'bar'.",
			D: "false"
		},
		smpTitleFontColor: {
			H: ['{*,"smpTitle":"Sample Title"}'],
			M: "Samples",
			T: "color",
			C: "Font color for the sample title in one dimensional plots",
			D: "rgb(0,0,0)"
		},
		xRotate: {
			H: ['{"graphType":"Scatter3D","xRotate":0}', '{"graphType":"Scatter3D","xRotate":45}'],
			M: "3D Attributes",
			T: "float",
			C: "Starting number of degrees to rotate graph arround the X axis",
			D: "45"
		},
		featureCoordinateShow: {
			H: ["{*}"],
			M: "Genome Browser",
			T: "boolean",
			C: "Flag use to show coordinates",
			D: "true"
		},
		weight: {
			Z: "true",
			M: "Combination Plots",
			T: "float",
			C: "Fraction of the canvas to be used (a value between 0 and 1). Used when multiple graphs are displayed in one canvas. Could be an number or an array of numbers."
		},
		indicatorCenter: {
			H: ['{*,"graphType":"Heatmap"}'],
			O: ["white", "black", "rainbow", "rainbow-green"],
			M: "Indicators",
			T: "option",
			C: "Color for the center of the heatmap indicator. If rainbow-red is specified the order of the colors to generate the gradient will be: red - blue - green. If rainbow-green is specified then the order of the colors to generate the gradient will be: green - blue - red. The option rainbow is an alias for rainbow-red.",
			D: "white"
		},
		showLegend: {
			H: ["{*}"],
			M: "Legends",
			T: "boolean",
			C: "Flag to show or not the legend in the graphs",
			D: "true"
		},
		sequenceYColor: {
			H: ["{*}"],
			M: "Genome Browser",
			T: "color",
			C: "Color for the degenerate C/T and tyrosines in the genome browser",
			D: "rgb(0,0,255)"
		},
		histogramBins: {
			H: ['{"data":"Random:200:2","functions":["createHistogram"],"histogramBins":50}', '{"data":"Random:200:2","functions":["createHistogram"],"histogramBins":10}'],
			S: ["createHistogram"],
			M: "Histograms",
			T: "integer",
			C: "Number of bins in histogram",
			D: "false"
		},
		control_forward_blue: {
			M: "Images",
			T: "image",
			C: "Relative path to an image file to the next button (not including the image directory)",
			D: "fast_forward.png"
		},
		yAxisTickStyle: {
			H: ['{*,"graphType":"Scatter2D"}'],
			O: ["solid", "dotted"],
			M: "Y-Axis",
			T: "option",
			C: "Style for the tick lines in the Y axis",
			D: "solid",
			U: {
				Scatter3D: "true",
				ScatterBubble2D: "true",
				Correlation: "true",
				Scatter2D: "true"
			}
		},
		varTitle: {
			H: ['{"varTitle":"Variable Title"}'],
			M: "Variables",
			T: "string",
			C: "Title for the sample axis in one dimensional plots",
			D: "false",
			U: {
				Heatmap: "true"
			}
		},
		networkFreeze: {
			H: ['{*,"data":"NetworkBasic","calculateLayout":false}'],
			M: "Network Graphs",
			T: "boolean",
			C: "Flag to prevent autoscaling for the network layout. Useful when images are part of the network.",
			D: "false"
		},
		scatterPlotMatrix: {
			H: ['{"graphType":"Scatter2D","scatterPlotMatrix":true}'],
			S: ["scatterPlotMatrixType"],
			M: "Scatter Plot Matrix",
			T: "boolean",
			C: "Flag to plot an n-1 x n-1 matrix of 2D sccaterplots",
			D: "false"
		},
		stockIndicators: {
			H: ['{"graphType":"Candlestick"}'],
			O: ["Sma5", "Sma10", "Sma20", "Sma25", "Sma50"],
			M: "Candlestick Plots",
			T: "array",
			C: "Stock technical indicators",
			D: ["'Sma5'", "'Sma10'", "'Sma25'"]
		},
		colorNodeBy: {
			H: ['{"data":"LesMiserables","colorNodeBy":"group"}'],
			M: "Network Graphs",
			T: "string",
			C: "Name of the attribute to color the nodes.",
			D: "false"
		},
		featureCoordinateHeight: {
			H: ["{*}"],
			M: "Genome Browser",
			T: "integer",
			C: "Default size in pixels of the coordinates height",
			D: "12"
		},
		backgroundImage: {
			S: ["backgroundType"],
			H: ['{"backgroundType":"image","backgroundImage":"http://www.canvasxpress.org/images/nanotube.jpg"}', '{"backgroundType":"windowImage","backgroundImage":"http://www.canvasxpress.org/images/nanotube.jpg"}'],
			M: "Background",
			T: "url",
			C: "Specifies the url for the background image when the background type is of the type 'image' or 'windowImage'.",
			D: "false"
		},
		showPieSampleLabel: {
			H: ['{*,"data":"Generic","xAxis":["Sample1", "Sample2", "Sample3", "Sample4", "Sample5", "Sample6"],"layout":"2X3"}'],
			M: "Pie Charts",
			T: "boolean",
			C: "A flag to show the sample label when plotting multiple pies",
			D: "true"
		},
		minTextSize: {
			H: ['{*,"title":"Graph Title"}'],
			M: "Text",
			T: "integer",
			C: "Minimum size for any text in the canvas.",
			D: "4"
		},
		varLabelFontColor: {
			H: ["{*}"],
			M: "Variables",
			T: "color",
			C: "Font color for the variable labels in one dimensional plots",
			D: "rgb(0,0,0)",
			U: {
				Heatmap: "true"
			}
		},
		isBoxPlotCalc: {
			Z: "true",
			M: "Data",
			T: "boolean",
			C: "Flag to indicate if the iqr has been calculated if the graph type is Boxplot."
		},
		acknowledgmentIcon: {
			H: ['{*,"acknowledgment":true}'],
			S: ["acknowledgment", "acknowledgmentIconPosition"],
			O: ["cx.png", "cxn.png"],
			M: "Acknowledgment",
			T: "option",
			C: "Specifies the acknowledgment canvasXpress icon",
			D: "cx.png"
		},
		pieSegmentSeparation: {
			H: ["{*}"],
			M: "Pie Charts",
			T: "integer",
			C: "Length in pixels for the separation of the pieces of the pie charts",
			D: "1"
		},
		nodeFontStyle: {
			H: ["{*}"],
			O: ["", "bold", "italic", "bold italic"],
			M: "Network Graphs",
			T: "option",
			C: "Font style for the node label. @default"
		},
		smpLabelOrientation: {
			H: ['{*,"data":"Circular","segregateVariablesBy":"Ring","segregateSamplesBy":"Segment"}'],
			O: ["perpendicular", "circular"],
			M: "Circular Graphs",
			T: "option",
			C: "Orientation to show the sample names",
			D: "perpendicular"
		},
		timeTicksFirst: {
			H: ['{*,"isGraphTime":true,"data":"Random:1:150:0:0:0:0:1","showVolume":false}'],
			M: "X-Axis",
			T: "boolean",
			C: "Flag to indicate whether to use the first date on a time graph or the last",
			D: "false"
		},
		remoteParams: {
			M: "Remote Procedures",
			T: "object",
			C: "Object to hold parameters used to obtain data remotely. The target property will be always added to the method as well as the direction [next|prev] (see below.",
			D: "{}"
		},
		dotLength: {
			H: ['{*,"data":"DashDot","calculateLayout":false,"graphType":"Network"}'],
			M: "Lines",
			T: "integer",
			C: "Size in pixels of the length between dots in the doted lines.",
			D: "1"
		},
		zAxisMinorValues: {
			M: "Z-Axis",
			T: "array",
			C: "Values for the minor ticks in the Z axis",
			D: "[]"
		},
		boxplotDataPointRatio: {
			S: ["showBoxplotOriginalData", "boxplotDataPointTransparency", "jitter"],
			H: ['{"data":"Boxplot","jitter":true,"showBoxplotOriginalData":true,"boxplotDataPointRatio":2,"functions":["groupSamples:Factor1"]}', '{"data":"Boxplot","jitter":true,"showBoxplotOriginalData":true,"boxplotDataPointRatio":4,"functions":["groupSamples:Factor1"]}'],
			M: "Boxplot Graphs",
			T: "float",
			C: "Ratio to adjust the size of the data points when displaying original data in boxplots. The higher the number the smaller the data points",
			D: "2"
		},
		smpHighlightColor: {
			H: ['{*,"highlightSmp":["Sample1","Sample3"]}'],
			M: "Samples",
			T: "color",
			C: "The color for the higlighted samples.",
			D: "rgb(255,0,0)"
		},
		network2DRotate: {
			Z: "true",
			M: "Network Graphs",
			T: "integer",
			C: "Number of degrees to rotate network arround the X axis"
		},
		overrideAnchorNodes: {
			H: ["{*}"],
			M: "Network Graphs",
			T: "boolean",
			C: "Flag to override anchor nodes",
			D: "false"
		},
		clusterSamples: {
			S: ["distance", "linkage", "clusterAxis", "imputeMethod", "centerData"],
			M: "Functions",
			T: "void",
			C: "Cluster samples based on data and generate a dendrogram on the sample axis. It takes no parameters",
			U: {
				StackedPercent: "true",
				Boxplot: "true",
				Bar: "true",
				StackedPercentLine: "true",
				Area: "true",
				Line: "true",
				StackedLine: "true",
				Dotplot: "true",
				AreaLine: "true",
				Heatmap: "true",
				Stacked: "true"
			}
		},
		arrowPointSize: {
			H: ['{*,"data":"Lines","calculateLayout":false,"graphType":"Network"}'],
			M: "Lines",
			T: "integer",
			C: "Size in pixels of the arrow head in arrow lines.",
			D: "10"
		},
		yAxisValues: {
			M: "Y-Axis",
			T: "array",
			C: "Values for the ticks in the Y axis",
			D: "[]"
		},
		sequenceFill: {
			H: ["{*}"],
			M: "Genome Browser",
			T: "color",
			C: "Color for the background when showing sequnces in the box or sequence object in the Genome. The default is to use the background of the object. If specied a valid color then all the background of sequences will be uniform",
			D: "false"
		},
		sma25Color: {
			H: ['{*,"stockIndicators":["Sma25"]}'],
			M: "Candlestick Plots",
			T: "color",
			C: "The color for the 25 day single moving average",
			D: "rgb(255,0,255)"
		},
		control_play_blue: {
			M: "Images",
			T: "image",
			C: "Relative path to an image file to the play button (not including the image directory)",
			D: "play.png"
		},
		titleColor: {
			S: ["title", "titleHeight"],
			H: ['{*,"title":"Graph Title"}'],
			M: "Titles and Subtitles",
			T: "color",
			C: "Color for the title",
			D: "rgb(0,0,0)"
		},
		outlineBy: {
			H: ["{*}"],
			S: ["outlineByData"],
			M: "Data Point Attributes",
			T: "string",
			C: "Name of the annotation for the outline when drawing a multidimensional Heatmap",
			D: "false",
			U: {
				Heatmap: "true"
			}
		},
		maxSubMenus: {
			H: ["{*}", "{*}"],
			M: "Events",
			T: "integer",
			C: "Maximum number of submenus in the context menus",
			D: "18"
		},
		ratioGroupReference: {
			O: ["false"],
			M: "Data",
			T: "option",
			C: "Name of the group used in ratio transformation.",
			D: "false",
			X: "getXData"
		},
		sortVariablesByCategory: {
			S: ["sortDir", "sortVariablesBySample"],
			M: "Functions",
			T: "array",
			C: "Sort the variables by a variable category (data.z object)",
			X: "getZData",
			U: {
				StackedPercent: "true",
				Boxplot: "true",
				DotLine: "true",
				Bar: "true",
				Correletion: "true",
				StackedPercentLine: "true",
				Pie: "true",
				Barline: "true",
				Area: "true",
				StackedLine: "true",
				Line: "true",
				Dotplot: "true",
				AreaLine: "true",
				Heatmap: "true",
				Stacked: "true"
			}
		},
		desegregateVariables: {
			S: ["segregateVariables"],
			M: "Functions",
			T: "void",
			C: "Desegregate variables previously segregated based on a variable category (data.z object)",
			U: {
				StackedPercent: "true",
				Boxplot: "true",
				DotLine: "true",
				Bar: "true",
				Correletion: "true",
				StackedPercentLine: "true",
				Pie: "true",
				Barline: "true",
				Area: "true",
				StackedLine: "true",
				Line: "true",
				Dotplot: "true",
				AreaLine: "true",
				Heatmap: "true",
				Stacked: "true"
			}
		},
		setMax: {
			Z: "true",
			M: "Axis",
			T: "float",
			C: "Maximum value to set the data",
			D: "null"
		},
		selectDataModeDescription: {
			H: ['{"selectDataMode":"name","selectDataModeDescription":false}', '{"selectDataMode":"name","selectDataModeDescription":"Annt1"}'],
			O: ["false"],
			M: "Scatter Plots",
			T: "option",
			C: "Variable label to display when highlighting selected data points that must be in the 'data.z' object. (Shift + mouse drag) @see{selectDataMode}",
			D: "false",
			X: "getZData"
		},
		includeDOE: {
			M: "DOE",
			T: "array",
			C: "Array containing the factors to include when exploring the DOE. If left empty all the factors will be included",
			D: "[]"
		},
		networkLayoutType: {
			H: ['{"data":"LesMiserables","networkLayoutType":"forceDirected","colorNodeBy":"group"}', '{"data":"LesMiserables","networkLayoutType":"organic","colorNodeBy":"group"}', '{"data":"NetworkRadial","networkLayoutType":"radial"}'],
			O: ["forceDirected", "organic", "radial"],
			M: "Network Graphs",
			T: "option",
			C: "Type of network layout.",
			D: "forceDirected"
		},
		zoom: {
			H: ['{*,"graphType":"Heatmap"}'],
			M: "Zooming and Panning",
			T: "float",
			C: "Zoom factor for the networks. A number greater than zero",
			D: "1"
		},
		legendBackgroundColor: {
			S: ["legendBox"],
			H: ["{*}"],
			M: "Legends",
			T: "color",
			C: "Color for the legend background",
			D: "rgb(255,255,255)"
		},
		binConfigurations: {
			M: "Bins",
			T: "object",
			C: "Properties for the binning functions",
			D: "{}"
		},
		citationFont: {
			Z: "true",
			M: "Citations or References",
			T: "font",
			C: "Font for the reference citation"
		},
		initialTemperature: {
			H: ['{*,"data":"LesMiserables","networkLayoutType":"forceDirected","colorNodeBy":"group"}'],
			M: "Network Graphs",
			T: "integer",
			C: "Initial temperature to limit displacement at later stages of forceDirected and organic layouts. A value based on the number of node and edges will be assigned if not specified",
			D: "0"
		},
		overlayScaleFontFactor: {
			H: ['{*,"graphType":"Heatmap","data":"Random:10:10:3:3","varOverlays":["Annt1","Annt2","Annt3"],"smpOverlays":["Factor1","Factor2","Factor3"]}'],
			M: "Overlays",
			T: "float",
			C: "Scaling factor used to increse or decrease overlays font size in the canvas in one dimensional plots",
			D: "1"
		},
		showNetworkNodesLegend: {
			H: ['{*,"data":"NetworkBasic","calculateLayout":false}'],
			M: "Network Graphs",
			T: "boolean",
			C: "Flag to show node legends in the networks",
			D: "true"
		},
		shadowBlur: {
			S: ["showShadow"],
			H: ['{*,"showShadow":true}'],
			M: "Shadows",
			T: "integer",
			C: "Amount in blur for the shadow.",
			D: "2"
		},
		perspectiveFactor: {
			H: ['{*,"graphType":"Scatter3D","data":"3DScatter"}'],
			M: "3D Attributes",
			T: "float",
			C: "Factor to use to make the 3D perspective. The higher the number the more perspective. Perspective of zero is no perspective at all.",
			D: "1.5"
		},
		varTitleLabelOverlayPosition: {
			H: ["{*}"],
			O: ["bottom", "top"],
			M: "Heatmap Graphs",
			T: "option",
			C: "Position for variable labels",
			D: "bottom"
		},
		remoteAutoPlay: {
			M: "Remote Procedures",
			T: "boolean",
			C: "Flag to iterate over remote data sets",
			D: "false"
		},
		recalculateLayout: {
			M: "Functions",
			T: "void",
			C: "Recalculate the network layout",
			U: {
				Scatter3D: "true",
				ScatterBubble2D: "true",
				Scatter2D: "true"
			}
		},
		varTitleFontStyle: {
			H: ['{*,"varTitle":"Variable Title"}'],
			O: ["", "bold", "italic", "bold italic"],
			M: "Variables",
			T: "option",
			C: "Font style for the var title. @default",
			U: {
				Heatmap: "true"
			}
		},
		sequenceXColor: {
			H: ["{*}"],
			M: "Genome Browser",
			T: "color",
			C: "Color for the any aminoacid code in the genome browser",
			D: "rgb(0,0,0)"
		},
		sizeNodeBy: {
			H: ['{"data":"LesMiserables","colorNodeBy":"group","sizeNodeBy":"group"}'],
			M: "Network Graphs",
			T: "string",
			C: "Name of the attribute to size the nodes.",
			D: "false"
		},
		overlayFontColor: {
			H: ['{*,"graphType":"Heatmap","data":"Random:10:10:3:3","varOverlays":["Annt1","Annt2","Annt3"],"smpOverlays":["Factor1","Factor2","Factor3"]}'],
			M: "Overlays",
			T: "color",
			C: "Color for the overlays in one dimensional plots",
			D: "rgb(0,0,0)"
		},
		snapshotCopyChangeOnly: {
			M: "Animation",
			T: "boolean",
			C: "Flag to indicate whether to copy all or only the changed attributes in the network animation. This optimizes memory usage for snapshots.",
			D: "true"
		},
		axisTickFontSize: {
			S: ["autoScaleFont", "axisTickScaleFontFactor"],
			H: ['{*,"autoScaleFont":false}'],
			M: "Axis",
			T: "integer",
			C: "Font size for the axis ticks in one and two dimensional plots. Be aware that auto scaling font must be turned off for this property to take effect. A more convenient way to modify the size is to use the tick scaling factor",
			D: "10"
		},
		sequenceGColor: {
			H: ["{*}"],
			M: "Genome Browser",
			T: "color",
			C: "Color for the guanines and glycines in the genome browser",
			D: "rgb(0,0,0)"
		},
		xAxisMinorTicks: {
			H: ["{*}"],
			M: "X-Axis",
			T: "boolean",
			C: "A flag to show minor tick lines in the X axis",
			D: "true"
		},
		legendPosition: {
			H: ["{*}"],
			O: ["right", "bottom"],
			M: "Legends",
			T: "option",
			C: "Position for the legend in the graphs",
			D: "right"
		},
		dashLength: {
			H: ['{*,"data":"DashDot","calculateLayout":false,"graphType":"Network"}'],
			M: "Lines",
			T: "integer",
			C: "Size in pixels of the length of the dashes and the separation between the dashes in the dashed lines.",
			D: "8"
		},
		zAxisTitle: {
			H: ['{"graphType":"Scatter3D","zAxisTitle":"Z-axis title"}'],
			M: "Z-Axis",
			T: "string",
			C: "Title for the Z axis",
			D: "false"
		},
		remoteParentId: {
			Z: "true",
			M: "Remote Procedures",
			T: "string",
			C: "Id for the parent holding the remoteWindow to prevent id collisions"
		},
		groupingFactors: {
			Z: "true",
			M: "Data",
			T: "array",
			C: "An array that holds the group names used for grouping the data. It must be a category in the 'data.x' object",
			D: "[]"
		},
		configuratorWidth: {
			H: ["{*}"],
			M: "Events",
			T: "integer",
			C: "Size in pixels for the configurator.",
			D: "250"
		},
		featureQualityHeight: {
			H: ["{*}"],
			M: "Genome Browser",
			T: "integer",
			C: "Default size in pixels of the quality height",
			D: "12"
		},
		joinType: {
			H: ['{*,"data":"Lines","calculateLayout":false,"graphType":"Network"}'],
			O: ["mitter", "bevel", "round"],
			M: "Lines",
			T: "option",
			C: "Default type for joining lines.",
			D: "mitter"
		},
		translateX: {
			Z: "true",
			M: "Combination Plots",
			T: "float",
			C: "Amount to translate for the X axis."
		},
		networkRoot: {
			H: ['{"data":"NetworkRadial","networkLayoutType":"radial","networkRoot":"Gene1"}', '{"data":"NetworkRadial","networkLayoutType":"radial","networkRoot":"Gene2"}'],
			M: "Network Graphs",
			T: "string",
			C: "Node Id of the network root.",
			D: "false"
		},
		varOverlays: {
			H: ['{"graphType":"Heatmap","data":"Random:10:10:3:0","varOverlays":["Annt1","Annt2","Annt3"]}'],
			M: "Overlays",
			T: "array",
			C: "Variable annotations included in the 'data.z' object used in one dimensional plots",
			D: "[]",
			X: "getZData"
		},
		z3DRatio: {
			H: ['{"graphType":"Scatter3D","z3DRatio":0.5}', '{"graphType":"Scatter3D","z3DRatio":1}'],
			M: "3D Attributes",
			T: "float",
			C: "Value between 0 - 1 for adjusting the 3D of the Z Axis",
			D: "1",
			U: {
				Scatter3D: "true",
				Bar: "true"
			}
		},
		remoteUpdating: {
			Z: "true",
			M: "Remote Procedures",
			T: "boolean",
			C: "Flag to indicate that updating data is in progress"
		},
		filterFeatureBy: {
			H: ["{*}"],
			M: "Genome Browser",
			T: "filter",
			C: "Filter features by their properties used in genome browser	  *",
			D: "[]",
			X: "getFeatureData"
		},
		foreground: {
			H: ['{*,"data":"Random:1:3:0:0","graphType":"Dotplot"}'],
			M: "Foreground",
			T: "color",
			C: "Specifies the foreground color for text or lines not covered in a more specific configuration property.",
			D: "rgb(0,0,0)"
		},
		plotByVariable: {
			H: ['{*,"graphType":"Bar"}'],
			M: "Plot area",
			T: "boolean",
			C: "Flag to indicate whether to group the data variable rather than by sample",
			D: "false"
		},
		rowHeight: {
			M: "Data Table",
			T: "integer",
			C: "Mumber of pixels for the height of cells in the data table",
			D: "18"
		},
		smpHairlineWidth: {
			H: ['{*,"graphType":"Bar","smpHairline":true}'],
			M: "Plot area",
			T: "float",
			C: "The width for the thin line that appears in the middle of the sample block just for aesthetics.",
			D: "0.3"
		},
		scatterType: {
			H: ['{*,"graphType":"Scatter2D","scatterType":"image","images":["met.png", "prot9.png", "prot8.png", "prot7.png", "prot6.png", "prot5.png"]}'],
			S: ["images", "isHistogram", "histogramBarWidth"],
			O: ["false", "line", "bar", "dot", "image", "lineImage", "lineStep"],
			M: "Scatter Plots",
			T: "option",
			C: "Type of scatter plot",
			D: "false"
		},
		standardDeviationType: {
			H: ['{"standardDeviationType":"unbiased","functions":["groupSamples:Factor1"]}', '{"standardDeviationType":"unbiased","functions":["groupSamples:Factor1"]}'],
			O: ["biased", "unbiased"],
			M: "Data",
			T: "option",
			C: "Type of Standard Deviation. 'biased' uses n as denominator and 'unbiased' uses (n - 1) as denominator where n is the number of values",
			D: "unbiased"
		},
		videoCurrentTime: {
			H: ['{*,"backgroundType":"video","backgroundVideo":["http://video-js.zencoder.com/oceans-clip.mp4", "http://video-js.zencoder.com/oceans-clip.webm"]}'],
			M: "Videos",
			T: "boolean",
			C: "Flag to show video current time",
			D: "false"
		},
		featureQualityValues: {
			H: ["{*}"],
			M: "Genome Browser",
			T: "boolean",
			C: "Flag use to show values for the quality",
			D: "false"
		},
		dendrogramHang: {
			H: ['{*,"data":"Generic","graphType":"Bar","showSmpDendrogram":true}'],
			M: "Dendrograms",
			T: "boolean",
			C: "Flag to show or not the nodes in the dendrogram as hanging or not similar to that one in R",
			D: "false"
		},
		bar3DInverseWeight: {
			H: ['{*,"data":"3DScatter","scatterType":"bar"}'],
			M: "3D Attributes",
			T: "float",
			C: "Value for adjusting the thickness of 3D bars. The larger the value the the thinner the bar",
			D: "1",
			U: {
				Scatter3D: "true"
			}
		},
		resizerPosition: {
			O: ["top", "rigth", "bottom", "left"],
			M: "Axis Resizer",
			T: "option",
			C: "Position for the axis resizer in complex plots",
			D: "bottom"
		},
		repulsiveForceFunction: {
			H: ['{*,"data":"LesMiserables","networkLayoutType":"forceDirected","colorNodeBy":"group"}'],
			O: ["square", "log", "pow", "sqrt"],
			M: "Network Graphs",
			T: "option",
			C: "Type of function to apply when calculating repulsive force in forceDirected network layouts",
			D: "square"
		},
		vennGroups: {
			H: ['{"vennGroups":2}', '{"vennGroups":3}', '{"vennGroups":4}'],
			M: "Venn Diagrams",
			T: "integer",
			C: "Number of groups in the Venn diagram",
			D: "4"
		},
		zAxis: {
			H: ['{"xAxis":["Sample1","Sample2"],"yAxis":["Sample3","Sample4"],"zAxis":["Sample5","Sample6"],"graphType":"ScatterBubble2D"}', '{"xAxis":["Sample1","Sample2"],"yAxis":["Sample3","Sample4"],"zAxis":["Sample5","Sample6"],"graphType":"Scatter3D"}'],
			M: "Z-Axis",
			T: "array",
			C: "Name of the samples groups or variables to be displayed in the Z axis",
			D: "[]",
			X: "getSamplesAsArray"
		},
		videoPlaybackRate: {
			H: ['{*,"backgroundType":"video","backgroundVideo":["http://video-js.zencoder.com/oceans-clip.mp4", "http://video-js.zencoder.com/oceans-clip.webm"]}'],
			M: "Videos",
			T: "float",
			C: "Video Playback Rate",
			D: "1"
		},
		lineType: {
			H: ['{*,"data":"Random:4:6","graphType":"Line"}'],
			O: ["rect", "spline"],
			M: "Line Graphs",
			T: "option",
			C: "Type of line used to join the points in line graphs",
			D: "rect"
		},
		y3DRatio: {
			H: ['{"graphType":"Scatter3D","y3DRatio":0.5}', '{"graphType":"Scatter3D","y3DRatio":1}'],
			M: "3D Attributes",
			T: "float",
			C: "Value between 0 - 1 for adjusting the 3D of the Y Axis",
			D: "1",
			U: {
				Scatter3D: "true",
				Bar: "true"
			}
		},
		zscoreAxis: {
			H: ["{*}"],
			O: ["samples", "variables"],
			M: "Data",
			T: "option",
			C: "Default axis to use to zcsore the data.",
			D: "samples"
		},
		featureStaggered: {
			H: ["{*}"],
			M: "Genome Browser",
			T: "boolean",
			C: "Flag use to stagger the features in the genome panel",
			D: "false"
		},
		decorationsWidth: {
			H: ['{*,"data":"NetworkDecorations","decorationsPosition":"top","networkFreezeOnLoad":true,"showDecorations":true,"calculateLayout":false,"decorations":["exp1","exp2","exp3"]}'],
			M: "Decorations",
			T: "integer",
			C: "Length in pixels of the width for the decorations in the networks",
			D: "10",
			U: {
				Network: "true"
			}
		},
		filterVarBy: {
			H: ["{*}"],
			M: "Variables",
			T: "filter",
			C: "Filter variables by their annotation included in the 'data.z' object used in one dimensional plots",
			D: "[]",
			X: "getZData"
		},
		moveParentsWithChildren: {
			H: ["{*}"],
			M: "Network Graphs",
			T: "boolean",
			C: "Flag to make parents move when a child is moved",
			D: "false"
		},
		disableMenu: {
			H: ["{*}"],
			M: "Events",
			T: "boolean",
			C: "Flag to disable showing the menu on right clicks",
			D: "false"
		},
		yAxisAbsMax: {
			Z: "true",
			M: "Y-Axis",
			T: "float",
			C: "Maximum non-filtered value for the data plotted in the Y axis"
		},
		maxPieSectors: {
			H: ['{"data":"Generic","maxPieSectors":2}', '{"data":"Generic","maxPieSectors":3}'],
			M: "Pie Charts",
			T: "float",
			C: "Max pie sectors. After that number the sectors will be put in a sector named 'other'.",
			D: "20"
		},
		featureFillColor: {
			H: ["{*}"],
			M: "Genome Browser",
			T: "color",
			C: "Default color for the fill of the feature in the genome browser",
			D: "rgb(255,255,255)"
		},
		xAxisAbsMin: {
			Z: "true",
			M: "X-Axis",
			T: "float",
			C: "Minimum non-filtered value for the data plotted in the X axis"
		},
		filterSkipNullKeys: {
			M: "Data Filters",
			T: "boolean",
			C: "Flag to indicate to bypass filtering when a key is non existent in the data objects",
			D: "false"
		},
		showFadeResizeMoveAnimation: {
			H: ["{*}"],
			M: "Events",
			T: "boolean",
			C: "Flag to show animation in data table, data filter and tool bar.",
			D: "true"
		},
		correlationLabelInterval: {
			H: ["{*}"],
			M: "Correlation Graphs",
			T: "integer",
			C: "Interval for the sample or variable labels in the correlation plot",
			D: "1"
		},
		networkForceConstant: {
			H: ['{*,"data":"LesMiserables","networkLayoutType":"forceDirected","colorNodeBy":"group"}'],
			M: "Network Graphs",
			T: "float",
			C: "Constant used for calculating attractive and repulsive forces in forcedDirected and organic layouts. A value based on the average area per node will be assigned if not specified",
			D: "0"
		},
		selectedBackgroundColor: {
			Z: "true",
			M: "Skins",
			T: "color",
			C: "Color for the highlight skin automatically calculated",
			D: "rgba(255,0,0,0.3)"
		},
		patterns: {
			H: ['{"data":"Random:14:1:0:0:1","graphType":"Bar","graphOrientation":"vertical","setMaxX":1,"setMinX":0,"smpLabelRotate":90,"patternBy":"variable","showLegend":false}'],
			S: ["patternImages", "patternNames"],
			M: "Patterns",
			T: "array",
			C: "Patterns used in visualizations to fill objects. This array must contain one or more pattern names and in concert with the color array can be used to specify the pattern colors for all filled objects in the visualizations."
		},
		networkShowDataTable: {
			O: ["nodes", "edges"],
			M: "Data Table",
			T: "option",
			C: "Show nodes or edges on data table",
			D: "nodes"
		},
		pseudoRandom: {
			M: "Random",
			T: "boolean",
			C: "Flag to indicate to use pseudo random rather than random",
			D: "false"
		},
		vennColors: {
			S: ["colors"],
			H: ['{"vennColors":["rgb(51,151,255)","rgb(151,255,51)","rgb(255,51,125)"],"vennGroups":3}'],
			M: "Venn Diagrams",
			T: "array",
			C: "Colors for the Venn bubles. If not specified the colors will be chosen from the colors array. Colors in this array need to be at least the same number of groups in the Venn diagram",
			D: "[]"
		},
		skipConfigurableProperties: {
			M: "Data Table/Filter",
			T: "boolean",
			C: "Flag to indicate to exclude configurable parameters in the data table and the data filters in Networks and Genome Browser",
			D: "true"
		},
		scaleX: {
			Z: "true",
			M: "Combination Plots",
			T: "float",
			C: "Scale factor for the X axis"
		},
		configuratorExamplesSize: {
			H: ["{*}"],
			M: "Events",
			T: "integer",
			C: "Size in pixels for the examples in the configurator.",
			D: "400"
		},
		gradientType: {
			S: ["gradient"],
			H: ['{*,"data":"Random:1:3:0:0","gradient":true}'],
			O: ["linear", "radial"],
			M: "Gradients",
			T: "option",
			C: "Specifies the gradient pattern.",
			D: "radial"
		},
		resizerType: {
			O: ["false", "samples", "box"],
			M: "Axis Resizer",
			T: "option",
			C: "String to indicate the type of axis resizer in complex plots",
			D: "false"
		},
		showDataValues: {
			H: ['{*,"graphType":"Bar"}'],
			M: "Plot area",
			T: "boolean",
			C: "Flag to indicate whether to show data values in the one bar graphs.",
			D: "false",
			U: {
				Bar: "true",
				Heatmap: "true"
			}
		},
		toolbarPermanent: {
			H: ["{*}"],
			M: "Events",
			T: "boolean",
			C: "Flag to make the toolbar permanently visible.",
			D: "false"
		},
		featureTracesShow: {
			H: ["{*}"],
			M: "Genome Browser",
			T: "boolean",
			C: "Flag use to show traces",
			D: "true"
		},
		contourXBinSize: {
			H: ['{"data":"Random:50:50","functions":["createContour"],"contourXBinSize":5,"contourYBinSize":5,"contourZBinSize":5}', '{"data":"Random:50:50","functions":["createContour"],"contourXBinSize":10,"contourYBinSize":10,"contourZBinSize":10}'],
			S: ["createContour"],
			M: "Scatter Plots",
			T: "integer",
			C: "Size of X bins in contour plots",
			D: "false"
		},
		hideUnhideSmps: {
			M: "Functions",
			T: "array",
			C: "Hide or unhide samples. It works like a switch",
			X: "getSamplesAsArray",
			U: {
				StackedPercent: "true",
				Bar: "true",
				Correletion: "true",
				Pie: "true",
				ScatterBubble2D: "true",
				Barline: "true",
				StackedLine: "true",
				Scatter2D: "true",
				Dotplot: "true",
				Boxplot: "true",
				DotLine: "true",
				StackedPercentLine: "true",
				Scatter3D: "true",
				Area: "true",
				Line: "true",
				Stacked: "true",
				Heatmap: "true",
				AreaLine: "true"
			}
		},
		decorationsColors: {
			H: ['{"data":"NetworkDecorations","decorationsPosition":"right","networkFreezeOnLoad":true,"showDecorations":true,"decorationsColors":["rgb(51,125,255)","rgb(125,255,51)","rgb(255,125,51)"],"calculateLayout":false,"decorations":["exp1","exp2","exp3"]}'],
			M: "Decorations",
			T: "array",
			C: "Array of colors used for selection in network decorations not to be confused by its singular form 'decorationsColor' above",
			D: "[]",
			U: {
				Network: "true"
			}
		},
		zAxisAbsMax: {
			Z: "true",
			M: "Z-Axis",
			T: "float",
			C: "Maximum non-filtered value for the data plotted in the Z axis"
		},
		imputeMethod: {
			H: ['{"graphType":"Heatmap","data":"Random:10:10::::::0.15","imputeMethod":"mean","functions":["clusterSamples","clusterVariables"]}', '{"graphType":"Heatmap","data":"Random:10:10::::::0.15","imputeMethod":"median","functions":["clusterSamples","clusterVariables"]}'],
			S: ["distance", "linkage", "clusterAxis", "centerData", "clusterSamples", "clusterVariables"],
			O: ["mean", "median"],
			M: "Clustering",
			T: "option",
			C: "Imputation method for missing data when clustering",
			D: "mean"
		},
		isMarketSwitched: {
			H: ['{"isGraphTime":true,"data":"Random:1:150:0:0:0:0:1","showVolume":false}'],
			Z: "true",
			M: "Data",
			T: "boolean",
			D: "false",
			C: "Flag to indicate if the data is a time series so there is no need to plot every time interval. It is boolean in one dimensional plots or a string indicating the axis which is timed 'x', 'y' or 'z' @cfg {boolean|string} isGraphTime"
		},
		randomMissingDataPercentage: {
			M: "Random",
			T: "float",
			C: "Default percentage of missing values when creating random data. A value between 0 and 1.",
			D: "0"
		},
		videoPreload: {
			H: ['{*,"backgroundType":"video","backgroundVideo":["http://video-js.zencoder.com/oceans-clip.mp4", "http://video-js.zencoder.com/oceans-clip.webm"]}'],
			O: ["Auto", "Metadata", "none"],
			M: "Videos",
			T: "option",
			C: "Preload type for videos",
			D: "none"
		},
		yAxisHistogramHeight: {
			H: ['{*,"graphType":"Scatter2D"}'],
			M: "Y-Axis",
			T: "integer",
			C: "Number of pixels for the histogram in the Y axis",
			D: "50"
		},
		highlightVar: {
			H: ['{"highlightVar":["Variable1","Variable3"]}'],
			M: "Variables",
			T: "array",
			C: "Name of variables in the 'data.y' object to highlight.",
			D: "[]",
			X: "getVariablesAsArray",
			U: {
				Heatmap: "true"
			}
		},
		smpHairline: {
			H: ['{*,"graphType":"Bar"}'],
			O: ["false", "solid", "dotted"],
			M: "Plot area",
			T: "option",
			C: "This is a thin line that appears in the middle of the bar graphs just for aesthetics.",
			D: "false"
		},
		sortSamplesByCategory: {
			S: ["sortDir", "sortSamplesByVariable"],
			M: "Functions",
			T: "array",
			C: "Sort the samples by a sample category (data.x object)",
			X: "getXData",
			U: {
				StackedPercent: "true",
				Boxplot: "true",
				DotLine: "true",
				Bar: "true",
				Correletion: "true",
				StackedPercentLine: "true",
				Pie: "true",
				Barline: "true",
				Area: "true",
				StackedLine: "true",
				Line: "true",
				Dotplot: "true",
				AreaLine: "true",
				Heatmap: "true",
				Stacked: "true"
			}
		},
		featuresProperties: {
			M: "Data Table/Filter",
			T: "array",
			C: "Two dimensional array with object properties not at the root level for the features in the Genome graph to include in the Data table and the data filter",
			D: "[]"
		},
		smpOverlayRecycleColors: {
			H: ['{*,"graphType":"Heatmap","data":"Random:10:10:3:3","varOverlays":["Annt1","Annt2","Annt3"],"smpOverlays":["Factor1","Factor2","Factor3"]}'],
			M: "Overlays",
			T: "boolean",
			C: "Flag to indicate to recycle sample overlay colors with each overlay",
			D: "false"
		},
		sequenceWColor: {
			H: ["{*}"],
			M: "Genome Browser",
			T: "color",
			C: "Color for the degenerate A/T and tryptophans in the genome browser",
			D: "rgb(0,0,255)"
		},
		fontStyle: {
			H: ['{*,"title":"Graph Title"}'],
			O: ["", "bold", "italic", "bold italic"],
			M: "Text",
			T: "option",
			C: "Font style. @default"
		},
		showBoxplotOriginalData: {
			S: ["boxplotDataPointRatio", "boxplotDataPointTransparency", "jitter"],
			H: ['{"data":"Boxplot","showBoxplotOriginalData":true,"functions":["groupSamples:Factor1"]}', '{"data":"Boxplot","showBoxplotOriginalData":false,"functions":["groupSamples:Factor1"]}'],
			M: "Boxplot Graphs",
			T: "boolean",
			C: "Flag to show original data in boxplots",
			D: "false"
		},
		rAxisTickColor: {
			H: ['{*,"data":"Circular2","rAxis":"Number","segregateVariablesBy":"Ring","segregateSamplesBy":"Segment"}'],
			M: "R-Axis",
			T: "color",
			C: "Color for the tick lines in the R axis",
			D: "rgb(0,0,0)"
		},
		trackNameFontStyle: {
			H: ["{*}"],
			O: ["", "bold", "italic", "bold italic"],
			M: "Genome Browser",
			T: "option",
			C: "Font style for the track name. @default"
		},
		videoControls: {
			H: ['{*,"backgroundType":"video","backgroundVideo":["http://video-js.zencoder.com/oceans-clip.mp4", "http://video-js.zencoder.com/oceans-clip.webm"]}'],
			M: "Videos",
			T: "boolean",
			C: "Flag to show controls in videos default true"
		},
		showVolume: {
			H: ["{*}"],
			M: "Candlestick Plots",
			T: "boolean",
			C: "Flag to show or not volume in the candlestick graphs",
			D: "true"
		},
		varLabelFontStyle: {
			H: ["{*}"],
			O: ["", "bold", "italic", "bold italic"],
			M: "Variables",
			T: "option",
			C: "Font style for the variable label. @default",
			U: {
				Heatmap: "true"
			}
		},
		sma10Color: {
			H: ['{*,"stockIndicators":["Sma10"]}'],
			M: "Candlestick Plots",
			T: "color",
			C: "The color for the 5 day single moving average",
			D: "rgb(0,255,0)"
		},
		ringsType: {
			H: ['{"data":"Circular","segregateVariablesBy":"Ring","ringsType":["bar","heatmap","dot"]}'],
			M: "Circular Graphs",
			T: "array",
			C: "Array containing the types for each ring in the circular plots",
			D: "[]"
		},
		menu_dropdown: {
			H: ["{*}"],
			M: "Images",
			T: "image",
			C: "Relative path to an image file to the drop down button (not including the image directory)",
			D: "menu_dropdown.png"
		},
		gradientOrientation: {
			S: ["backgroundType"],
			H: ['{*,"data":"Random:1:3:0:0","gradient":true,"gradientType":"linear"}'],
			O: ["vertical", "horizontal"],
			M: "Gradients",
			T: "option",
			C: "Specifies the orientation of the gradient if the gradient type is of the type 'linear'",
			D: "vertical"
		},
		refresehDataTableOnDraw: {
			M: "Data Table",
			T: "boolean",
			C: "Flag to indicate to refresh data after drawing the plot",
			D: "false"
		},
		randomNetworkReduce: {
			M: "Random",
			T: "boolean",
			C: "Flag to create or not a single random network for debug and demonstration purposes",
			D: "true",
			U: {
				Network: "true"
			}
		},
		varLabelFontSize: {
			S: ["autoScaleFont", "varLabelScaleFontFactor"],
			H: ['{"autoScaleFont":false,"varLabelFontSize":10}', '{"autoScaleFont":false,"varLabelFontSize":20}'],
			M: "Variables",
			T: "integer",
			C: "Size for the variable labels in one dimensional plots. Be aware that auto scaling font must be turned off for this property to take effect. A more convenient way to modify the size is to use the variable label scaling factor",
			D: "10",
			U: {
				Heatmap: "true"
			}
		},
		smpLabelFontSize: {
			S: ["autoScaleFont", "smpLabelScaleFontFactor"],
			H: ['{"autoScaleFont":false,"smpLabelFontSize":10}', '{"autoScaleFont":false,"smpLabelFontSize":20}'],
			M: "Samples",
			T: "integer",
			C: "Size for the sample labels in one dimensional plots. Be aware that auto scaling font must be turned off for this property to take effect. A more convenient way to modify the size is to use the sample label scaling factor",
			D: "10"
		},
		maxRotate: {
			M: "3D Attributes",
			T: "float",
			C: "Maximum number of degrees to rotate graph arround axes",
			D: "null"
		},
		sequenceAColor: {
			H: ["{*}"],
			M: "Genome Browser",
			T: "color",
			C: "Color for the adenines and alanines in the genome browser",
			D: "rgb(0,103,0)"
		},
		clusterVariables: {
			S: ["distance", "linkage", "clusterAxis", "imputeMethod", "centerData"],
			M: "Functions",
			T: "void",
			C: "Cluster variables based on data and generate a dendrogram on the variable axis. It takes no parameters",
			U: {
				Heatmap: "true"
			}
		},
		xAxis2TickFormat: {
			H: ['{"graphType":"BarLine","xAxis2TickFormat":"%.2f cxs","graphOrientation":"vertical"}'],
			M: "X-Axis2",
			T: "string",
			C: "Format for the tick values in the second X axis",
			D: "false"
		},
		dataEvent: {
			Z: "true",
			M: "Events",
			T: "array",
			C: "Array to store the areas that will trigger an event"
		},
		highlightNode: {
			H: ['{"highlightNode":["Gene1","Gene2"]}'],
			M: "Network Graphs",
			T: "array",
			C: "Name of nodes in the 'data.nodes' object to highlight.",
			D: "[]"
		},
		snapshots: {
			Z: "true",
			M: "Snapshots",
			T: "array",
			C: "Array to hold the data used in the animation"
		},
		control_rewind_blue: {
			M: "Images",
			T: "image",
			C: "Relative path to an image file to the previous button (not including the image directory)",
			D: "rewind.png"
		}
	},
	G: {
		name: {
			M: "Genome",
			T: "string",
			C: "Track name"
		}
	},
	E: {
		cap: {
			O: "butt, round, square",
			M: "Network",
			T: "option",
			C: "Type of cap for the end of the lines"
		},
		width: {
			M: "Network",
			T: "integer",
			C: "Pixel width for the edges between nodes"
		},
		anchor: {
			M: "Network",
			T: "boolean",
			C: "Flag make the edge transparent"
		},
		color: {
			M: "Network",
			T: "color",
			C: "Color for the edge"
		},
		hide: {
			M: "Network",
			T: "boolean",
			C: "Flag to hide the edge"
		},
		exact: {
			M: "Network",
			T: "boolean",
			C: "Flag to indicate to create the edge between nodes without subtracting the size of the nodes"
		},
		type: {
			M: "Network",
			T: "string",
			C: "Type of line use to join the nodes"
		}
	}
};
