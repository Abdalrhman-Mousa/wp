<?php
/**
 * XSL Header template for the sitemap.
 *
 * @since 4.1.5
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// phpcs:disable
?>
<xsl:template name="Header">
	<xsl:param name="title"/>
	<xsl:param name="amountOfURLs"/>
	<xsl:param name="fileType"/>

	<div id="content-head">
		<h1><xsl:value-of select="$title"/></h1>
		<p><?php echo __( 'Generated by', 'all-in-one-seo-pack' ); ?> <a href="<?php echo aioseo()->helpers->utmUrl( AIOSEO_MARKETING_URL, $data['utmMedium'] ); ?>" target="_blank"><?php echo AIOSEO_PLUGIN_NAME; ?></a>, <?php echo __( 'this is an XML Sitemap, meant to be consumed by search engines like Google or Bing.', 'all-in-one-seo-pack' ); ?></p>
		<p>
			<?php
				// Translators: 1 - Opening HTML link tag, 2 - Closing HTML link tag.
				printf( __( 'You can find more information about XML Sitemaps at %1$ssitemaps.org%2$s.', 'all-in-one-seo-pack' ), '<a href="https://www.sitemaps.org/" target="_blank" rel="noreferrer noopener">', '</a>');
			?>
		</p>
		<xsl:if test="$amountOfURLs &gt; 0">
			<p>
				<xsl:choose>
					<xsl:when test="$fileType='Sitemap' or $fileType='RSS'">
						<?php echo __( 'This sitemap contains', 'all-in-one-seo-pack' ); ?>
						<xsl:value-of select="$amountOfURLs"/>
						<xsl:choose>
							<xsl:when test="$amountOfURLs = 1">
								<?php _e( 'URL', 'all-in-one-seo-pack' ); ?>
							</xsl:when>
							<xsl:otherwise>
								<?php _e( 'URLs', 'all-in-one-seo-pack' ); ?>
							</xsl:otherwise>
						</xsl:choose>
					</xsl:when>
					<xsl:otherwise>
						<?php echo __( 'This sitemap index contains', 'all-in-one-seo-pack' ); ?>
						<xsl:value-of select="$amountOfURLs"/>
						<xsl:choose>
							<xsl:when test="$amountOfURLs = 1">
								<?php _e( 'sitemap', 'all-in-one-seo-pack' ); ?>
							</xsl:when>
							<xsl:otherwise>
								<?php _e( 'sitemaps', 'all-in-one-seo-pack' ); ?>
							</xsl:otherwise>
						</xsl:choose>
					</xsl:otherwise>
				</xsl:choose>
				<?php 
					// Translators: 1 - The generated date, 2 - The generated time.
					echo sprintf( 
						__( 'and was generated on %1$s at %2$s', 'all-in-one-seo-pack' ),
						date_i18n( get_option( 'date_format' ) ),
						date_i18n( get_option( 'time_format' ) )
					); 
				?>
			</p>
		</xsl:if>
	</div>
</xsl:template>