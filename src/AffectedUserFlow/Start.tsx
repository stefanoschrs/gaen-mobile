import React, { FunctionComponent } from "react"
import {
  StyleSheet,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native"
import { useTranslation } from "react-i18next"
import { useNavigation } from "@react-navigation/native"
import { SvgXml } from "react-native-svg"

import { useStatusBarEffect, AffectedUserFlowStackScreens } from "../navigation"
import { useCustomCopy } from "../configuration/useCustomCopy"
import { Text } from "../components"

import { Spacing, Colors, Typography, Buttons, Iconography } from "../styles"
import { Icons, Images } from "../assets"

export const AffectedUserFlowIntro: FunctionComponent = () => {
  useStatusBarEffect("dark-content", Colors.background.primaryLight)
  const { t } = useTranslation()
  const navigation = useNavigation()
  const { healthAuthorityName } = useCustomCopy()

  const handleOnPressContinue = () => {
    navigation.navigate(AffectedUserFlowStackScreens.AffectedUserCodeInput)
  }

  const handleOnPressSecondaryButton = () => {
    navigation.navigate(AffectedUserFlowStackScreens.VerificationCodeInfo)
  }

  return (
    <ScrollView
      style={style.container}
      contentContainerStyle={style.contentContainer}
      alwaysBounceVertical={false}
    >
      <View>
        <Image
          source={Images.HowItWorksValueProposition}
          style={style.image}
          accessible
          accessibilityLabel={t("export.person_and_health_expert")}
        />
        <Text style={style.headerText}>{t("export.intro.header")}</Text>
        <Text style={style.bodyText}>
          {t("export.intro.body1", { healthAuthorityName })}
        </Text>
        <Text style={style.bodyText}>
          {t("export.intro.body2", { healthAuthorityName })}
        </Text>
      </View>
      <View>
        <TouchableOpacity
          style={style.button}
          onPress={handleOnPressContinue}
          accessibilityLabel={t("common.continue")}
        >
          <Text style={style.buttonText}>{t("common.continue")}</Text>
          <SvgXml xml={Icons.Arrow} fill={Colors.background.primaryLight} />
        </TouchableOpacity>
        <TouchableOpacity
          style={style.secondaryButton}
          onPress={handleOnPressSecondaryButton}
          accessibilityLabel={t("export.intro.what_is_a")}
        >
          <View style={style.secondaryButtonIconContainer}>
            <SvgXml
              xml={Icons.QuestionMark}
              fill={Colors.primary.shade125}
              width={Iconography.xxxSmall}
              height={Iconography.xxxSmall}
            />
          </View>
          <Text style={style.secondaryButtonText}>
            {t("export.intro.what_is_a")}
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

const imageSize = 140

const style = StyleSheet.create({
  container: {
    backgroundColor: Colors.background.primaryLight,
  },
  contentContainer: {
    flexGrow: 1,
    justifyContent: "space-between",
    paddingHorizontal: Spacing.large,
    paddingBottom: Spacing.xxLarge,
    backgroundColor: Colors.background.primaryLight,
  },
  image: {
    resizeMode: "contain",
    width: imageSize,
    height: imageSize,
    marginBottom: Spacing.xSmall,
  },
  headerText: {
    ...Typography.header.x60,
    marginBottom: Spacing.small,
  },
  bodyText: {
    ...Typography.body.x30,
    marginBottom: Spacing.medium,
  },
  button: {
    ...Buttons.primary.base,
    marginBottom: Spacing.small,
  },
  buttonText: {
    ...Typography.button.primary,
    marginRight: Spacing.small,
  },
  secondaryButton: {
    ...Buttons.secondary.leftIcon,
  },
  secondaryButtonIconContainer: {
    ...Buttons.circle.base,
  },
  secondaryButtonText: {
    ...Typography.button.secondaryLeftIcon,
  },
})

export default AffectedUserFlowIntro
