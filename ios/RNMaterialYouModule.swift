//
//  RNMaterialYouModule.swift
//  RNMaterialYouModule
//
//  Copyright © 2021 Assembless. All rights reserved.
//

import Foundation

@objc(RNMaterialYouModule)
class RNMaterialYouModule: NSObject {
  @objc
  func constantsToExport() -> [AnyHashable : Any]! {
    return ["count": 1]
  }

  @objc
  static func requiresMainQueueSetup() -> Bool {
    return true
  }
}
