import React from "react"
import { Link } from "react-router-dom"
import { HOME_LINK } from "../utils/default"

export const ComeBack: React.FC = () => <Link to={HOME_LINK} className="come_back">Home page</Link>