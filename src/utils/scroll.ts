export const isElementVisible = (parent: HTMLElement, child: HTMLElement) => {
    const parentRect = parent.getBoundingClientRect()
    const parentTop = parentRect.top
    const parentBottom = parentRect.bottom
  
    const childRect = child.getBoundingClientRect()
    const childTop = childRect.top
    const childBottom = childRect.bottom
  
    const isParentScrollable = parent.scrollHeight > parent.clientHeight
    // Check for parent's position either static or relative
    const isParentOffsetStatic =
      window.getComputedStyle(parent).position === "static"
  
    if (!isParentScrollable || isParentOffsetStatic) {
      console.warn(
        "Parent element must have overflow property set to scroll or auto"
      )
    }
    return childBottom <= parentBottom && childTop >= parentTop
  }
  
  export const scrollToElement = (parent: HTMLElement, child: HTMLElement) => {
    if (!isElementVisible(parent, child)) {
      const offsetTop = child.offsetTop
      parent.scrollTop = offsetTop
    }
  }
  