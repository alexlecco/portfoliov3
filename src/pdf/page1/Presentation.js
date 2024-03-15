import React from "react"
import { View, Text, Image, Link } from "@react-pdf/renderer"

const getSocialNetwork = (network, styles) => {
  return network.name !== "gmail" ? (
    <View style={{ flex: 1, flexDirection: "row", paddingBottom: 20 }} key={network.name}>
      <View style={styles.image}>
        <Image src={network.iconPdf} />
      </View>
      <Link style={{ color: "#37aef7" }}>{network.url}</Link>
    </View>
  ) : null
}

function Presentation({ data, styles, t }) {
  const getAge = birthday => {
    const formattedBirthday = new Date(birthday.year, birthday.month, birthday.day)
    const diff_ms = Date.now() - formattedBirthday.getTime()
    const age_dt = new Date(diff_ms)
  
    return Math.abs(age_dt.getUTCFullYear() - 1970)
  }
  
  return (
    <View style={styles.section}>
      <Text style={styles.documentTitle}>
        {t("pdf.presentation.greetings")}{" "}
        <Text style={{ color: "#811ADA" }}>{data.name}</Text>
      </Text>
      <Text>
        {`${t("pdf.presentation.myResidence")} ${data.city}, ${data.country}`}
      </Text>
      <Text>{`${t("pdf.presentation.myAge1")} ${getAge(data.birthday)} ${t(
        "pdf.presentation.myAge2"
      )}`}</Text>
      <Text>{`${t("pdf.presentation.myPhone")} ${data.phone}`}</Text>
      <Text>
        {t("pdf.presentation.myEmail")}{" "}
        <Link style={{ color: "#37aef7" }}>{data.email}</Link>
      </Text>
      <Text style={{ fontWeight: 500, marginBottom: 5, marginTop: 10 }}>
        {t("pdf.presentation.knowMe")}
      </Text>
      {data.social.map(network => getSocialNetwork(network, styles))}
    </View>
  )
}

export default Presentation
