export const darkThemeChart = {
    "components": {
        "axis": {
            "common": {
                "title": {
                    "autoRotate": true,
                    "position": "center",
                    "spacing": 12,
                    "style": {
                        "fill": "#A6A6A6",
                        "fontSize": 12,
                        "lineHeight": 12,
                        "textBaseline": "middle",
                        "fontFamily": "\"Segoe UI\", Roboto, \"Helvetica Neue\", Arial,\n    \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\",\n    \"Noto Color Emoji\""
                    }
                },
                "label": {
                    "autoRotate": false,
                    "autoEllipsis": false,
                    "autoHide": {
                        "type": "equidistance",
                        "cfg": {
                            "minGap": 6
                        }
                    },
                    "offset": 8,
                    "style": {
                        "fill": "#737373",
                        "fontSize": 12,
                        "lineHeight": 12,
                        "fontFamily": "\"Segoe UI\", Roboto, \"Helvetica Neue\", Arial,\n    \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\",\n    \"Noto Color Emoji\""
                    }
                },
                "line": {
                    "style": {
                        "lineWidth": 1,
                        "stroke": "#404040"
                    }
                },
                "grid": {
                    "line": {
                        "type": "line",
                        "style": {
                            "stroke": "#262626",
                            "lineWidth": 1,
                            "lineDash": null
                        }
                    },
                    "alignTick": true,
                    "animate": true
                },
                "tickLine": {
                    "style": {
                        "lineWidth": 1,
                        "stroke": "#404040"
                    },
                    "alignTick": true,
                    "length": 4
                },
                "subTickLine": null,
                "animate": true
            },
            "top": {
                "position": "top",
                "grid": null,
                "title": null,
                "verticalLimitLength": 0.5
            },
            "bottom": {
                "position": "bottom",
                "grid": null,
                "title": null,
                "verticalLimitLength": 0.5
            },
            "left": {
                "position": "left",
                "title": null,
                "line": null,
                "tickLine": null,
                "verticalLimitLength": 0.3333333333333333
            },
            "right": {
                "position": "right",
                "title": null,
                "line": null,
                "tickLine": null,
                "verticalLimitLength": 0.3333333333333333
            },
            "circle": {
                "title": null,
                "grid": {
                    "line": {
                        "type": "line",
                        "style": {
                            "stroke": "#262626",
                            "lineWidth": 1,
                            "lineDash": null
                        }
                    },
                    "alignTick": true,
                    "animate": true
                }
            },
            "radius": {
                "title": null,
                "grid": {
                    "line": {
                        "type": "circle",
                        "style": {
                            "stroke": "#262626",
                            "lineWidth": 1,
                            "lineDash": null
                        }
                    },
                    "alignTick": true,
                    "animate": true
                }
            }
        },
        "legend": {
            "common": {
                "title": null,
                "marker": {
                    "symbol": "circle",
                    "spacing": 8,
                    "style": {
                        "r": 4,
                        "fill": "#5B8FF9"
                    }
                },
                "itemName": {
                    "spacing": 5,
                    "style": {
                        "fill": "rgba(242, 242, 242, 1)",
                        "fontFamily": "\"Segoe UI\", Roboto, \"Helvetica Neue\", Arial,\n    \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\",\n    \"Noto Color Emoji\"",
                        "fontSize": 12,
                        "lineHeight": 12,
                        "fontWeight": "bolder",
                        "textAlign": "start",
                        "textBaseline": "middle"
                    }
                },
                "itemStates": {
                    "active": {
                        "nameStyle": {
                            "opacity": 0.8
                        }
                    },
                    "unchecked": {
                        "nameStyle": {
                            "fill": "#D8D8D8"
                        },
                        "markerStyle": {
                            "fill": "#D8D8D8",
                            "stroke": "#D8D8D8"
                        }
                    },
                    "inactive": {
                        "nameStyle": {
                            "fill": "#D8D8D8"
                        },
                        "markerStyle": {
                            "opacity": 0.2
                        }
                    }
                },
                "flipPage": true,
                "pageNavigator": {
                    "marker": {
                        "style": {
                            "size": 12,
                            "inactiveFill": "#737373",
                            "inactiveOpacity": 0.45,
                            "fill": "#737373",
                            "opacity": 1
                        }
                    },
                    "text": {
                        "style": {
                            "fill": "#A6A6A6",
                            "fontSize": 12
                        }
                    }
                },
                "animate": false,
                "maxItemWidth": 200,
                "itemSpacing": 24,
                "itemMarginBottom": 12,
                "padding": [
                    8,
                    8,
                    8,
                    8
                ]
            },
            "right": {
                "layout": "vertical",
                "padding": [
                    0,
                    8,
                    0,
                    8
                ]
            },
            "left": {
                "layout": "vertical",
                "padding": [
                    0,
                    8,
                    0,
                    8
                ]
            },
            "top": {
                "layout": "horizontal",
                "padding": [
                    8,
                    0,
                    8,
                    0
                ]
            },
            "bottom": {
                "layout": "horizontal",
                "padding": [
                    8,
                    0,
                    8,
                    0
                ]
            },
            "continuous": {
                "title": null,
                "background": null,
                "track": {},
                "rail": {
                    "type": "color",
                    "size": 12,
                    "defaultLength": 100,
                    "style": {
                        "fill": "#262626",
                        "stroke": null,
                        "lineWidth": 0
                    }
                },
                "label": {
                    "align": "rail",
                    "spacing": 4,
                    "formatter": null,
                    "style": {
                        "fill": "#737373",
                        "fontSize": 12,
                        "lineHeight": 12,
                        "textBaseline": "middle",
                        "fontFamily": "\"Segoe UI\", Roboto, \"Helvetica Neue\", Arial,\n    \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\",\n    \"Noto Color Emoji\""
                    }
                },
                "handler": {
                    "size": 10,
                    "style": {
                        "fill": "#F0F0F0",
                        "stroke": "#BFBFBF"
                    }
                },
                "slidable": true,
                "padding": [
                    8,
                    8,
                    8,
                    8
                ]
            }
        },
        "tooltip": {
            "showContent": true,
            "follow": true,
            "showCrosshairs": false,
            "showMarkers": true,
            "shared": false,
            "enterable": false,
            "position": "auto",
            "marker": {
                "symbol": "circle",
                "stroke": "#fff",
                "shadowBlur": 10,
                "shadowOffsetX": 0,
                "shadowOffsetY": 0,
                "shadowColor": "rgba(0,0,0,0.09)",
                "lineWidth": 2,
                "r": 4
            },
            "crosshairs": {
                "line": {
                    "style": {
                        "stroke": "#404040",
                        "lineWidth": 1
                    }
                },
                "text": null,
                "textBackground": {
                    "padding": 2,
                    "style": {
                        "fill": "rgba(0, 0, 0, 0.25)",
                        "lineWidth": 0,
                        "stroke": null
                    }
                },
                "follow": false
            },
            "domStyles": {
                "g2-tooltip": {
                    "position": "absolute",
                    "visibility": "hidden",
                    "zIndex": 8,
                    "transition": "left 0.4s cubic-bezier(0.23, 1, 0.32, 1) 0s, top 0.4s cubic-bezier(0.23, 1, 0.32, 1) 0s",
                    "backgroundColor": "#1f1f1f",
                    "opacity": 0.95,
                    "boxShadow": "0px 2px 4px rgba(0,0,0,.5)",
                    "borderRadius": "3px",
                    "color": "#A6A6A6",
                    "fontSize": "12px",
                    "fontFamily": "\"Segoe UI\", Roboto, \"Helvetica Neue\", Arial,\n    \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\",\n    \"Noto Color Emoji\"",
                    "lineHeight": "12px",
                    "padding": "0 12px 0 12px"
                },
                "g2-tooltip-title": {
                    "marginBottom": "12px",
                    "marginTop": "12px"
                },
                "g2-tooltip-list": {
                    "margin": 0,
                    "listStyleType": "none",
                    "padding": 0
                },
                "g2-tooltip-list-item": {
                    "listStyleType": "none",
                    "padding": 0,
                    "marginBottom": "12px",
                    "marginTop": "12px",
                    "marginLeft": 0,
                    "marginRight": 0
                },
                "g2-tooltip-marker": {
                    "width": "8px",
                    "height": "8px",
                    "borderRadius": "50%",
                    "display": "inline-block",
                    "marginRight": "8px"
                },
                "g2-tooltip-value": {
                    "display": "inline-block",
                    "float": "right",
                    "marginLeft": "30px"
                }
            }
        },
        "annotation": {
            "arc": {
                "style": {
                    "stroke": "#262626",
                    "lineWidth": 1
                },
                "animate": true
            },
            "line": {
                "style": {
                    "stroke": "#404040",
                    "lineDash": null,
                    "lineWidth": 1
                },
                "text": {
                    "position": "start",
                    "autoRotate": true,
                    "style": {
                        "fill": "#A6A6A6",
                        "stroke": null,
                        "lineWidth": 0,
                        "fontSize": 12,
                        "textAlign": "start",
                        "fontFamily": "\"Segoe UI\", Roboto, \"Helvetica Neue\", Arial,\n    \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\",\n    \"Noto Color Emoji\"",
                        "textBaseline": "bottom"
                    }
                },
                "animate": true
            },
            "text": {
                "style": {
                    "fill": "#A6A6A6",
                    "stroke": null,
                    "lineWidth": 0,
                    "fontSize": 12,
                    "textBaseline": "middle",
                    "textAlign": "start",
                    "fontFamily": "\"Segoe UI\", Roboto, \"Helvetica Neue\", Arial,\n    \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\",\n    \"Noto Color Emoji\""
                },
                "animate": true
            },
            "region": {
                "top": false,
                "style": {
                    "lineWidth": 0,
                    "stroke": null,
                    "fill": "#FFFFFF",
                    "fillOpacity": 0.06
                },
                "animate": true
            },
            "image": {
                "top": false,
                "animate": true
            },
            "dataMarker": {
                "top": true,
                "point": {
                    "style": {
                        "r": 3,
                        "stroke": "#5B8FF9",
                        "lineWidth": 2
                    }
                },
                "line": {
                    "style": {
                        "stroke": "#404040",
                        "lineWidth": 1
                    },
                    "length": 16
                },
                "text": {
                    "style": {
                        "textAlign": "start",
                        "fill": "#A6A6A6",
                        "stroke": null,
                        "lineWidth": 0,
                        "fontSize": 12,
                        "fontFamily": "\"Segoe UI\", Roboto, \"Helvetica Neue\", Arial,\n    \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\",\n    \"Noto Color Emoji\""
                    }
                },
                "direction": "upward",
                "autoAdjust": true,
                "animate": true
            },
            "dataRegion": {
                "style": {
                    "region": {
                        "fill": "#FFFFFF",
                        "fillOpacity": 0.06
                    },
                    "text": {
                        "textAlign": "center",
                        "textBaseline": "bottom",
                        "fill": "#A6A6A6",
                        "stroke": null,
                        "lineWidth": 0,
                        "fontSize": 12,
                        "fontFamily": "\"Segoe UI\", Roboto, \"Helvetica Neue\", Arial,\n    \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\",\n    \"Noto Color Emoji\""
                    }
                },
                "animate": true
            }
        },
        "slider": {
            "common": {
                "padding": [
                    8,
                    8,
                    8,
                    8
                ],
                "backgroundStyle": {
                    "fill": "#416180",
                    "opacity": 0.05
                },
                "foregroundStyle": {
                    "fill": "#5B8FF9",
                    "opacity": 0.15
                },
                "handlerStyle": {
                    "width": 10,
                    "height": 24,
                    "fill": "#F7F7F7",
                    "opacity": 1,
                    "stroke": "#BFBFBF",
                    "lineWidth": 1,
                    "radius": 2,
                    "highLightFill": "#FFF"
                },
                "textStyle": {
                    "fill": "#fff",
                    "opacity": 0.45,
                    "fontSize": 12,
                    "lineHeight": 12,
                    "fontWeight": "normal",
                    "stroke": null,
                    "lineWidth": 0
                }
            }
        },
        "scrollbar": {
            "common": {
                "padding": [
                    8,
                    8,
                    8,
                    8
                ]
            },
            "default": {
                "style": {
                    "trackColor": "rgba(255,255,255,0.65)",
                    "thumbColor": "rgba(0,0,0,0.35)"
                }
            },
            "hover": {
                "style": {
                    "thumbColor": "rgba(0,0,0,0.45)"
                }
            }
        }
    },
}